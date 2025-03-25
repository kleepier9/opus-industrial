"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CTASection from "@/components/cta-section"
import FadeIn from "@/components/animations/fade-in"
import StaggerChildren from "@/components/animations/stagger-children"
import { Check, User, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Hero Section - Enhanced with better visual impact */}
        <section className="relative h-[80vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/ergo-easy-arm.jpg"
              alt="Industrial design workspace"
              fill
              className="object-cover brightness-[0.6]"
              priority
            />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl"
            >
              <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight">About Opus Industrial</h1>
              <div className="w-24 h-1 bg-white mt-8 mb-8"></div>
              <p className="text-xl md:text-2xl text-gray-200 max-w-2xl leading-relaxed">
                Dedicated to creating innovative solutions for complex manufacturing challenges through expert
                industrial design and engineering.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story Section - Redesigned with better balance */}
        <section className="py-32 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-12 gap-16 items-center">
              <div className="md:col-span-7">
                <FadeIn direction="right">
                  <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Story</h2>
                  <div className="space-y-6 text-lg text-gray-600">
                    <p className="leading-relaxed">
                      Opus Industrial was founded by Tyler Brownlow, a mechanical engineer with extensive experience in
                      material handling, automation, and industrial design. After witnessing firsthand the challenges
                      faced by manufacturing companies, Tyler set out to create a firm that would provide innovative,
                      ergonomic solutions to improve efficiency and worker safety.
                    </p>
                    <p className="leading-relaxed">
                      What began as a vision to transform industrial processes has grown into a specialized industrial
                      design agency delivering tailored solutions for manufacturing challenges. Opus Industrial combines
                      deep technical expertise with a practical approach to create solutions that make a real difference
                      in production environments.
                    </p>
                    <p className="leading-relaxed">
                      The commitment to excellence, attention to detail, and focus on practical, implementable solutions
                      has earned Opus Industrial a reputation as a trusted partner for industrial design challenges of
                      all sizes.
                    </p>
                  </div>
                </FadeIn>
              </div>

              <div className="md:col-span-5">
                <FadeIn direction="left">
                  <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/30 z-10 flex items-center justify-center">
                      <div className="text-center text-white p-8">
                        <div className="text-6xl font-bold mb-4">15+</div>
                        <div className="text-xl uppercase tracking-wider">Years of Experience</div>
                        <div className="w-16 h-1 bg-white mx-auto my-8"></div>
                        <div className="text-6xl font-bold mb-4">50+</div>
                        <div className="text-xl uppercase tracking-wider">Completed Projects</div>
                      </div>
                    </div>
                    <Image
                      src="/images/palletizing-arm.png"
                      alt="Industrial machinery"
                      fill
                      className="object-cover"
                    />
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Redesigned Founder Profile - More elegant and balanced */}
        <section className="py-32 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <FadeIn>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet the Founder</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  The expertise behind Opus Industrial's innovative solutions
                </p>
              </FadeIn>
            </div>

            <div className="grid md:grid-cols-12 gap-12 items-center">
              {/* Founder Image/Icon Column */}
              <div className="md:col-span-4 flex justify-center">
                <FadeIn direction="right">
                  <div className="relative">
                    <motion.div
                      className="flex items-center justify-center h-56 w-56 rounded-full bg-white shadow-xl border-8 border-gray-100"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <User className="h-24 w-24 text-gray-400" />
                    </motion.div>
                    <motion.div
                      className="absolute -bottom-4 -right-4 bg-black text-white py-3 px-6 rounded-full shadow-lg"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <span className="font-medium">Founder & CEO</span>
                    </motion.div>
                  </div>
                </FadeIn>
              </div>

              {/* Founder Info Column */}
              <div className="md:col-span-8">
                <FadeIn direction="left">
                  <div className="bg-white rounded-xl shadow-xl p-10">
                    <h3 className="text-3xl font-bold mb-4">Tyler Brownlow</h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                      Tyler brings over 15 years of experience in industrial design and engineering to every project.
                      His diverse background spans multiple disciplines that enable him to approach manufacturing
                      challenges with a holistic perspective, combining technical expertise with creative
                      problem-solving.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200">
                          Education & Certification
                        </h4>
                        <ul className="space-y-3 text-gray-600">
                          <li className="flex items-center">
                            <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                            B.S. Mechanical Engineering, Penn State
                          </li>
                          <li className="flex items-center">
                            <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                            Certified in Advanced CAD Design
                          </li>
                          <li className="flex items-center">
                            <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                            Industrial Automation Specialist
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200">Areas of Expertise</h4>
                        <StaggerChildren staggerDelay={0.1}>
                          <ul className="space-y-3">
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-black mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">Material Handling & Automation</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-black mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">Systems Engineering</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-black mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">Ergonomic Solutions</span>
                            </li>
                            <li className="flex items-start">
                              <Check className="h-5 w-5 text-black mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">CAD/CAM Expertise</span>
                            </li>
                          </ul>
                        </StaggerChildren>
                      </div>
                    </div>

                    <div className="mt-10 flex justify-end">
                      <Link
                        href="/contact"
                        className="inline-flex items-center text-black font-medium border-b-2 border-black pb-1 hover:pb-2 transition-all duration-200"
                      >
                        Connect with Tyler <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <FadeIn>
          <CTASection
            heading="Ready to work with our team?"
            subtext="Let's discuss how we can help bring your industrial design vision to life."
            buttonText="Contact Us Today"
          />
        </FadeIn>
      </main>
      <Footer />
    </div>
  )
}
