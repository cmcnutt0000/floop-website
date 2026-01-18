"use client";

import { useState } from "react";
import Image from "next/image";
import { useRive } from "@rive-app/react-canvas";

interface Floople {
  id: string;
  color: string;
  bgColor: string;
  borderColor: string;
  name: string;
  description: string;
  emoji: string;
  iconImage?: string;
  riveFile?: string;
}

const flooples: Floople[] = [
  {
    id: "great",
    color: "text-pink-600",
    bgColor: "bg-pink-100",
    borderColor: "border-pink-300",
    name: "Great!",
    description: "Celebrate excellent work and highlight what's working well",
    emoji: "stars",
    iconImage: "/images/great.png",
    riveFile: "/images/rive/great.riv",
  },
  {
    id: "improvement",
    color: "text-amber-600",
    bgColor: "bg-amber-100",
    borderColor: "border-amber-300",
    name: "Needs Improvement",
    description: "Gently suggest areas where the work could be stronger",
    emoji: "pencil",
  },
  {
    id: "confused",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    borderColor: "border-purple-300",
    name: "Not Sure / Confused",
    description: "Flag parts that are unclear or need more explanation",
    emoji: "question",
  },
  {
    id: "curious",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    borderColor: "border-blue-300",
    name: "Curious",
    description: "I want to know more about this idea",
    emoji: "curious",
  },
  {
    id: "love",
    color: "text-rose-600",
    bgColor: "bg-rose-100",
    borderColor: "border-rose-300",
    name: "Love It!",
    description: "Show enthusiasm for creative or exceptional moments",
    emoji: "heart",
  },
  {
    id: "funny",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    borderColor: "border-orange-300",
    name: "Funny",
    description: "Acknowledge humor and keep feedback lighthearted",
    emoji: "laugh",
  },
  {
    id: "creative",
    color: "text-red-600",
    bgColor: "bg-red-100",
    borderColor: "border-red-300",
    name: "Creative!",
    description: "Original or innovative thinking here",
    emoji: "creative",
  },
  {
    id: "almost",
    color: "text-cyan-600",
    bgColor: "bg-cyan-100",
    borderColor: "border-cyan-300",
    name: "Almost There",
    description: "Encourage students who are close to getting it right",
    emoji: "target",
  },
];

function RiveAnimation({ src }: { src: string }) {
  const { RiveComponent } = useRive({
    src,
    stateMachines: "animation",
    autoplay: true,
  });

  return (
    <div className="w-full h-full">
      <RiveComponent style={{ width: "100%", height: "100%" }} />
    </div>
  );
}

function FloopleIcon({
  floople,
  size = "large",
}: {
  floople: Floople;
  size?: "small" | "large";
}) {
  const sizeClasses = size === "large" ? "w-24 h-24" : "w-12 h-12";
  const iconSize = size === "large" ? "text-4xl" : "text-xl";
  const imgSize = size === "large" ? 64 : 32;

  const getEmoji = (emoji: string) => {
    switch (emoji) {
      case "stars":
        return "✨";
      case "pencil":
        return "📝";
      case "question":
        return "🤔";
      case "thought":
        return "💭";
      case "heart":
        return "❤️";
      case "laugh":
        return "😄";
      case "alert":
        return "⚡";
      case "target":
        return "🎯";
      default:
        return "💬";
    }
  };

  return (
    <div
      className={`${sizeClasses} ${floople.iconImage ? "" : floople.bgColor} ${floople.borderColor} border-2 rounded-2xl flex items-center justify-center shadow-sm overflow-hidden`}
    >
      {floople.iconImage ? (
        <Image
          src={floople.iconImage}
          alt={floople.name}
          width={imgSize}
          height={imgSize}
          className="object-contain"
        />
      ) : (
        <span className={iconSize}>{getEmoji(floople.emoji)}</span>
      )}
    </div>
  );
}

export function FlooplesSection() {
  const [selectedFloople, setSelectedFloople] = useState<Floople>(flooples[0]);

  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8 max-w-[1400px]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Title, Description, and Selector */}
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Meet Our Flooples
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
              Flooples are friendly feedback companions that communicate
              different ideas and types of feedback. They make giving feedback
              fun, easy-going, and help students improve their work without
              feeling overwhelmed.
            </p>

            {/* Floople Selector Grid */}
            <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-sm border border-border">
              <div className="grid grid-cols-4 gap-2 lg:gap-3">
                {flooples.map((floople) => (
                  <button
                    key={floople.id}
                    onClick={() => setSelectedFloople(floople)}
                    className={`p-2 lg:p-3 rounded-xl border-2 transition-all duration-200 flex flex-col items-center justify-center ${
                      selectedFloople.id === floople.id
                        ? `${floople.bgColor} ${floople.borderColor} scale-105 shadow-md`
                        : "bg-gray-50 border-gray-200 hover:border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    <FloopleIcon floople={floople} size="small" />
                    <p
                      className={`text-[10px] lg:text-xs font-medium mt-1 ${
                        selectedFloople.id === floople.id
                          ? floople.color
                          : "text-gray-600"
                      }`}
                    >
                      {floople.name}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Big Floople Display with Description */}
          <div className="flex flex-col items-center justify-center">
            <div
              className={`w-40 h-40 lg:w-56 lg:h-56 ${selectedFloople.bgColor} ${selectedFloople.borderColor} border-4 rounded-3xl flex items-center justify-center shadow-lg mb-6 transition-all duration-300 overflow-hidden`}
            >
              {selectedFloople.riveFile ? (
                <RiveAnimation src={selectedFloople.riveFile} />
              ) : (
                <span className="text-6xl lg:text-8xl">
                  {getEmojiForFloople(selectedFloople.emoji)}
                </span>
              )}
            </div>
            <div
              className={`text-center px-8 py-4 rounded-xl ${selectedFloople.bgColor} ${selectedFloople.borderColor} border-2 max-w-sm`}
            >
              <p className={`font-bold ${selectedFloople.color} text-2xl mb-2`}>
                {selectedFloople.name}
              </p>
              <p className="text-muted-foreground">
                {selectedFloople.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function getEmojiForFloople(emoji: string): string {
  switch (emoji) {
    case "stars":
      return "✨";
    case "pencil":
      return "📝";
    case "question":
      return "🤔";
    case "curious":
      return "🔍";
    case "heart":
      return "❤️";
    case "laugh":
      return "😄";
    case "creative":
      return "💡";
    case "target":
      return "🎯";
    default:
      return "💬";
  }
}
