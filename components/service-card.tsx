"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface ServiceCardProps {
  title: string
  subtitle: string
  imageSrc: string
  height?: string
}

export default function ServiceCard({ title, subtitle, imageSrc, height = "h-[300px]" }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`relative overflow-hidden group ${height}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div animate={{ scale: isHovered ? 1.05 : 1 }} transition={{ duration: 0.6 }} className="absolute inset-0">
        <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-8"
        animate={{
          backgroundColor: isHovered ? "rgba(0, 0, 0, 0.65)" : "rgba(0, 0, 0, 0.5)",
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.h3
          className="text-3xl font-bold text-white mb-2"
          animate={{ y: isHovered ? -5 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>
        <motion.p
          className="text-lg text-white/90"
          initial={{ opacity: 0.9 }}
          animate={{
            opacity: isHovered ? 1 : 0.9,
            y: isHovered ? 5 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          {subtitle}
        </motion.p>
      </motion.div>
    </motion.div>
  )
}
