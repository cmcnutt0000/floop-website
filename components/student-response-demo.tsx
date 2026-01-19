"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/language-context";

export function StudentResponseDemo() {
  const { t } = useLanguage();
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (comment.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-accent/10 to-accent/5 p-4 overflow-hidden">
      {/* Mini Math Homework */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-3">
        <div className="text-sm font-bold text-gray-700 mb-1">
          {t.studentResponseDemo.mathHomework}
        </div>
        <div className="text-xs text-gray-500 mb-2">
          {t.studentResponseDemo.problem3}
        </div>
        <div className="font-mono text-sm text-gray-800 bg-gray-50 rounded px-3 py-2">
          {t.studentResponseDemo.equation}
          <span className="text-rose-500 ml-2">✗</span>
        </div>
      </div>

      {/* Teacher Feedback Thread */}
      <div className="space-y-3">
        <div className="text-xs font-semibold text-gray-600">
          {t.studentResponseDemo.teacherFeedback}
        </div>

        {/* Feedback 1 */}
        <div className="bg-amber-50 border-l-2 border-amber-500 rounded-r-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center">
              <span className="text-[9px] text-white font-bold">T</span>
            </div>
            <span className="text-xs font-medium text-gray-700">
              {t.studentResponseDemo.teacherName}
            </span>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed">
            {t.studentResponseDemo.feedbackExplanation}
          </p>

          {/* Student reply area */}
          <div className="mt-2 pt-2 border-t border-amber-200">
            {!submitted ? (
              <div className="flex gap-2">
                <input
                  type="text"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder={t.studentResponseDemo.askOrReply}
                  className="flex-1 text-xs px-3 py-1.5 rounded border border-gray-200 bg-white focus:outline-none focus:border-accent"
                />
                <button
                  onClick={handleSubmit}
                  disabled={!comment.trim()}
                  className="text-xs px-3 py-1.5 bg-accent text-white rounded font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent/90 transition-colors"
                >
                  {t.studentResponseDemo.reply}
                </button>
              </div>
            ) : (
              <div className="bg-blue-50 rounded p-2 border-l-2 border-blue-400">
                <div className="flex items-center gap-1 mb-1">
                  <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                    <span className="text-[8px] text-white font-bold">S</span>
                  </div>
                  <span className="text-xs font-medium text-gray-700">
                    {t.studentResponseDemo.you}
                  </span>
                </div>
                <p className="text-xs text-gray-600">{comment}</p>
              </div>
            )}
          </div>
        </div>

        {/* Feedback 2 - no reply needed */}
        <div className="bg-emerald-50 border-l-2 border-emerald-500 rounded-r-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
              <span className="text-[9px] text-white font-bold">T</span>
            </div>
            <span className="text-xs font-medium text-gray-700">
              {t.studentResponseDemo.teacherName}
            </span>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed">
            {t.studentResponseDemo.greatJobShowing}
          </p>
        </div>
      </div>
    </div>
  );
}
