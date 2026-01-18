"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface VideoModalProps {
  buttonClassName?: string;
}

export function VideoModalButton({ buttonClassName }: VideoModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        size="lg"
        className={
          buttonClassName ||
          "text-lg px-10 py-7 font-semibold border-2 border-border bg-white text-foreground hover:bg-accent/10 hover:border-accent/50"
        }
        onClick={() => setIsOpen(true)}
      >
        Watch Demo Video
      </Button>

      {/* Video Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl mx-4 aspect-video bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Placeholder for YouTube video */}
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-white text-xl font-semibold mb-2">
                  Demo Video
                </p>
                <p className="text-white/60 text-sm">
                  YouTube video placeholder
                </p>
                {/*
                  Replace the placeholder above with:
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
                    title="Floop Demo Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
