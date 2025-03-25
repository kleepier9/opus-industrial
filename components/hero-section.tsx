"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface MediaItem {
  type: "image" | "video"
  src: string
  alt?: string
}

interface HeroSectionProps {
  title: string
  subtitle: string
  description: string
  primaryButtonText: string
  primaryButtonLink: string
  secondaryButtonText: string
  secondaryButtonLink: string
  mediaItems: MediaItem[]
  autoplayInterval?: number // in milliseconds
}

export default function HeroSection({
  title,
  subtitle,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  mediaItems,
  autoplayInterval = 5000, // default to 5 seconds
}: HeroSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  // Set up autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext()
    }, autoplayInterval)

    return () => clearInterval(interval)
  }, [currentIndex, autoplayInterval])

  // Handle video playback when slide changes
  useEffect(() => {
    // Pause all videos
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause()
      }
    })

    // Play the current video if it's a video
    const currentItem = mediaItems[currentIndex]
    if (currentItem.type === "video" && videoRefs.current[currentIndex]) {
      videoRefs.current[currentIndex]?.play()
    }
  }, [currentIndex, mediaItems])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? mediaItems.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === mediaItems.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Background Media */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {mediaItems.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            {item.type === "image" ? (
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt || "Hero background"}
                fill
                className="object-cover"
                priority={index === 0}
              />
            ) : (
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={item.src}
                className="absolute inset-0 w-full h-full object-cover"
                muted
                loop
                playsInline
                autoplay
              />
            )}
          </div>
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-5 bg-black opacity-50"></div>

      {/* Navigation Controls */}
      {mediaItems.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      {/* Slide Indicators */}
      {mediaItems.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
          {mediaItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-white" : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-white">{title}</h1>
          <h3 className="text-gray-200">{subtitle}</h3>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl">{description}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={primaryButtonLink}
              className="minimal-button bg-white text-black hover:bg-gray-200 border-transparent"
            >
              {primaryButtonText}
            </Link>
            <Link
              href={secondaryButtonLink}
              className="px-6 py-2 rounded-full text-sm font-medium transition-colors bg-transparent text-white border border-white hover:bg-white hover:text-black hover:border-transparent"
            >
              {secondaryButtonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
