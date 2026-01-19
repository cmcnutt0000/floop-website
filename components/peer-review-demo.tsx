"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/language-context";

export function PeerReviewDemo() {
  const { t } = useLanguage();
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [animating, setAnimating] = useState(false);
  const [givenFeedback, setGivenFeedback] = useState<string[]>([]);
  const [jordanReceived, setJordanReceived] = useState<string[]>([]);

  const handleColorClick = (color: string) => {
    if (animating || givenFeedback.length >= 3) return;

    setSelectedColor(color);
    setAnimating(true);

    // After animation, add to both dashboards
    setTimeout(() => {
      setGivenFeedback((prev) => [...prev, color]);
      setJordanReceived((prev) => [...prev, color]);
      setSelectedColor(null);
      setAnimating(false);
    }, 800);
  };

  const getDotColor = (color: string) => {
    switch (color) {
      case "emerald":
        return "bg-emerald-500";
      case "amber":
        return "bg-amber-500";
      case "purple":
        return "bg-purple-500";
      default:
        return "bg-gray-400";
    }
  };

  const students = [
    {
      name: "Alex",
      received: ["emerald", "amber"],
      given: ["emerald", "amber"],
    },
    { name: "Jayden", received: ["emerald"], given: ["amber"] },
    {
      name: "Liu",
      received: ["amber", "purple"],
      given: ["emerald", "purple"],
    },
    { name: "Jordan", received: [], given: ["emerald"], isJordan: true },
    { name: "You", received: ["emerald"], given: [], isUser: true },
    { name: "Aisha", received: ["emerald", "amber"], given: ["amber"] },
    { name: "Sam", received: ["amber", "purple"], given: ["emerald"] },
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 p-4 overflow-hidden flex flex-col">
      {/* Student Action Area */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3 mb-3">
        <p className="text-xs font-semibold text-gray-600 mb-2">
          {t.peerReviewDemo.leaveFeedbackFor}
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleColorClick("emerald")}
            disabled={animating || givenFeedback.length >= 3}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="w-3.5 h-3.5 rounded-full bg-emerald-500" />
            <span className="text-xs text-gray-600">
              {t.peerReviewDemo.praise}
            </span>
          </button>
          <button
            onClick={() => handleColorClick("amber")}
            disabled={animating || givenFeedback.length >= 3}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded border border-gray-200 hover:border-amber-300 hover:bg-amber-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="w-3.5 h-3.5 rounded-full bg-amber-500" />
            <span className="text-xs text-gray-600">
              {t.peerReviewDemo.suggestion}
            </span>
          </button>
          <button
            onClick={() => handleColorClick("purple")}
            disabled={animating || givenFeedback.length >= 3}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="w-3.5 h-3.5 rounded-full bg-purple-500" />
            <span className="text-xs text-gray-600">
              {t.peerReviewDemo.correction}
            </span>
          </button>
        </div>
      </div>

      {/* Teacher Dashboard View */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 flex-1 relative overflow-hidden">
        <div className="px-3 py-2 border-b border-gray-100 bg-gray-50">
          <p className="text-xs font-semibold text-gray-600">
            {t.peerReviewDemo.teacherView}
          </p>
        </div>

        {/* Header */}
        <div className="grid grid-cols-[1fr_60px_60px] gap-1 px-3 py-1.5 border-b border-gray-100 bg-gray-50/50">
          <div className="text-xs font-semibold text-gray-500">
            {t.peerReviewDemo.student}
          </div>
          <div className="text-xs font-semibold text-gray-500 text-center">
            {t.peerReviewDemo.received}
          </div>
          <div className="text-xs font-semibold text-gray-500 text-center">
            {t.peerReviewDemo.given}
          </div>
        </div>

        {/* Student rows */}
        <div className="divide-y divide-gray-50">
          {students.map((student, idx) => {
            const isHighlighted = student.isUser || student.isJordan;
            return (
              <div
                key={idx}
                className={`grid grid-cols-[1fr_60px_60px] gap-1 px-3 py-2 ${isHighlighted ? "bg-accent/5" : ""}`}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`w-5 h-5 rounded-full ${isHighlighted ? "bg-accent" : "bg-accent/20"} flex items-center justify-center`}
                  >
                    <span
                      className={`text-[9px] font-bold ${isHighlighted ? "text-white" : "text-accent"}`}
                    >
                      {student.name.charAt(0)}
                    </span>
                  </div>
                  <span
                    className={`text-xs font-medium ${isHighlighted ? "text-accent" : "text-gray-700"}`}
                  >
                    {student.name}
                  </span>
                </div>
                {/* Received column */}
                <div className="flex items-center justify-center gap-1">
                  {student.received.map((color, dotIdx) => (
                    <div
                      key={dotIdx}
                      className={`w-2.5 h-2.5 rounded-full ${getDotColor(color)}`}
                    />
                  ))}
                  {student.isJordan &&
                    jordanReceived.map((color, dotIdx) => (
                      <div
                        key={`jordan-received-${dotIdx}`}
                        className={`w-2.5 h-2.5 rounded-full ${getDotColor(color)} animate-in fade-in zoom-in duration-300`}
                      />
                    ))}
                </div>
                {/* Given column */}
                <div className="flex items-center justify-center gap-1">
                  {student.given.map((color, dotIdx) => (
                    <div
                      key={dotIdx}
                      className={`w-2.5 h-2.5 rounded-full ${getDotColor(color)}`}
                    />
                  ))}
                  {student.isUser &&
                    givenFeedback.map((color, dotIdx) => (
                      <div
                        key={`given-${dotIdx}`}
                        className={`w-2.5 h-2.5 rounded-full ${getDotColor(color)} animate-in fade-in zoom-in duration-300`}
                      />
                    ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Animating dots */}
        {selectedColor && animating && (
          <>
            <div
              className={`absolute w-3.5 h-3.5 rounded-full ${getDotColor(selectedColor)} shadow-lg`}
              style={{
                top: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                animation: "flyToJordan 0.8s ease-in-out forwards",
              }}
            />
            <div
              className={`absolute w-3.5 h-3.5 rounded-full ${getDotColor(selectedColor)} shadow-lg`}
              style={{
                top: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                animation: "flyToYou 0.8s ease-in-out forwards",
              }}
            />
          </>
        )}

        <style jsx>{`
          @keyframes flyToJordan {
            0% {
              top: -10px;
              left: 50%;
              transform: translateX(-50%) scale(1.5);
              opacity: 1;
            }
            100% {
              top: 52px;
              left: 75%;
              transform: translateX(-50%) scale(1);
              opacity: 0;
            }
          }
          @keyframes flyToYou {
            0% {
              top: -10px;
              left: 50%;
              transform: translateX(-50%) scale(1.5);
              opacity: 1;
            }
            100% {
              top: 72px;
              left: 95%;
              transform: translateX(-50%) scale(1);
              opacity: 0;
            }
          }
        `}</style>

        {/* Helper text */}
        <div className="absolute bottom-1 left-0 right-0 text-center">
          <p className="text-xs text-gray-400">
            {givenFeedback.length >= 3
              ? t.peerReviewDemo.feedbackComplete
              : t.peerReviewDemo.clickToLeaveFeedback}
          </p>
        </div>
      </div>
    </div>
  );
}
