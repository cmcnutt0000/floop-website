"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

interface FeedbackItem {
  id: string
  text: string
  color: string
  category: string
}

interface PlacedFeedback {
  id: string
  feedback: FeedbackItem
  x: number
  y: number
}

const feedbackBank: FeedbackItem[] = [
  { id: "1", text: "Great thesis statement!", color: "bg-emerald-500", category: "Praise" },
  { id: "2", text: "Add more evidence here", color: "bg-amber-500", category: "Suggestion" },
  { id: "3", text: "Check your grammar", color: "bg-rose-500", category: "Correction" },
  { id: "4", text: "Strong argument!", color: "bg-emerald-500", category: "Praise" },
  { id: "5", text: "Expand this idea", color: "bg-amber-500", category: "Suggestion" },
]

const colorOptions = [
  { id: "green", color: "bg-emerald-500", label: "Praise", ring: "ring-emerald-500" },
  { id: "yellow", color: "bg-amber-500", label: "Suggestion", ring: "ring-amber-500" },
  { id: "red", color: "bg-rose-500", label: "Correction", ring: "ring-rose-500" },
]

export function FeedbackDemo() {
  const [placedFeedback, setPlacedFeedback] = useState<PlacedFeedback[]>([])
  const [draggingId, setDraggingId] = useState<string | null>(null)
  const [isDraggingOver, setIsDraggingOver] = useState(false)
  const documentRef = useRef<HTMLDivElement>(null)

  const [customComment, setCustomComment] = useState("")
  const [selectedColor, setSelectedColor] = useState<string>("green")

  const handleDragStart = (e: React.DragEvent, feedback: FeedbackItem) => {
    setDraggingId(feedback.id)
    e.dataTransfer.setData("feedback", JSON.stringify(feedback))
    e.dataTransfer.effectAllowed = "copy"
  }

  const handleDragEnd = () => {
    setDraggingId(null)
    setIsDraggingOver(false)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = "copy"
    setIsDraggingOver(true)
  }

  const handleDragLeave = () => {
    setIsDraggingOver(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDraggingOver(false)

    const feedbackData = e.dataTransfer.getData("feedback")
    if (!feedbackData || !documentRef.current) return

    const feedback = JSON.parse(feedbackData) as FeedbackItem
    const rect = documentRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    const newPlaced: PlacedFeedback = {
      id: `placed-${Date.now()}`,
      feedback,
      x: Math.max(5, Math.min(75, x)),
      y: Math.max(5, Math.min(85, y)),
    }

    setPlacedFeedback((prev) => [...prev, newPlaced])
  }

  const removeFeedback = (id: string) => {
    setPlacedFeedback((prev) => prev.filter((p) => p.id !== id))
  }

  const resetDemo = () => {
    setPlacedFeedback([])
  }

  const getSelectedColorOption = () => colorOptions.find((c) => c.id === selectedColor) || colorOptions[0]

  const handleCustomDragStart = (e: React.DragEvent) => {
    if (!customComment.trim()) {
      e.preventDefault()
      return
    }
    const colorOption = getSelectedColorOption()
    const customFeedback: FeedbackItem = {
      id: `custom-${Date.now()}`,
      text: customComment,
      color: colorOption.color,
      category: colorOption.label,
    }
    setDraggingId("custom")
    e.dataTransfer.setData("feedback", JSON.stringify(customFeedback))
    e.dataTransfer.effectAllowed = "copy"
  }

  return (
    <div className="w-full">
      <div className="grid lg:grid-cols-[1fr_320px] gap-6">
        {/* Student Work Document */}
        <Card
          ref={documentRef}
          className={`relative bg-white p-8 lg:p-10 min-h-[500px] lg:min-h-[600px] transition-all duration-300 ${
            isDraggingOver ? "ring-4 ring-accent ring-offset-2 scale-[1.01]" : "ring-1 ring-border"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="select-none pointer-events-none">
            <h3 className="text-xl font-bold text-gray-800 mb-4">The Power of Meaningful Feedback in Education</h3>
            <p className="text-sm text-gray-400 mb-6">By: Jamie Rodriguez | Period 3</p>

            <div className="space-y-4 text-gray-700 text-[15px] leading-relaxed">
              <p>
                Feedback is the cornerstone of effective learning. When teachers provide thoughtful, specific feedback,
                students gain a clearer understanding of their strengths and areas for growth. Research shows that
                quality feedback can improve student achievement by up to 30%.
              </p>
              <p>
                The most impactful feedback is timely and actionable. Students benefit most when they receive comments
                while the material is still fresh in their minds. This allows them to immediately apply suggestions and
                see the connection between effort and improvement.
              </p>
              <p>
                Great feedback goes beyond simple corrections. It celebrates what students do well, asks probing
                questions that encourage deeper thinking, and provides clear next steps for improvement. This balanced
                approach builds confidence while challenging students to reach higher.
              </p>
              <p>
                In conclusion, investing time in meaningful feedback transforms the learning experience and helps every
                student realize their full potential.
              </p>
            </div>
          </div>

          {/* Placed Feedback Comments */}
          {placedFeedback.map((placed) => (
            <div
              key={placed.id}
              className="absolute group animate-in fade-in zoom-in duration-200"
              style={{ left: `${placed.x}%`, top: `${placed.y}%` }}
            >
              <div
                className={`${placed.feedback.color} text-white text-xs px-3 py-2 rounded-lg shadow-lg max-w-[180px] cursor-pointer hover:scale-105 transition-transform`}
                onClick={() => removeFeedback(placed.id)}
              >
                {placed.feedback.text}
                <span className="block text-[10px] opacity-70 mt-1">Click to remove</span>
              </div>
              <div className={`absolute -bottom-1 left-4 w-3 h-3 ${placed.feedback.color} rotate-45 -z-10`} />
            </div>
          ))}

          {/* Drop Zone Hint */}
          {isDraggingOver && (
            <div className="absolute inset-0 flex items-center justify-center bg-accent/5 rounded-lg pointer-events-none">
              <div className="bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold text-lg shadow-lg">
                Drop feedback here
              </div>
            </div>
          )}

          {/* Empty State Hint */}
          {placedFeedback.length === 0 && !isDraggingOver && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
              <p className="text-muted-foreground text-sm bg-secondary/80 px-4 py-2 rounded-full">
                Drag feedback from the right panel onto the document
              </p>
            </div>
          )}
        </Card>

        {/* Feedback Bank Sidebar */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-foreground">Comment Bank</h4>
            {placedFeedback.length > 0 && (
              <button onClick={resetDemo} className="text-xs text-muted-foreground hover:text-accent transition-colors">
                Reset demo
              </button>
            )}
          </div>

          <div className="space-y-2">
            {feedbackBank.map((feedback) => (
              <div
                key={feedback.id}
                draggable
                onDragStart={(e) => handleDragStart(e, feedback)}
                onDragEnd={handleDragEnd}
                className={`flex items-center gap-3 p-3 rounded-xl border-2 border-border bg-card cursor-grab active:cursor-grabbing transition-all hover:border-accent hover:shadow-md ${
                  draggingId === feedback.id ? "opacity-50 scale-95" : ""
                }`}
              >
                <div className={`w-3 h-3 rounded-full ${feedback.color} flex-shrink-0`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{feedback.text}</p>
                  <p className="text-xs text-muted-foreground">{feedback.category}</p>
                </div>
                <svg
                  className="w-5 h-5 text-muted-foreground flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
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
                      ? `border-transparent ring-2 ${option.ring} bg-card`
                      : "border-border hover:border-muted-foreground/30"
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full ${option.color}`} />
                  <span className="text-[10px] font-medium text-muted-foreground">{option.label}</span>
                </button>
              ))}
            </div>

            {/* Comment input */}
            <Input
              type="text"
              placeholder="Type your feedback..."
              value={customComment}
              onChange={(e) => setCustomComment(e.target.value)}
              className="mb-3 text-sm"
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
                <div className={`w-3 h-3 rounded-full ${getSelectedColorOption().color} flex-shrink-0`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">{customComment}</p>
                  <p className="text-xs text-muted-foreground">{getSelectedColorOption().label}</p>
                </div>
                <svg
                  className="w-5 h-5 text-accent flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
            )}

            {!customComment.trim() && (
              <p className="text-xs text-muted-foreground text-center py-2">
                Type a comment above to create a draggable feedback
              </p>
            )}
          </div>

          <Card className="p-4 bg-accent/5 border-accent/20">
            <p className="text-sm text-foreground font-medium mb-1">Try it yourself</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Drag comments onto the student work to see how Floop makes feedback 4x faster. Click placed comments to
              remove them.
            </p>
          </Card>

          <div className="text-center pt-4">
            <p className="text-xs text-muted-foreground mb-2">
              {placedFeedback.length} comment{placedFeedback.length !== 1 ? "s" : ""} placed
            </p>
            <div className="flex gap-1 justify-center">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i < placedFeedback.length ? "bg-accent" : "bg-border"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
