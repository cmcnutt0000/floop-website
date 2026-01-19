"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";

interface VideoModalProps {
  buttonClassName?: string;
}

export function VideoModalButton({ buttonClassName }: VideoModalProps) {
  const { t } = useLanguage();
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
        {t.hero.watchDemo}
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

            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/I27YrRaxxOg?autoplay=1"
              title="Floop Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
