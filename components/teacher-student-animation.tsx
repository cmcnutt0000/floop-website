"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function TeacherStudentAnimation() {
  const [cycle, setCycle] = useState(0);

  // Restart animation every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCycle((c) => c + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-accent/10 to-accent/5">
      <div className="relative w-full max-w-[280px] h-[180px]">
        {/* Math Assignment Paper */}
        <motion.div
          className="absolute right-4 top-6 w-[140px] h-[150px] bg-white rounded-lg shadow-lg border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Paper lines */}
          <div className="p-3 space-y-2">
            <div className="text-[8px] font-bold text-gray-700">Math Quiz</div>
            <div className="text-[7px] text-gray-400">Student: Alex M.</div>
            <div className="mt-3 space-y-3">
              {/* Math problem 1 */}
              <div className="space-y-1">
                <div className="text-[7px] text-gray-600">1. Solve for x:</div>
                <div className="text-[9px] font-mono text-gray-800 pl-2">2x + 5 = 13</div>
                <div className="text-[9px] font-mono text-blue-600 pl-2">x = 4 ✓</div>
              </div>
              {/* Math problem 2 */}
              <div className="space-y-1">
                <div className="text-[7px] text-gray-600">2. Simplify:</div>
                <div className="text-[9px] font-mono text-gray-800 pl-2">3(x + 2) - x</div>
                <div className="text-[9px] font-mono text-red-500 pl-2">2x + 6</div>
              </div>
            </div>
          </div>

          {/* Feedback bubble that appears */}
          <motion.div
            key={`feedback-${cycle}`}
            className="absolute -left-2 top-[85px]"
            initial={{ opacity: 0, scale: 0, x: -60, y: -20 }}
            animate={{
              opacity: [0, 0, 1, 1, 1],
              scale: [0.5, 0.5, 1, 1, 1],
              x: [-60, -60, 0, 0, 0],
              y: [-20, -20, 0, 0, 0],
            }}
            transition={{
              duration: 3,
              times: [0, 0.3, 0.6, 0.8, 1],
              ease: "easeOut",
            }}
          >
            <div className="bg-amber-500 text-white text-[7px] px-2 py-1 rounded shadow-md max-w-[80px] leading-tight">
              Check your distribution
              <div className="absolute -bottom-1 left-3 w-2 h-2 bg-amber-500 rotate-45" />
            </div>
          </motion.div>
        </motion.div>

        {/* Comment Bank */}
        <motion.div
          className="absolute left-2 top-8 w-[90px] bg-white rounded-lg shadow-md border border-gray-200 p-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-[7px] font-semibold text-gray-600 mb-2">Comments</div>
          <div className="space-y-1.5">
            {/* Comment item 1 - this one gets dragged */}
            <motion.div
              key={`comment-${cycle}`}
              className="flex items-center gap-1 p-1 rounded bg-gray-50 border border-gray-100"
              animate={{
                opacity: [1, 1, 0.3, 0.3, 1],
                scale: [1, 1, 0.95, 0.95, 1],
              }}
              transition={{
                duration: 3,
                times: [0, 0.3, 0.5, 0.9, 1],
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span className="text-[6px] text-gray-600 truncate">Check distribution</span>
            </motion.div>
            {/* Comment item 2 */}
            <div className="flex items-center gap-1 p-1 rounded bg-gray-50 border border-gray-100">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="text-[6px] text-gray-600 truncate">Great work!</span>
            </div>
            {/* Comment item 3 */}
            <div className="flex items-center gap-1 p-1 rounded bg-gray-50 border border-gray-100">
              <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              <span className="text-[6px] text-gray-600 truncate">Show your work</span>
            </div>
          </div>
        </motion.div>

        {/* Animated cursor */}
        <motion.div
          key={`cursor-${cycle}`}
          className="absolute z-10"
          initial={{ x: 45, y: 65, opacity: 0 }}
          animate={{
            x: [45, 45, 45, 130, 130, 130],
            y: [65, 65, 65, 95, 95, 95],
            opacity: [0, 1, 1, 1, 1, 0],
          }}
          transition={{
            duration: 3,
            times: [0, 0.1, 0.35, 0.6, 0.85, 1],
            ease: "easeInOut",
          }}
        >
          {/* Cursor icon */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            className="drop-shadow-md"
          >
            <path
              d="M4 4L10.5 20.5L13 13L20.5 10.5L4 4Z"
              fill="white"
              stroke="#374151"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>

        {/* Dragging feedback ghost */}
        <motion.div
          key={`ghost-${cycle}`}
          className="absolute z-5"
          initial={{ x: 30, y: 55, opacity: 0, scale: 0.8 }}
          animate={{
            x: [30, 30, 30, 115, 115],
            y: [55, 55, 55, 85, 85],
            opacity: [0, 0, 0.7, 0.7, 0],
            scale: [0.8, 0.8, 1, 1, 1],
          }}
          transition={{
            duration: 3,
            times: [0, 0.35, 0.4, 0.55, 0.6],
            ease: "easeInOut",
          }}
        >
          <div className="bg-amber-500/80 text-white text-[6px] px-1.5 py-0.5 rounded shadow-lg whitespace-nowrap">
            Check distribution
          </div>
        </motion.div>
      </div>
    </div>
  );
}
