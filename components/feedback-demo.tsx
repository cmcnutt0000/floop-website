"use client";

import type React from "react";

import { useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface FeedbackItem {
  id: string;
  text: string;
  color: string;
  category: string;
}

interface PlacedFeedback {
  id: string;
  feedback: FeedbackItem;
  x: number;
  y: number;
  isSelected?: boolean;
}

interface VideoFeedback {
  id: string;
  feedback: FeedbackItem;
  timestamp: number;
  x: number;
  y: number;
}

const essayFeedbackBank: FeedbackItem[] = [
  {
    id: "e1",
    text: "Great thesis statement!",
    color: "bg-emerald-500",
    category: "Praise",
  },
  {
    id: "e2",
    text: "Add more evidence here",
    color: "bg-amber-500",
    category: "Suggestion",
  },
  {
    id: "e3",
    text: "Check your grammar",
    color: "bg-rose-500",
    category: "Correction",
  },
  {
    id: "e4",
    text: "Strong argument!",
    color: "bg-emerald-500",
    category: "Praise",
  },
  {
    id: "e5",
    text: "Expand this idea",
    color: "bg-amber-500",
    category: "Suggestion",
  },
];

const imageFeedbackBank: FeedbackItem[] = [
  {
    id: "i1",
    text: "Beautiful color choice!",
    color: "bg-emerald-500",
    category: "Praise",
  },
  {
    id: "i2",
    text: "Add more contrast here",
    color: "bg-amber-500",
    category: "Suggestion",
  },
  {
    id: "i3",
    text: "Watch your proportions",
    color: "bg-rose-500",
    category: "Correction",
  },
  {
    id: "i4",
    text: "Great use of negative space",
    color: "bg-emerald-500",
    category: "Praise",
  },
  {
    id: "i5",
    text: "Try blending these edges",
    color: "bg-amber-500",
    category: "Suggestion",
  },
];

const videoFeedbackBank: FeedbackItem[] = [
  {
    id: "v1",
    text: "Great delivery here!",
    color: "bg-emerald-500",
    category: "Praise",
  },
  {
    id: "v2",
    text: "Slow down this section",
    color: "bg-amber-500",
    category: "Suggestion",
  },
  {
    id: "v3",
    text: "Make eye contact",
    color: "bg-rose-500",
    category: "Correction",
  },
  {
    id: "v4",
    text: "Excellent pacing!",
    color: "bg-emerald-500",
    category: "Praise",
  },
  {
    id: "v5",
    text: "Add a visual aid here",
    color: "bg-amber-500",
    category: "Suggestion",
  },
];

const colorOptions = [
  {
    id: "green",
    color: "bg-emerald-500",
    label: "Praise",
    ring: "ring-emerald-500",
  },
  {
    id: "yellow",
    color: "bg-amber-500",
    label: "Suggestion",
    ring: "ring-amber-500",
  },
  {
    id: "red",
    color: "bg-rose-500",
    label: "Correction",
    ring: "ring-rose-500",
  },
];

export function FeedbackDemo() {
  const [activeTab, setActiveTab] = useState("essay");

  // Essay state
  const [essayFeedback, setEssayFeedback] = useState<PlacedFeedback[]>([]);
  const [selectedEssayId, setSelectedEssayId] = useState<string | null>(null);
  const essayRef = useRef<HTMLDivElement>(null);

  // Image state
  const [imageFeedback, setImageFeedback] = useState<PlacedFeedback[]>([]);
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // Video state
  const [videoFeedback, setVideoFeedback] = useState<VideoFeedback[]>([]);
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const videoRef = useRef<HTMLDivElement>(null);

  // Shared state
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [draggingPlacedId, setDraggingPlacedId] = useState<string | null>(null);
  const [customComment, setCustomComment] = useState("");
  const [selectedColor, setSelectedColor] = useState<string>("green");

  // Get current feedback based on active tab
  const getCurrentFeedback = () => {
    if (activeTab === "essay") return essayFeedback;
    if (activeTab === "image") return imageFeedback;
    return [];
  };

  // Get current feedback bank based on active tab
  const getCurrentFeedbackBank = () => {
    if (activeTab === "essay") return essayFeedbackBank;
    if (activeTab === "image") return imageFeedbackBank;
    return videoFeedbackBank;
  };

  const handleDragStart = (e: React.DragEvent, feedback: FeedbackItem) => {
    setDraggingId(feedback.id);
    e.dataTransfer.setData("feedback", JSON.stringify(feedback));
    e.dataTransfer.effectAllowed = "copy";
  };

  const handleDragEnd = () => {
    setDraggingId(null);
    setIsDraggingOver(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = draggingPlacedId ? "move" : "copy";
    setIsDraggingOver(true);
  };

  const handleDragLeave = () => {
    setIsDraggingOver(false);
  };

  // Essay drop handler
  const handleEssayDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDraggingOver(false);

    const placedId = e.dataTransfer.getData("placedId");
    if (placedId && essayRef.current) {
      const rect = essayRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      setEssayFeedback((prev) =>
        prev.map((p) =>
          p.id === placedId
            ? {
                ...p,
                x: Math.max(5, Math.min(75, x)),
                y: Math.max(5, Math.min(85, y)),
              }
            : p,
        ),
      );
      setDraggingPlacedId(null);
      return;
    }

    const feedbackData = e.dataTransfer.getData("feedback");
    if (!feedbackData || !essayRef.current) return;

    const feedback = JSON.parse(feedbackData) as FeedbackItem;
    const rect = essayRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const newPlaced: PlacedFeedback = {
      id: `placed-${Date.now()}`,
      feedback,
      x: Math.max(5, Math.min(75, x)),
      y: Math.max(5, Math.min(85, y)),
    };

    setEssayFeedback((prev) => [...prev, newPlaced]);
  };

  // Image drop handler
  const handleImageDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDraggingOver(false);

    const placedId = e.dataTransfer.getData("placedId");
    if (placedId && imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      setImageFeedback((prev) =>
        prev.map((p) =>
          p.id === placedId
            ? {
                ...p,
                x: Math.max(5, Math.min(75, x)),
                y: Math.max(5, Math.min(85, y)),
              }
            : p,
        ),
      );
      setDraggingPlacedId(null);
      return;
    }

    const feedbackData = e.dataTransfer.getData("feedback");
    if (!feedbackData || !imageRef.current) return;

    const feedback = JSON.parse(feedbackData) as FeedbackItem;
    const rect = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const newPlaced: PlacedFeedback = {
      id: `placed-${Date.now()}`,
      feedback,
      x: Math.max(5, Math.min(75, x)),
      y: Math.max(5, Math.min(85, y)),
    };

    setImageFeedback((prev) => [...prev, newPlaced]);
  };

  // Video drop handler
  const handleVideoDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDraggingOver(false);

    const placedId = e.dataTransfer.getData("placedId");
    if (placedId && videoRef.current) {
      const rect = videoRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      setVideoFeedback((prev) =>
        prev.map((p) =>
          p.id === placedId
            ? {
                ...p,
                x: Math.max(5, Math.min(75, x)),
                y: Math.max(5, Math.min(85, y)),
              }
            : p,
        ),
      );
      setDraggingPlacedId(null);
      return;
    }

    const feedbackData = e.dataTransfer.getData("feedback");
    if (!feedbackData || !videoRef.current) return;

    const feedback = JSON.parse(feedbackData) as FeedbackItem;
    const rect = videoRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const newVideo: VideoFeedback = {
      id: `video-${Date.now()}`,
      feedback,
      timestamp: currentTime,
      x: Math.max(5, Math.min(75, x)),
      y: Math.max(5, Math.min(85, y)),
    };

    setVideoFeedback((prev) => [...prev, newVideo]);
  };

  const removeEssayFeedback = (id: string) => {
    setEssayFeedback((prev) => prev.filter((p) => p.id !== id));
    setSelectedEssayId(null);
  };

  const removeImageFeedback = (id: string) => {
    setImageFeedback((prev) => prev.filter((p) => p.id !== id));
    setSelectedImageId(null);
  };

  const removeVideoFeedback = (id: string) => {
    setVideoFeedback((prev) => prev.filter((p) => p.id !== id));
    setSelectedVideoId(null);
  };

  const handlePlacedDragStart = (e: React.DragEvent, id: string) => {
    setDraggingPlacedId(id);
    e.dataTransfer.setData("placedId", id);
    e.dataTransfer.effectAllowed = "move";
  };

  const handlePlacedDragEnd = () => {
    setDraggingPlacedId(null);
    setIsDraggingOver(false);
  };

  const resetDemo = () => {
    if (activeTab === "essay") {
      setEssayFeedback([]);
      setSelectedEssayId(null);
    } else if (activeTab === "image") {
      setImageFeedback([]);
      setSelectedImageId(null);
    } else {
      setVideoFeedback([]);
      setSelectedVideoId(null);
    }
  };

  const getSelectedColorOption = () =>
    colorOptions.find((c) => c.id === selectedColor) || colorOptions[0];

  const handleCustomDragStart = (e: React.DragEvent) => {
    if (!customComment.trim()) {
      e.preventDefault();
      return;
    }
    const colorOption = getSelectedColorOption();
    const customFeedback: FeedbackItem = {
      id: `custom-${Date.now()}`,
      text: customComment,
      color: colorOption.color,
      category: colorOption.label,
    };
    setDraggingId("custom");
    e.dataTransfer.setData("feedback", JSON.stringify(customFeedback));
    e.dataTransfer.effectAllowed = "copy";
  };

  const getCurrentFeedbackCount = () => {
    if (activeTab === "essay") return essayFeedback.length;
    if (activeTab === "image") return imageFeedback.length;
    return videoFeedback.length;
  };

  // Get visible video feedback (at current timestamp)
  const getVisibleVideoFeedback = () => {
    return videoFeedback.filter((f) => f.timestamp === currentTime);
  };

  // Render placed feedback bubble
  const renderFeedbackBubble = (
    placed: PlacedFeedback | VideoFeedback,
    selectedId: string | null,
    setSelectedId: (id: string | null) => void,
    removeFn: (id: string) => void,
  ) => (
    <div
      key={placed.id}
      draggable
      onDragStart={(e) => handlePlacedDragStart(e, placed.id)}
      onDragEnd={handlePlacedDragEnd}
      className={`absolute group animate-in fade-in zoom-in duration-200 ${
        draggingPlacedId === placed.id ? "opacity-50 scale-95" : ""
      }`}
      style={{ left: `${placed.x}%`, top: `${placed.y}%` }}
    >
      <div
        className={`${placed.feedback.color} text-white text-xs px-3 py-2 rounded-lg shadow-lg max-w-[180px] cursor-grab active:cursor-grabbing hover:scale-105 transition-transform ${
          selectedId === placed.id
            ? "ring-2 ring-white ring-offset-2 ring-offset-transparent"
            : ""
        }`}
        onClick={(e) => {
          e.stopPropagation();
          setSelectedId(selectedId === placed.id ? null : placed.id);
        }}
      >
        {placed.feedback.text}
        {selectedId === placed.id && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              removeFn(placed.id);
            }}
            className="absolute -top-2 -right-2 w-5 h-5 bg-white text-gray-700 rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors"
          >
            <svg
              className="w-3 h-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
      <div
        className={`absolute -bottom-1 left-4 w-3 h-3 ${placed.feedback.color} rotate-45 -z-10`}
      />
    </div>
  );

  return (
    <div className="w-full">
      {/* Try it yourself - above tabs */}
      <div className="mb-4 p-4 bg-purple-100 border border-accent/20 rounded-xl">
        <p className="text-sm text-foreground">
          <span className="font-semibold">Try it yourself:</span>{" "}
          <span className="text-muted-foreground">
            Drag comments onto student work and see how Floop makes feedback 4x
            faster.
          </span>
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr_320px] gap-6">
        {/* Main Content Area with Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="essay" className="px-6">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Essay
            </TabsTrigger>
            <TabsTrigger value="image" className="px-6">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Image
            </TabsTrigger>
            <TabsTrigger value="video" className="px-6">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              Video
            </TabsTrigger>
          </TabsList>

          {/* Essay Tab */}
          <TabsContent value="essay">
            <Card
              ref={essayRef}
              className={`relative bg-white p-8 lg:p-10 min-h-[500px] lg:min-h-[600px] transition-all duration-300 ${
                isDraggingOver
                  ? "ring-4 ring-accent ring-offset-2 scale-[1.01]"
                  : "ring-1 ring-border"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleEssayDrop}
              onClick={() => setSelectedEssayId(null)}
            >
              <div className="select-none pointer-events-none">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  The Power of Meaningful Feedback in Education
                </h3>
                <p className="text-sm text-gray-400 mb-6">
                  By: Jamie Rodriguez | Period 3
                </p>

                <div className="space-y-4 text-gray-700 text-[15px] leading-relaxed">
                  <p>
                    Feedback is the cornerstone of effective learning. When
                    teachers provide thoughtful, specific feedback, students
                    gain a clearer understanding of their strengths and areas
                    for growth. Research shows that quality feedback can improve
                    student achievement by up to 30%.
                  </p>
                  <p>
                    The most impactful feedback is timely and actionable.
                    Students benefit most when they receive comments while the
                    material is still fresh in their minds. This allows them to
                    immediately apply suggestions and see the connection between
                    effort and improvement.
                  </p>
                  <p>
                    Great feedback goes beyond simple corrections. It celebrates
                    what students do well, asks probing questions that encourage
                    deeper thinking, and provides clear next steps for
                    improvement. This balanced approach builds confidence while
                    challenging students to reach higher.
                  </p>
                  <p>
                    In conclusion, investing time in meaningful feedback
                    transforms the learning experience and helps every student
                    realize their full potential.
                  </p>
                </div>
              </div>

              {essayFeedback.map((placed) =>
                renderFeedbackBubble(
                  placed,
                  selectedEssayId,
                  setSelectedEssayId,
                  removeEssayFeedback,
                ),
              )}

              {isDraggingOver && (
                <div className="absolute inset-0 flex items-center justify-center bg-accent/5 rounded-lg pointer-events-none">
                  <div className="bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold text-lg shadow-lg">
                    Drop feedback here
                  </div>
                </div>
              )}

              {essayFeedback.length === 0 && !isDraggingOver && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
                  <p className="text-muted-foreground text-sm bg-secondary/80 px-4 py-2 rounded-full">
                    Drag feedback from the right panel onto the document
                  </p>
                </div>
              )}
            </Card>
          </TabsContent>

          {/* Image Tab */}
          <TabsContent value="image">
            <Card
              ref={imageRef}
              className={`relative bg-white min-h-[500px] lg:min-h-[600px] transition-all duration-300 overflow-hidden ${
                isDraggingOver
                  ? "ring-4 ring-accent ring-offset-2 scale-[1.01]"
                  : "ring-1 ring-border"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleImageDrop}
              onClick={() => setSelectedImageId(null)}
            >
              {/* Simulated student artwork */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center select-none pointer-events-none">
                    <div className="w-64 h-64 mx-auto mb-4 relative">
                      {/* Abstract art simulation */}
                      <div
                        className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-300 to-orange-400 opacity-80"
                        style={{
                          transform: "translate(-20%, -10%) scale(0.6)",
                        }}
                      />
                      <div
                        className="absolute inset-0 rounded-full bg-gradient-to-bl from-blue-400 to-cyan-300 opacity-70"
                        style={{ transform: "translate(20%, 10%) scale(0.5)" }}
                      />
                      <div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 to-rose-300 opacity-60"
                        style={{ transform: "translate(0%, 30%) scale(0.4)" }}
                      />
                      <div
                        className="absolute inset-0 rounded-full bg-gradient-to-t from-green-300 to-emerald-400 opacity-50"
                        style={{
                          transform: "translate(-30%, 20%) scale(0.35)",
                        }}
                      />
                    </div>
                    <p className="text-gray-600 font-medium text-lg">
                      Student Artwork
                    </p>
                    <p className="text-gray-400 text-sm">
                      By: Alex Chen | Art 101
                    </p>
                  </div>
                </div>
              </div>

              {imageFeedback.map((placed) =>
                renderFeedbackBubble(
                  placed,
                  selectedImageId,
                  setSelectedImageId,
                  removeImageFeedback,
                ),
              )}

              {isDraggingOver && (
                <div className="absolute inset-0 flex items-center justify-center bg-accent/5 rounded-lg pointer-events-none">
                  <div className="bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold text-lg shadow-lg">
                    Drop feedback here
                  </div>
                </div>
              )}

              {imageFeedback.length === 0 && !isDraggingOver && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
                  <p className="text-muted-foreground text-sm bg-white/80 px-4 py-2 rounded-full">
                    Drag feedback from the right panel onto the image
                  </p>
                </div>
              )}
            </Card>
          </TabsContent>

          {/* Video Tab */}
          <TabsContent value="video">
            <div className="space-y-4">
              <Card
                ref={videoRef}
                className={`relative bg-slate-900 min-h-[400px] lg:min-h-[480px] transition-all duration-300 overflow-hidden ${
                  isDraggingOver
                    ? "ring-4 ring-accent ring-offset-2 scale-[1.01]"
                    : "ring-1 ring-border"
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleVideoDrop}
                onClick={() => setSelectedVideoId(null)}
              >
                {/* Video frame simulation */}
                <div className="absolute inset-0">
                  {/* Dynamic background based on frame */}
                  <div
                    className="absolute inset-0 transition-all duration-300"
                    style={{
                      background: `linear-gradient(${135 + currentTime * 5}deg,
                        hsl(${(currentTime * 15) % 360}, 70%, 25%),
                        hsl(${(currentTime * 15 + 60) % 360}, 60%, 20%))`,
                    }}
                  />

                  {/* Frame content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center select-none pointer-events-none">
                      <div className="text-8xl font-bold text-white/20 mb-2">
                        {String(currentTime + 1).padStart(2, "0")}
                      </div>
                      <p className="text-white/60 text-sm">
                        Student Presentation
                      </p>
                    </div>
                  </div>

                  {/* Timestamp indicator */}
                  <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-mono">
                    0:{String(currentTime).padStart(2, "0")}
                  </div>
                </div>

                {/* Render feedback for current timestamp */}
                {getVisibleVideoFeedback().map((placed) =>
                  renderFeedbackBubble(
                    placed,
                    selectedVideoId,
                    setSelectedVideoId,
                    removeVideoFeedback,
                  ),
                )}

                {isDraggingOver && (
                  <div className="absolute inset-0 flex items-center justify-center bg-accent/10 rounded-lg pointer-events-none">
                    <div className="bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold text-lg shadow-lg">
                      Drop feedback at {currentTime}s
                    </div>
                  </div>
                )}

                {videoFeedback.length === 0 && !isDraggingOver && (
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
                    <p className="text-white/60 text-sm bg-black/30 px-4 py-2 rounded-full">
                      Drag feedback onto the video at any timestamp
                    </p>
                  </div>
                )}
              </Card>

              {/* Timeline Slider */}
              <Card className="p-4 bg-card">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>0:00</span>
                    <span className="font-medium text-foreground">
                      Timeline
                    </span>
                    <span>0:24</span>
                  </div>

                  {/* Timeline with markers */}
                  <div className="relative">
                    <input
                      type="range"
                      min="0"
                      max="24"
                      value={currentTime}
                      onChange={(e) => setCurrentTime(Number(e.target.value))}
                      className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-accent"
                    />

                    {/* Feedback markers on timeline */}
                    <div className="absolute top-0 left-0 right-0 h-2 pointer-events-none">
                      {videoFeedback.map((f) => (
                        <div
                          key={f.id}
                          className="absolute w-2 h-2 -mt-0 rounded-full bg-accent border-2 border-white shadow-sm cursor-pointer pointer-events-auto transform -translate-x-1/2"
                          style={{ left: `${(f.timestamp / 24) * 100}%` }}
                          onClick={() => setCurrentTime(f.timestamp)}
                          title={`${f.feedback.text} at 0:${String(f.timestamp).padStart(2, "0")}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Tick marks */}
                  <div className="flex justify-between px-1">
                    {[0, 5, 10, 15, 20, 24].map((tick) => (
                      <div key={tick} className="flex flex-col items-center">
                        <div className="w-px h-2 bg-border" />
                        <span className="text-[10px] text-muted-foreground mt-1">
                          {tick}s
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Feedback count at current timestamp */}
                  <div className="text-center text-xs text-muted-foreground">
                    {getVisibleVideoFeedback().length} comment
                    {getVisibleVideoFeedback().length !== 1 ? "s" : ""} at this
                    timestamp
                    {videoFeedback.length > 0 &&
                      ` • ${videoFeedback.length} total`}
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Feedback Bank Sidebar */}
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-foreground">Comment Bank</h4>
              {getCurrentFeedbackCount() > 0 && (
                <button
                  onClick={resetDemo}
                  className="text-xs text-muted-foreground hover:text-accent transition-colors"
                >
                  Reset demo
                </button>
              )}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Save feedback you use often for quick reuse across students
            </p>
          </div>

          <div className="space-y-2">
            {getCurrentFeedbackBank().map((feedback) => (
              <div
                key={feedback.id}
                draggable
                onDragStart={(e) => handleDragStart(e, feedback)}
                onDragEnd={handleDragEnd}
                className={`flex items-center gap-3 p-3 rounded-xl border-2 border-border bg-card cursor-grab active:cursor-grabbing transition-all hover:border-accent hover:shadow-md ${
                  draggingId === feedback.id ? "opacity-50 scale-95" : ""
                }`}
              >
                <div
                  className={`w-3 h-3 rounded-full ${feedback.color} flex-shrink-0`}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">
                    {feedback.text}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {feedback.category}
                  </p>
                </div>
                <svg
                  className="w-5 h-5 text-muted-foreground flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-border">
            <h4 className="font-bold text-foreground mb-3">Write Your Own</h4>

            {/* Color selector */}
            <div className="flex gap-2 mb-3">
              {colorOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSelectedColor(option.id)}
                  className={`flex-1 flex flex-col items-center gap-1.5 p-2 rounded-lg border-2 transition-all ${
                    selectedColor === option.id
                      ? `border-transparent ring-2 ${option.ring} bg-white`
                      : "border-border hover:border-muted-foreground/30 bg-gray-100"
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full ${option.color}`} />
                  <span className="text-[10px] font-medium text-muted-foreground">
                    {option.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Comment input */}
            <Input
              type="text"
              placeholder="Type your feedback..."
              value={customComment}
              onChange={(e) => setCustomComment(e.target.value)}
              className="mb-3 text-sm bg-white"
            />

            {/* Draggable custom comment preview */}
            {customComment.trim() && (
              <div
                draggable
                onDragStart={handleCustomDragStart}
                onDragEnd={handleDragEnd}
                className={`flex items-center gap-3 p-3 rounded-xl border-2 border-dashed border-accent bg-accent/5 cursor-grab active:cursor-grabbing transition-all hover:bg-accent/10 ${
                  draggingId === "custom" ? "opacity-50 scale-95" : ""
                }`}
              >
                <div
                  className={`w-3 h-3 rounded-full ${getSelectedColorOption().color} flex-shrink-0`}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">
                    {customComment}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {getSelectedColorOption().label}
                  </p>
                </div>
              </div>
            )}

            {!customComment.trim() && (
              <p className="text-xs text-muted-foreground text-center py-2">
                Type a comment above to create (and place) feedback
              </p>
            )}
          </div>

          <div className="text-center pt-4">
            <p className="text-xs text-muted-foreground mb-2">
              {getCurrentFeedbackCount()} comment
              {getCurrentFeedbackCount() !== 1 ? "s" : ""} placed
            </p>
            <div className="flex gap-1 justify-center mb-3">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i < getCurrentFeedbackCount() ? "bg-accent" : "bg-border"
                  }`}
                />
              ))}
            </div>
            <p className="text-[10px] text-muted-foreground/70 leading-relaxed">
              This is just a demonstration. To see all that Floop can do, create
              a free account today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
