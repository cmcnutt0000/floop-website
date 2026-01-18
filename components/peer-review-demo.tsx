"use client";

import { useState } from "react";

export function PeerReviewDemo() {
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
      case "rose":
        return "bg-rose-500";
      default:
        return "bg-gray-400";
    }
  };

  const students = [
    {
      name: "Alex M.",
      received: ["emerald", "amber"],
      given: ["emerald", "amber"],
    },
    { name: "Jordan", received: [], given: ["emerald"], isJordan: true }, // Jordan receives user's feedback
    { name: "You", received: ["emerald"], given: [], isUser: true },
    { name: "Sam T.", received: ["amber", "rose"], given: ["emerald"] },
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 p-3 overflow-hidden flex flex-col">
      {/* Student Action Area */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-2 mb-2">
        <p className="text-[8px] font-semibold text-gray-600 mb-1.5">
          Leave feedback for Jordan's essay:
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleColorClick("emerald")}
            disabled={animating || givenFeedback.length >= 3}
            className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="text-[7px] text-gray-600">Praise</span>
          </button>
          <button
            onClick={() => handleColorClick("amber")}
            disabled={animating || givenFeedback.length >= 3}
            className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded border border-gray-200 hover:border-amber-300 hover:bg-amber-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <span className="text-[7px] text-gray-600">Suggestion</span>
          </button>
          <button
            onClick={() => handleColorClick("rose")}
            disabled={animating || givenFeedback.length >= 3}
            className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded border border-gray-200 hover:border-rose-300 hover:bg-rose-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="w-3 h-3 rounded-full bg-rose-500" />
            <span className="text-[7px] text-gray-600">Correction</span>
          </button>
        </div>
      </div>

      {/* Teacher Dashboard View */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 flex-1 relative overflow-hidden">
        <div className="px-2 py-1 border-b border-gray-100 bg-gray-50">
          <p className="text-[8px] font-semibold text-gray-600">
            Teacher View: Peer Feedback At-a-Glance
          </p>
        </div>

        {/* Header */}
        <div className="grid grid-cols-[1fr_50px_50px] gap-1 px-2 py-1 border-b border-gray-100 bg-gray-50/50">
          <div className="text-[7px] font-semibold text-gray-500">Student</div>
          <div className="text-[7px] font-semibold text-gray-500 text-center">
            Received
          </div>
          <div className="text-[7px] font-semibold text-gray-500 text-center">
            Given
          </div>
        </div>

        {/* Student rows */}
        <div className="divide-y divide-gray-50">
          {students.map((student, idx) => {
            const isHighlighted = student.isUser || student.isJordan;
            return (
              <div
                key={idx}
                className={`grid grid-cols-[1fr_50px_50px] gap-1 px-2 py-1.5 ${isHighlighted ? "bg-accent/5" : ""}`}
              >
                <div className="flex items-center gap-1.5">
                  <div
                    className={`w-4 h-4 rounded-full ${isHighlighted ? "bg-accent" : "bg-accent/20"} flex items-center justify-center`}
                  >
                    <span
                      className={`text-[6px] font-bold ${isHighlighted ? "text-white" : "text-accent"}`}
                    >
                      {student.name.charAt(0)}
                    </span>
                  </div>
                  <span
                    className={`text-[8px] font-medium ${isHighlighted ? "text-accent" : "text-gray-700"}`}
                  >
                    {student.name}
                  </span>
                </div>
                {/* Received column */}
                <div className="flex items-center justify-center gap-0.5">
                  {student.received.map((color, dotIdx) => (
                    <div
                      key={dotIdx}
                      className={`w-2 h-2 rounded-full ${getDotColor(color)}`}
                    />
                  ))}
                  {/* Show Jordan's received feedback from user */}
                  {student.isJordan &&
                    jordanReceived.map((color, dotIdx) => (
                      <div
                        key={`jordan-received-${dotIdx}`}
                        className={`w-2 h-2 rounded-full ${getDotColor(color)} animate-in fade-in zoom-in duration-300`}
                      />
                    ))}
                </div>
                {/* Given column */}
                <div className="flex items-center justify-center gap-0.5">
                  {student.given.map((color, dotIdx) => (
                    <div
                      key={dotIdx}
                      className={`w-2 h-2 rounded-full ${getDotColor(color)}`}
                    />
                  ))}
                  {/* Show user's given feedback */}
                  {student.isUser &&
                    givenFeedback.map((color, dotIdx) => (
                      <div
                        key={`given-${dotIdx}`}
                        className={`w-2 h-2 rounded-full ${getDotColor(color)} animate-in fade-in zoom-in duration-300`}
                      />
                    ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Animating dots - one to Jordan's Received, one to Your Given */}
        {selectedColor && animating && (
          <>
            {/* Dot flying to Jordan's Received column */}
            <div
              className={`absolute w-3 h-3 rounded-full ${getDotColor(selectedColor)} shadow-lg`}
              style={{
                top: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                animation: "flyToJordan 0.8s ease-in-out forwards",
              }}
            />
            {/* Dot flying to Your Given column */}
            <div
              className={`absolute w-3 h-3 rounded-full ${getDotColor(selectedColor)} shadow-lg`}
              style={{
                top: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                animation: "flyToYou 0.8s ease-in-out forwards",
              }}
            />
          </>
        )}

        {/* Inline keyframes */}
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
        <div className="absolute bottom-0.5 left-0 right-0 text-center">
          <p className="text-[7px] text-gray-400">
            {givenFeedback.length >= 3
              ? "Feedback complete!"
              : "Click a button to leave feedback"}
          </p>
        </div>
      </div>
    </div>
  );
}
