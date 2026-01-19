"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/language-context";

export function SelfAssessmentDemo() {
  const { t } = useLanguage();
  const [response, setResponse] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (response.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-secondary to-secondary/50 p-4 overflow-hidden relative">
      {/* Background: Student Project (blurred/dimmed) */}
      <div className="absolute inset-4 bg-white rounded-lg shadow-sm border border-gray-200 opacity-40">
        <div className="p-4">
          <div className="text-sm font-bold text-gray-700 mb-1">
            {t.selfAssessmentDemo.scienceProject}
          </div>
          <div className="text-xs text-gray-500 mb-3">
            {t.selfAssessmentDemo.waterCycle}
          </div>
          <div className="space-y-2">
            <div className="h-2.5 bg-gray-200 rounded w-full" />
            <div className="h-2.5 bg-gray-200 rounded w-4/5" />
            <div className="h-2.5 bg-gray-200 rounded w-full" />
            <div className="h-10 bg-gray-100 rounded mt-3" />
            <div className="h-2.5 bg-gray-200 rounded w-3/4" />
            <div className="h-2.5 bg-gray-200 rounded w-full" />
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      <div className="absolute inset-4 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-xl border border-gray-200 w-[95%] max-w-[320px] overflow-hidden">
          {/* Modal Header */}
          <div className="bg-accent/10 px-4 py-3 border-b border-accent/20">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
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
              <span className="text-sm font-semibold text-accent">
                {t.selfAssessmentDemo.selfReflection}
              </span>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-4">
            {!submitted ? (
              <>
                <p className="text-sm text-gray-700 font-medium mb-2">
                  {t.selfAssessmentDemo.beforeSubmitting}
                </p>
                <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                  {t.selfAssessmentDemo.howDoYouFeel}
                </p>
                <textarea
                  value={response}
                  onChange={(e) => setResponse(e.target.value)}
                  placeholder={t.selfAssessmentDemo.placeholder}
                  className="w-full text-xs px-3 py-2 rounded border border-gray-200 bg-gray-50 focus:outline-none focus:border-accent focus:bg-white resize-none h-20"
                />
                <button
                  onClick={handleSubmit}
                  disabled={!response.trim()}
                  className="w-full mt-3 text-xs px-4 py-2 bg-accent text-white rounded font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent/90 transition-colors"
                >
                  {t.selfAssessmentDemo.submitReflection}
                </button>
              </>
            ) : (
              <div className="text-center py-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-emerald-500"
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
                <p className="text-sm font-medium text-gray-700 mb-1">
                  {t.selfAssessmentDemo.reflectionSubmitted}
                </p>
                <p className="text-xs text-gray-500">
                  {t.selfAssessmentDemo.teacherWillSee}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
