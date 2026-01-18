"use client";

import { useState } from "react";

export function StudentResponseDemo() {
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (comment.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-accent/10 to-accent/5 p-3 overflow-hidden">
      {/* Mini Math Homework */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3 mb-2">
        <div className="text-[9px] font-bold text-gray-700 mb-1">Math Homework - Quadratics</div>
        <div className="text-[8px] text-gray-500 mb-2">Problem 3: Factor the expression</div>
        <div className="font-mono text-[10px] text-gray-800 bg-gray-50 rounded px-2 py-1">
          x² + 5x + 6 = (x + 2)(x + 4)
          <span className="text-rose-500 ml-1">✗</span>
        </div>
      </div>

      {/* Teacher Feedback Thread */}
      <div className="space-y-2">
        <div className="text-[8px] font-semibold text-gray-600">Teacher Feedback</div>

        {/* Feedback 1 */}
        <div className="bg-amber-50 border-l-2 border-amber-500 rounded-r-lg p-2">
          <div className="flex items-center gap-1 mb-1">
            <div className="w-4 h-4 rounded-full bg-amber-500 flex items-center justify-center">
              <span className="text-[7px] text-white font-bold">T</span>
            </div>
            <span className="text-[8px] font-medium text-gray-700">Ms. Johnson</span>
          </div>
          <p className="text-[8px] text-gray-600 leading-relaxed">
            When factoring x² + 5x + 6, find two numbers that multiply to 6 AND add to 5. Check: does 2 × 4 = 6? What about 2 + 4?
          </p>

          {/* Student reply area */}
          <div className="mt-2 pt-2 border-t border-amber-200">
            {!submitted ? (
              <div className="flex gap-1">
                <input
                  type="text"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Ask a question or reply..."
                  className="flex-1 text-[8px] px-2 py-1 rounded border border-gray-200 bg-white focus:outline-none focus:border-accent"
                />
                <button
                  onClick={handleSubmit}
                  disabled={!comment.trim()}
                  className="text-[7px] px-2 py-1 bg-accent text-white rounded font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent/90 transition-colors"
                >
                  Reply
                </button>
              </div>
            ) : (
              <div className="bg-blue-50 rounded p-1.5 border-l-2 border-blue-400">
                <div className="flex items-center gap-1 mb-0.5">
                  <div className="w-3 h-3 rounded-full bg-blue-500 flex items-center justify-center">
                    <span className="text-[6px] text-white font-bold">S</span>
                  </div>
                  <span className="text-[7px] font-medium text-gray-700">You</span>
                </div>
                <p className="text-[7px] text-gray-600">{comment}</p>
              </div>
            )}
          </div>
        </div>

        {/* Feedback 2 - no reply needed */}
        <div className="bg-emerald-50 border-l-2 border-emerald-500 rounded-r-lg p-2">
          <div className="flex items-center gap-1 mb-1">
            <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center">
              <span className="text-[7px] text-white font-bold">T</span>
            </div>
            <span className="text-[8px] font-medium text-gray-700">Ms. Johnson</span>
          </div>
          <p className="text-[8px] text-gray-600 leading-relaxed">
            Great job showing your work on problems 1 and 2!
          </p>
        </div>
      </div>
    </div>
  );
}
