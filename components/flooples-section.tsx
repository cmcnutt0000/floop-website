"use client";

import { useState } from "react";
import Image from "next/image";
import { useRive } from "@rive-app/react-canvas";
import { useLanguage } from "@/lib/i18n/language-context";

interface Floople {
  id: string;
  color: string;
  bgColor: string;
  borderColor: string;
  nameKey: keyof typeof floopleTranslationKeys;
  descKey: keyof typeof floopleTranslationKeys;
  emoji: string;
  iconImage?: string;
  riveFile?: string;
  stateMachine?: string;
}

// Map floople IDs to translation keys
const floopleTranslationKeys = {
  great: "great",
  greatDesc: "greatDesc",
  needsImprovement: "needsImprovement",
  needsImprovementDesc: "needsImprovementDesc",
  confused: "confused",
  confusedDesc: "confusedDesc",
  curious: "curious",
  curiousDesc: "curiousDesc",
  loveIt: "loveIt",
  loveItDesc: "loveItDesc",
  funny: "funny",
  funnyDesc: "funnyDesc",
  creative: "creative",
  creativeDesc: "creativeDesc",
  almostThere: "almostThere",
  almostThereDesc: "almostThereDesc",
} as const;

const floopleData: Floople[] = [
  {
    id: "great",
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
    borderColor: "border-emerald-300",
    nameKey: "great",
    descKey: "greatDesc",
    emoji: "stars",
    iconImage: "/images/great.svg",
    riveFile: "/images/rive/great.riv",
    stateMachine: "animation",
  },
  {
    id: "improvement",
    color: "text-amber-600",
    bgColor: "bg-amber-100",
    borderColor: "border-amber-300",
    nameKey: "needsImprovement",
    descKey: "needsImprovementDesc",
    emoji: "pencil",
    iconImage: "/images/NeedsImprovement.svg",
    riveFile: "/images/rive/needsimprovement.riv",
    stateMachine: "State Machine 1",
  },
  {
    id: "confused",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    borderColor: "border-purple-300",
    nameKey: "confused",
    descKey: "confusedDesc",
    emoji: "question",
    iconImage: "/images/Confused.svg",
    riveFile: "/images/rive/confused.riv",
    stateMachine: "State Machine 1",
  },
  {
    id: "curious",
    color: "text-pink-600",
    bgColor: "bg-pink-100",
    borderColor: "border-pink-300",
    nameKey: "curious",
    descKey: "curiousDesc",
    emoji: "curious",
    iconImage: "/images/Curious.svg",
    riveFile: "/images/rive/curious.riv",
    stateMachine: "State Machine 1",
  },
  {
    id: "love",
    color: "text-rose-600",
    bgColor: "bg-rose-100",
    borderColor: "border-rose-300",
    nameKey: "loveIt",
    descKey: "loveItDesc",
    emoji: "heart",
    iconImage: "/images/Love.svg",
    riveFile: "/images/rive/love.riv",
    stateMachine: "State Machine 1",
  },
  {
    id: "funny",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    borderColor: "border-orange-300",
    nameKey: "funny",
    descKey: "funnyDesc",
    emoji: "laugh",
    iconImage: "/images/Laughing.svg",
    riveFile: "/images/rive/laughing.riv",
    stateMachine: "State Machine 1",
  },
  {
    id: "creative",
    color: "text-teal-600",
    bgColor: "bg-teal-100",
    borderColor: "border-teal-300",
    nameKey: "creative",
    descKey: "creativeDesc",
    emoji: "creative",
    iconImage: "/images/Creative.svg",
    riveFile: "/images/rive/Creative.riv",
    stateMachine: "State Machine 1",
  },
  {
    id: "almost",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    borderColor: "border-blue-300",
    nameKey: "almostThere",
    descKey: "almostThereDesc",
    emoji: "target",
    iconImage: "/images/Close.svg",
    riveFile: "/images/rive/Close.riv",
    stateMachine: "State Machine 1",
  },
];

function RiveAnimation({
  src,
  stateMachine = "animation",
}: {
  src: string;
  stateMachine?: string;
}) {
  const { RiveComponent } = useRive({
    src,
    stateMachines: stateMachine,
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
  name,
  size = "large",
}: {
  floople: Floople;
  name: string;
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
          alt={name}
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
  const { t } = useLanguage();
  const [selectedFloople, setSelectedFloople] = useState<Floople>(
    floopleData[0],
  );

  // Helper to get translated name/description
  const getFloopleName = (floople: Floople) => {
    return t.flooples[floople.nameKey as keyof typeof t.flooples] as string;
  };

  const getFloopleDesc = (floople: Floople) => {
    return t.flooples[floople.descKey as keyof typeof t.flooples] as string;
  };

  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8 max-w-[1400px]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Title, Description, and Selector */}
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t.flooples.title}
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
              {t.flooples.subtitle}
            </p>

            {/* Floople Selector Grid */}
            <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-sm border border-border">
              <div className="grid grid-cols-4 gap-2 lg:gap-3">
                {floopleData.map((floople) => (
                  <button
                    key={floople.id}
                    onClick={() => setSelectedFloople(floople)}
                    className={`p-2 lg:p-3 rounded-xl border-2 transition-all duration-200 flex flex-col items-center justify-center cursor-pointer h-[88px] lg:h-[100px] ${
                      selectedFloople.id === floople.id
                        ? `${floople.bgColor} ${floople.borderColor} scale-105 shadow-md`
                        : "bg-gray-50 border-gray-200 hover:border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    <FloopleIcon
                      floople={floople}
                      name={getFloopleName(floople)}
                      size="small"
                    />
                    <p
                      className={`text-[10px] lg:text-xs font-medium mt-1 ${
                        selectedFloople.id === floople.id
                          ? floople.color
                          : "text-gray-600"
                      }`}
                    >
                      {getFloopleName(floople)}
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
                <RiveAnimation
                  key={selectedFloople.id}
                  src={selectedFloople.riveFile}
                  stateMachine={selectedFloople.stateMachine}
                />
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
                {getFloopleName(selectedFloople)}
              </p>
              <p className="text-muted-foreground">
                {getFloopleDesc(selectedFloople)}
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
