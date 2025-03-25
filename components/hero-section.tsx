"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

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

  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Media */}
      <div className="absolute inset-0 z-0 bg-black">
        <AnimatePresence initial={false} mode="sync">
          {mediaItems.map((item, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentIndex ? 1 : 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              style={{ zIndex: index === currentIndex ? 1 : 0 }}
            >
              {item.type === "image" ? (
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt || "Hero background"}
                  fill
                  className="object-cover"
                  priority={true}
                />
              ) : (
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={item.src}
                  className="absolute inset-0 w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  autoPlay
                />
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-5 bg-black opacity-50"></div>

      {/* Navigation Controls */}
      {mediaItems.length > 1 && (
        <>
          <motion.button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors"
            aria-label="Previous slide"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="h-6 w-6" />
          </motion.button>
          <motion.button
            onClick={goToNext}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors"
            aria-label="Next slide"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="h-6 w-6" />
          </motion.button>
        </>
      )}

      {/* Slide Indicators */}
      {mediaItems.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
          {mediaItems.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-white" : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div className="max-w-3xl" initial="hidden" animate="visible" variants={contentVariants}>
          <h1 className="text-white">{title}</h1>
          <h3 className="text-gray-200">{subtitle}</h3>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl">{description}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={primaryButtonLink}
                className="minimal-button bg-white text-black hover:bg-gray-200 border-transparent"
              >
                {primaryButtonText}
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={secondaryButtonLink}
                className="px-6 py-2 rounded-full text-sm font-medium transition-colors bg-transparent text-white border border-white hover:bg-white hover:text-black hover:border-transparent"
              >
                {secondaryButtonText}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
