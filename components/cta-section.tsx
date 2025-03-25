"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface CTASectionProps {
  heading?: string
  subtext?: string
  buttonText?: string
  buttonLink?: string
}

export default function CTASection({
  heading = "Ready to work with us?",
  subtext = "Contact us today to discuss your industrial design needs.",
  buttonText = "Get in Touch",
  buttonLink = "/contact",
}: CTASectionProps) {
  return (
    <section className="py-24 bg-black text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            {heading}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {subtext}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild className="minimal-button bg-white text-black hover:bg-gray-200">
              <Link href={buttonLink}>{buttonText}</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
