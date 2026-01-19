"use client";

import { useState } from "react";

const sampleFeedback = [
  { id: 1, name: "Alex", feedback: "Love the colors!", color: "bg-blue-100" },
  { id: 2, name: "Jayden", feedback: "Great shading", color: "bg-green-100" },
  { id: 3, name: "Liu", feedback: "Nice perspective", color: "bg-purple-100" },
  { id: 4, name: "Aisha", feedback: "Beautiful work!", color: "bg-pink-100" },
  { id: 5, name: "Jordan", feedback: "Very creative", color: "bg-yellow-100" },
  {
    id: 6,
    name: "Destiny",
    feedback: "I like this style",
    color: "bg-orange-100",
  },
  { id: 7, name: "Sam", feedback: "Cool details", color: "bg-teal-100" },
  { id: 8, name: "Ava", feedback: "Impressive!", color: "bg-red-100" },
  { id: 9, name: "Maya", feedback: "Keep it up!", color: "bg-indigo-100" },
  { id: 10, name: "Drew", feedback: "Unique approach", color: "bg-cyan-100" },
  { id: 11, name: "Jamie", feedback: "Well done!", color: "bg-emerald-100" },
];

export function ActivityDemo() {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = () => {
    if (feedback.trim()) {
      setSubmitted(true);
      // Delay showing results for smooth fade transition
      setTimeout(() => setShowResults(true), 50);
    }
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-secondary to-secondary/50 p-4 overflow-hidden relative">
      {/* Drawing view with feedback input */}
      <div
        className={`absolute inset-0 p-4 transition-opacity duration-500 ${submitted ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        {/* Background image */}
        <div className="absolute inset-4 bottom-24 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <img
            src="/images/forfeedback.png"
            alt="Student work for feedback"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Feedback input - fixed at bottom */}
        <div className="absolute left-4 right-4 bottom-4 bg-white rounded-lg p-3 border border-gray-200">
          <input
            type="text"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Share your feedback..."
            className="w-full text-sm px-3 py-2 rounded border border-gray-200 bg-gray-50 focus:outline-none focus:border-accent focus:bg-white"
          />
          <button
            onClick={handleSubmit}
            disabled={!feedback.trim()}
            className="w-full mt-2 text-xs px-3 py-2 bg-accent text-white rounded font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent/90 transition-colors"
          >
            Submit Feedback
          </button>
        </div>
      </div>

      {/* Feedback grid view */}
      <div
        className={`h-full flex flex-col transition-opacity duration-500 ${showResults ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <p className="text-sm font-semibold text-gray-700 mb-2 text-center">
          Class Feedback on This Drawing
        </p>
        <div className="grid grid-cols-4 grid-rows-3 gap-1.5 flex-1 mb-2">
          {/* Your feedback highlighted */}
          <div className="bg-accent/20 border-2 border-accent rounded p-1.5 flex flex-col justify-center">
            <p className="text-[10px] font-bold text-accent truncate">You</p>
            <p className="text-[9px] text-gray-600 truncate">{feedback}</p>
          </div>
          {/* Other students' feedback */}
          {sampleFeedback.map((item) => (
            <div
              key={item.id}
              className={`${item.color} rounded p-1.5 flex flex-col justify-center`}
            >
              <p className="text-[10px] font-medium text-gray-700 truncate">
                {item.name}
              </p>
              <p className="text-[9px] text-gray-500 truncate">
                {item.feedback}
              </p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 text-center italic">
          Let's see what your classmates said...
        </p>
      </div>
    </div>
  );
}
