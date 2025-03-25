"use client"

import { useRef, useEffect, useState } from "react"
import { useInView, useMotionValue, useSpring } from "framer-motion"

interface CountUpProps {
  end: number
  duration?: number
  delay?: number
  prefix?: string
  suffix?: string
  threshold?: number
  className?: string
}

export default function CountUp({
  end,
  duration = 2,
  delay = 0,
  prefix = "",
  suffix = "",
  threshold = 0.1,
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: threshold })
  const [hasAnimated, setHasAnimated] = useState(false)

  const count = useMotionValue(0)
  const roundedCount = useSpring(count, { duration: duration * 1000, delay: delay * 1000 })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      count.set(end)
      setHasAnimated(true)
    }
  }, [isInView, end, count, hasAnimated])

  useEffect(() => {
    const unsubscribe = roundedCount.onChange((latest) => {
      setDisplayValue(Math.round(latest))
    })
    return unsubscribe
  }, [roundedCount])

  return (
    <div ref={ref} className={className}>
      <span>
        {prefix}
        {displayValue}
        {suffix}
      </span>
    </div>
  )
}
