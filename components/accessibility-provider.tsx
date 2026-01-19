"use client";

import { createContext, useContext, useState, useEffect } from "react";

interface AccessibilityContextType {
  dyslexicFont: boolean;
  toggleDyslexicFont: () => void;
  showModal: boolean;
}

const AccessibilityContext = createContext<AccessibilityContextType>({
  dyslexicFont: false,
  toggleDyslexicFont: () => {},
  showModal: false,
});

export function useAccessibility() {
  return useContext(AccessibilityContext);
}

export function AccessibilityProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [dyslexicFont, setDyslexicFont] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check localStorage for saved preference
    const saved = localStorage.getItem("dyslexic-font");
    if (saved === "true") {
      setDyslexicFont(true);
    }
  }, []);

  useEffect(() => {
    // Apply or remove the dyslexic font class on the body
    if (dyslexicFont) {
      document.body.classList.add("dyslexic-font");
    } else {
      document.body.classList.remove("dyslexic-font");
    }
    // Save preference to localStorage
    localStorage.setItem("dyslexic-font", dyslexicFont.toString());
  }, [dyslexicFont]);

  useEffect(() => {
    // Auto-hide modal after 5 seconds
    if (showModal) {
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showModal]);

  const toggleDyslexicFont = () => {
    setDyslexicFont((prev) => {
      // Only show toast when turning ON
      if (!prev) {
        setShowModal(true);
      }
      return !prev;
    });
  };

  return (
    <AccessibilityContext.Provider
      value={{ dyslexicFont, toggleDyslexicFont, showModal }}
    >
      {children}
      {/* Accessibility Toast */}
      {showModal && (
        <div className="fixed bottom-4 right-4 z-[100] animate-in slide-in-from-bottom-4 fade-in duration-300">
          <div className="bg-white rounded-xl p-4 max-w-sm shadow-xl border-2 border-accent">
            <p className="text-foreground text-sm leading-relaxed">
              This converts our website fonts into OpenDyslexic, a font designed
              against some common symptoms of dyslexia. Available for free via{" "}
              <a
                href="https://opendyslexic.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline font-semibold"
              >
                OpenDyslexic.org
              </a>
              .
            </p>
          </div>
        </div>
      )}
    </AccessibilityContext.Provider>
  );
}
