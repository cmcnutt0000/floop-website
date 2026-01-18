"use client";

import { useEffect, useState, useRef } from "react";

// Floating shapes that move with parallax as you scroll
export function ParallaxBackground() {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {/* Large gradient blob - moves slowly */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)",
          top: `${150 - scrollY * 0.05}px`,
          right: "-150px",
          transform: `translateY(${scrollY * 0.08}px)`,
        }}
      />

      {/* Medium accent blob */}
      <div
        className="absolute w-[350px] h-[350px] rounded-full blur-2xl"
        style={{
          background:
            "radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, transparent 70%)",
          top: `${700 - scrollY * 0.02}px`,
          left: "-80px",
          transform: `translateY(${scrollY * 0.12}px)`,
        }}
      />

      {/* Another blob lower on page */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
          top: `${1400}px`,
          right: "-100px",
          transform: `translateY(${scrollY * -0.06}px)`,
        }}
      />

      {/* Small floating shapes */}
      <div
        className="absolute w-6 h-6 rounded-md bg-accent/20"
        style={{
          top: `${350}px`,
          right: "18%",
          transform: `translateY(${scrollY * -0.15}px) rotate(${45 + scrollY * 0.03}deg)`,
        }}
      />

      <div
        className="absolute w-4 h-4 rounded-full bg-rose-400/20"
        style={{
          top: `${900}px`,
          left: "12%",
          transform: `translateY(${scrollY * -0.2}px)`,
        }}
      />

      <div
        className="absolute w-8 h-8 rounded-md bg-emerald-400/15"
        style={{
          top: `${1300}px`,
          right: "22%",
          transform: `translateY(${scrollY * -0.14}px) rotate(${12 + scrollY * 0.02}deg)`,
        }}
      />

      <div
        className="absolute w-3 h-3 rounded-full bg-amber-400/25"
        style={{
          top: `${600}px`,
          left: "28%",
          transform: `translateY(${scrollY * -0.25}px)`,
        }}
      />

      <div
        className="absolute w-10 h-10 rounded-xl bg-blue-400/10"
        style={{
          top: `${2000}px`,
          left: "10%",
          transform: `translateY(${scrollY * -0.1}px) rotate(${-15 + scrollY * 0.015}deg)`,
        }}
      />

      <div
        className="absolute w-5 h-5 rounded-md bg-purple-400/20"
        style={{
          top: `${2400}px`,
          right: "15%",
          transform: `translateY(${scrollY * -0.18}px) rotate(${30 - scrollY * 0.025}deg)`,
        }}
      />
    </div>
  );
}

// Component to wrap sections and animate them on scroll
export function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(currentRef);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    observer.observe(currentRef);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: "transform 0.5s ease-out",
      }}
    >
      {children}
    </div>
  );
}

// Stagger children animations - simplified version that doesn't break grid
export function StaggerChildren({
  children,
  className = "",
  staggerDelay = 100,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentRef);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(currentRef);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx global>{`
        .stagger-item {
          opacity: 0;
          transform: translateY(20px);
        }
        .stagger-item.visible {
          animation: staggerIn 0.5s ease-out forwards;
        }
        @keyframes staggerIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <div ref={ref} className={className}>
        {Array.isArray(children)
          ? children.map((child, index) => (
              <div
                key={index}
                className={`stagger-item ${isVisible ? "visible" : ""}`}
                style={{
                  animationDelay: isVisible
                    ? `${index * staggerDelay}ms`
                    : "0ms",
                }}
              >
                {child}
              </div>
            ))
          : children}
      </div>
    </>
  );
}
