"use client";

import { useState } from "react";

export function SelfAssessmentDemo() {
  const [response, setResponse] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (response.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-secondary to-secondary/50 p-3 overflow-hidden relative">
      {/* Background: Student Project (blurred/dimmed) */}
      <div className="absolute inset-3 bg-white rounded-lg shadow-sm border border-gray-200 opacity-40">
        <div className="p-3">
          <div className="text-[9px] font-bold text-gray-700 mb-1">
            Science Project
          </div>
          <div className="text-[8px] text-gray-500 mb-2">The Water Cycle</div>
          <div className="space-y-2">
            <div className="h-2 bg-gray-200 rounded w-full" />
            <div className="h-2 bg-gray-200 rounded w-4/5" />
            <div className="h-2 bg-gray-200 rounded w-full" />
            <div className="h-8 bg-gray-100 rounded mt-2" />
            <div className="h-2 bg-gray-200 rounded w-3/4" />
            <div className="h-2 bg-gray-200 rounded w-full" />
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      <div className="absolute inset-3 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-xl border border-gray-200 w-[95%] max-w-[280px] overflow-hidden">
          {/* Modal Header */}
          <div className="bg-accent/10 px-3 py-2 border-b border-accent/20">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="text-xs font-semibold text-accent">
                Self-Reflection
              </span>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-3">
            {!submitted ? (
              <>
                <p className="text-[9px] text-gray-700 font-medium mb-2">
                  Before submitting, reflect on your work:
                </p>
                <p className="text-[8px] text-gray-600 mb-3 leading-relaxed">
                  How do you feel about your assignment? Where would you like
                  feedback from your teacher?
                </p>
                <textarea
                  value={response}
                  onChange={(e) => setResponse(e.target.value)}
                  placeholder="I feel confident about my introduction, but I'd like feedback on my conclusion..."
                  className="w-full text-[8px] px-2 py-1.5 rounded border border-gray-200 bg-gray-50 focus:outline-none focus:border-accent focus:bg-white resize-none h-16"
                />
                <button
                  onClick={handleSubmit}
                  disabled={!response.trim()}
                  className="w-full mt-2 text-[8px] px-3 py-1.5 bg-accent text-white rounded font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent/90 transition-colors"
                >
                  Submit Reflection
                </button>
              </>
            ) : (
              <div className="text-center py-2">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-2">
                  <svg
                    className="w-5 h-5 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-[9px] font-medium text-gray-700 mb-1">
                  Reflection Submitted!
                </p>
                <p className="text-[8px] text-gray-500">
                  Your teacher will see your thoughts.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
