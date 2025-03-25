"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CTASection from "@/components/cta-section"
import HeroSection from "@/components/hero-section"
import { getFeaturedProjects } from "@/lib/project-data"
import FadeIn from "@/components/animations/fade-in"
import StaggerChildren from "@/components/animations/stagger-children"
import CountUp from "@/components/animations/count-up"
import ParallaxSection from "@/components/animations/parallax-section"
import ServiceCard from "@/components/service-card"

export default function Home() {
  const featuredProjects = getFeaturedProjects(3)

  // Hero section media items
  const heroMediaItems = [
    {
      type: "image" as const,
      src: "/images/material_handling_1.png",
      alt: "Industrial machinery",
    },
    {
      type: "video" as const,
      src: "/videos/sylf_cad_vid.mp4",
    },
    {
      type: "image" as const,
      src: "/images/tyler_sylf.png",
      alt: "Industrial design process",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <HeroSection
          title="Industrial Design Agency"
          subtitle="Design. Manufacture. Integrate."
          description="Cutting-edge industrial design solutions that transform ideas into reality. We specialize in ergonomic lift solutions, product prototyping, and design for manufacture."
          primaryButtonText="View Our Work"
          primaryButtonLink="/projects"
          secondaryButtonText="Contact Us"
          secondaryButtonLink="/contact"
          mediaItems={heroMediaItems}
          autoplayInterval={7000} // 7 seconds between slides
        />

        {/* Expertise Section */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="section-title">Expertise</h2>
            </FadeIn>

            <div className="mt-16 space-y-16">
              {/* Expertise Item 1 */}
              <FadeIn direction="right" delay={0.2}>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="numbered-heading">
                      <div className="number">01</div>
                      <div className="text">Industrial Design</div>
                    </div>
                    <p className="text-gray-600">
                      Transform your ideas into visually stunning, user-centric products. Our expertise ensures that
                      each design is not only functional but also aesthetically appealing, enhancing user experience and
                      market appeal.
                    </p>
                  </div>
                  <div className="h-px md:h-auto w-full bg-gray-200 md:bg-transparent"></div>
                </div>
              </FadeIn>

              {/* Expertise Item 2 */}
              <FadeIn direction="left" delay={0.2}>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="order-2 md:order-1 h-px md:h-auto w-full bg-gray-200 md:bg-transparent"></div>
                  <div className="order-1 md:order-2">
                    <div className="numbered-heading">
                      <div className="number">02</div>
                      <div className="text">Mechanical Engineering</div>
                    </div>
                    <p className="text-gray-600">
                      Engineering precision and reliability into every product, ensuring durability and optimal
                      performance. Our mechanical engineering solutions are designed to withstand the demands of
                      industrial environments.
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* Expertise Item 3 */}
              <FadeIn direction="right" delay={0.2}>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="numbered-heading">
                      <div className="number">03</div>
                      <div className="text">Design for Manufacturing</div>
                    </div>
                    <p className="text-gray-600">
                      Optimizing designs for efficient production, ensuring seamless transitions from concept to mass
                      production. We consider manufacturing processes from the start to reduce costs and improve
                      quality.
                    </p>
                  </div>
                  <div className="h-px md:h-auto w-full bg-gray-200 md:bg-transparent"></div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <ParallaxSection speed={-0.2} className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="text-4xl font-bold text-center mb-4">Industrial Design Solutions</h2>
              <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
                Experience the perfect blend of technology and ergonomics with Opus Industrial, designed to prioritize
                efficiency and quality in manufacturing settings.
              </p>
            </FadeIn>

            <StaggerChildren>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Top row - two larger items */}
                <ServiceCard
                  title="Ergonomic Lift Solutions"
                  subtitle="Custom-designed lifting systems"
                  imageSrc="/images/service_ergonomic.png"
                  height="h-[300px]"
                />

                <ServiceCard
                  title="Product Prototyping"
                  subtitle="Rapid concept validation"
                  imageSrc="/images/tyler_sylf.png"
                  height="h-[300px]"
                />
              </div>

              {/* Bottom row - three smaller items */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <ServiceCard
                  title="Design for Manufacture"
                  subtitle="Production optimization"
                  imageSrc="/images/service-dfm.jpg"
                  height="h-[250px]"
                />

                <ServiceCard
                  title="Industrial Integration"
                  subtitle="Seamless system integration"
                  imageSrc="/images/service-integration.jpg"
                  height="h-[250px]"
                />

                <ServiceCard
                  title="CAD & 3D Modeling"
                  subtitle="Precision technical documentation"
                  imageSrc="/images/autodesk-cad.jpg"
                  height="h-[250px]"
                />
              </div>
            </StaggerChildren>
          </div>
        </ParallaxSection>

        {/* Featured Projects */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <h2 className="section-title text-center">See Our Work in Action</h2>
              <p className="section-subtitle text-center">
                Delivering Industrial Design That Transforms Ideas Into Market-Ready Products
              </p>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {featuredProjects.map((project) => (
                <FadeIn key={project.id} direction="up" delay={0.1}>
                  <Link href={`/projects/${project.id}`} className="block">
                    <motion.div
                      className="product-image-container"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={project.thumbnailImage || "/images/service_ergonomic.png"}
                        alt={project.title}
                        width={600}
                        height={500}
                        className="w-full h-[300px] object-cover"
                      />
                      <div className="product-overlay">
                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                        <p className="text-sm text-gray-300 mt-2">{project.category}</p>
                      </div>
                    </motion.div>
                  </Link>
                </FadeIn>
              ))}
            </div>

            <FadeIn direction="up" delay={0.4} className="mt-16 text-center">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                <Link href="/projects" className="minimal-button inline-block">
                  View All Projects
                </Link>
              </motion.div>
            </FadeIn>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <FadeIn direction="up" delay={0.1}>
                <CountUp end={50} suffix="+" className="stats-number" />
                <div className="stats-label">Completed Projects</div>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <CountUp end={12} suffix="+" className="stats-number" />
                <div className="stats-label">Active Clients</div>
              </FadeIn>
              <FadeIn direction="up" delay={0.3}>
                <CountUp end={1000} suffix="+" className="stats-number" />
                <div className="stats-label">Parts Developed</div>
              </FadeIn>
              <FadeIn direction="up" delay={0.4}>
                <CountUp end={45} suffix="+" className="stats-number" />
                <div className="stats-label">Clients</div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <FadeIn direction="up">
          <CTASection
            heading="Working on a new or exisitng project?"
            subtext="Contact us today to discuss how we can help."
            buttonText="Get in Touch"
          />
        </FadeIn>
      </main>
      <Footer />
    </div>
  )
}
