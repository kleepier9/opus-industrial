"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path) => {
    return pathname === path
  }

  return (
    <div className="fixed top-0 z-50 w-full px-4">
      <header className="mx-auto max-w-7xl rounded-full bg-white shadow-sm">
        <div className="flex h-16 items-center justify-between px-6 sm:px-8">
          <div>
            <Link href="/" className="flex items-center">
              <Image
                src="/images/opus_industrial_logo.png"
                alt="Opus Industrial Logo"
                width={32}
                height={32}
                className="mr-2"
              />
              <span className="text-xl font-bold">Opus Industrial</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-10">
            <Link
              href="/"
              className={`text-sm hover:text-gray-500 transition-colors ${isActive("/") ? "text-black" : "text-gray-600"}`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-sm hover:text-gray-500 transition-colors ${isActive("/about") ? "text-black" : "text-gray-600"}`}
            >
              About
            </Link>
            <Link
              href="/projects"
              className={`text-sm hover:text-gray-500 transition-colors ${
                isActive("/projects") || pathname.startsWith("/projects/") ? "text-black" : "text-gray-600"
              }`}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className={`text-sm hover:text-gray-500 transition-colors ${isActive("/contact") ? "text-black" : "text-gray-600"}`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex h-9 items-center justify-center rounded-full border border-black px-5 text-sm font-medium transition-colors hover:bg-black hover:text-white"
            >
              Hire Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-600 hover:text-gray-900"
              onClick={() => document.getElementById("mobile-menu").classList.toggle("hidden")}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div id="mobile-menu" className="hidden md:hidden mt-2 mx-auto max-w-7xl rounded-2xl bg-white shadow-sm">
        <div className="space-y-1 px-6 py-4">
          <Link
            href="/"
            className={`block py-2 text-base ${isActive("/") ? "text-black" : "text-gray-600"}`}
            onClick={() => document.getElementById("mobile-menu").classList.add("hidden")}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`block py-2 text-base ${isActive("/about") ? "text-black" : "text-gray-600"}`}
            onClick={() => document.getElementById("mobile-menu").classList.add("hidden")}
          >
            About
          </Link>
          <Link
            href="/projects"
            className={`block py-2 text-base ${
              isActive("/projects") || pathname.startsWith("/projects/") ? "text-black" : "text-gray-600"
            }`}
            onClick={() => document.getElementById("mobile-menu").classList.add("hidden")}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className={`block py-2 text-base ${isActive("/contact") ? "text-black" : "text-gray-600"}`}
            onClick={() => document.getElementById("mobile-menu").classList.add("hidden")}
          >
            Contact
          </Link>
          <div className="mt-4">
            <Link
              href="/contact"
              className="inline-flex h-9 items-center justify-center rounded-full border border-black px-5 text-sm font-medium transition-colors hover:bg-black hover:text-white"
              onClick={() => document.getElementById("mobile-menu").classList.add("hidden")}
            >
              Hire Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

