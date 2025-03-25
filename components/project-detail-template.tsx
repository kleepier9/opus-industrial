"use client"

import type React from "react"
import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import CTASection from "@/components/cta-section"

export interface GalleryItem {
  src: string
  alt?: string
  type?: "image" | "video"
}

export interface ProjectTestimonial {
  quote: string
  author: string
  position: string
}

export interface ProjectDetailProps {
  title: string
  category: string
  client: string
  location: string
  year: string
  description: string
  challenge: string
  solution: string
  results: string[]
  mainImage: string
  gallery: GalleryItem[] | string[]
  testimonial?: ProjectTestimonial
  additionalContent?: React.ReactNode // For any custom content specific to a project
}

// Video Gallery Item Component
function VideoGalleryItem({ src, alt }: { src: string; alt?: string }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const handleEnded = () => {
    setIsPlaying(false)
    if (videoRef.current) {
      videoRef.current.currentTime = 0
    }
  }

  return (
    <div className="relative w-full h-[400px] md:h-[450px] bg-gray-100 overflow-hidden">
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-contain"
        onEnded={handleEnded}
        onClick={handlePlay}
      />
      {!isPlaying && (
        <button
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors"
          aria-label="Play video"
        >
          <div className="w-16 h-16 rounded-full bg-black/70 flex items-center justify-center">
            <Play className="h-8 w-8 text-white" fill="white" />
          </div>
        </button>
      )}
    </div>
  )
}

export default function ProjectDetailTemplate({
  title,
  category,
  client,
  location,
  year,
  description,
  challenge,
  solution,
  results,
  mainImage,
  gallery,
  testimonial,
  additionalContent,
}: ProjectDetailProps) {
  // Process gallery to ensure it's in the right format
  const processedGallery = gallery.map((item) => {
    if (typeof item === "string") {
      // Determine if it's a video based on file extension
      const isVideo = item.match(/\.(mp4|webm|ogg|mov)$/i) !== null
      return {
        src: item,
        alt: `${title} ${isVideo ? "video" : "image"}`,
        type: isVideo ? ("video" as const) : ("image" as const),
      }
    }
    // If it's already an object, ensure it has a type
    if (!item.type) {
      const isVideo = item.src.match(/\.(mp4|webm|ogg|mov)$/i) !== null
      return {
        ...item,
        type: isVideo ? ("video" as const) : ("image" as const),
      }
    }
    return item
  })

  return (
    <main className="flex-1 pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={mainImage || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-block category-label text-white">{category}</div>
            <h1 className="text-white">{title}</h1>
            <p className="mt-6 text-xl text-gray-300">{description}</p>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-3">
            {/* Project Info */}
            <div className="lg:col-span-1">
              <div className="border border-gray-200 p-8">
                <h3 className="text-xl font-bold mb-6">Project Details</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Client</p>
                    <p className="text-base font-medium">{client}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Location</p>
                    <p className="text-base font-medium">{location}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Year</p>
                    <p className="text-base font-medium">{year}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Category</p>
                    <p className="text-base font-medium">{category}</p>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-bold mb-4">Results</h4>
                  <ul className="space-y-2">
                    {results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="mr-2 h-5 w-5 flex-shrink-0 text-black"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-600">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Project Content */}
            <div className="lg:col-span-2">
              <div className="grid gap-16">
                <div>
                  <h2 className="section-title">Challenge</h2>
                  <p className="mt-4 text-lg text-gray-600">{challenge}</p>
                </div>

                <div>
                  <h2 className="section-title">Solution</h2>
                  <p className="mt-4 text-lg text-gray-600">{solution}</p>
                </div>

                {/* Project Gallery - Supports both images and videos */}
                <div>
                  <h3 className="text-2xl font-bold mb-6">Project Gallery</h3>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {processedGallery.map((item, index) => (
                      <div key={index} className="product-image-container">
                        {item.type === "video" ? (
                          <VideoGalleryItem src={item.src} alt={item.alt} />
                        ) : (
                          <Image
                            src={item.src || "/placeholder.svg"}
                            alt={item.alt || `${title} gallery image ${index + 1}`}
                            width={400}
                            height={800}
                            className="w-full h-[400px] md:h-[450px] object-contain bg-gray-100"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Content */}
                {additionalContent && <div className="mt-12">{additionalContent}</div>}

                {/* Testimonial */}
                {testimonial && (
                  <div className="bg-black text-white p-8">
                    <svg className="h-12 w-12 text-black mb-6" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="text-xl italic text-gray-300">{testimonial.quote}</p>
                    <div className="mt-6">
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-gray-400">{testimonial.position}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t border-gray-200 py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Button asChild className="minimal-button">
              <Link href="/projects" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
            <Button asChild className="minimal-button bg-black text-white">
              <Link href="/contact" className="flex items-center">
                Discuss Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        heading="Interested in a similar solution?"
        subtext="Let's discuss how we can apply these principles to your specific manufacturing challenges."
        buttonText="Get in Touch"
      />
    </main>
  )
}
