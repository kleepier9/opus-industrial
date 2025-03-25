import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CTASection from "@/components/cta-section"
import HeroSection from "@/components/hero-section"
import { getFeaturedProjects } from "@/lib/project-data"

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
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-title">Expertise</h2>

            <div className="mt-16 space-y-16">
              {/* Expertise Item 1 */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="numbered-heading">
                    <div className="number">01</div>
                    <div className="text">Industrial Design</div>
                  </div>
                  <p className="text-gray-600">
                    Transform your ideas into visually stunning, user-centric products. Our expertise ensures that each
                    design is not only functional but also aesthetically appealing, enhancing user experience and market
                    appeal.
                  </p>
                </div>
                <div className="h-px md:h-auto w-full bg-gray-200 md:bg-transparent"></div>
              </div>

              {/* Expertise Item 2 */}
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

              {/* Expertise Item 3 */}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="numbered-heading">
                    <div className="number">03</div>
                    <div className="text">Design for Manufacturing</div>
                  </div>
                  <p className="text-gray-600">
                    Optimizing designs for efficient production, ensuring seamless transitions from concept to mass
                    production. We consider manufacturing processes from the start to reduce costs and improve quality.
                  </p>
                </div>
                <div className="h-px md:h-auto w-full bg-gray-200 md:bg-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center">Our Services</h2>
            <p className="section-subtitle text-center">Comprehensive industrial design solutions for your business</p>

            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {/* Service 1 */}
              <div className="group relative overflow-hidden">
                <div className="relative h-[400px] w-full">
                  <Image
                    src="/images/service_ergonomic.png"
                    alt="Ergonomic Lift Solutions"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold text-white">Ergonomic Lift Solutions</h3>
                    <p className="mt-2 text-gray-300 max-w-md">
                      Custom-designed lifting systems that reduce strain and improve efficiency in manufacturing and
                      warehouse environments.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 2 */}
              <div className="group relative overflow-hidden">
                <div className="relative h-[400px] w-full">
                  <Image
                    src="/images/tyler_sylf.png"
                    alt="Product Prototyping"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold text-white">Product Prototyping</h3>
                    <p className="mt-2 text-gray-300 max-w-md">
                      Rapid prototyping services that transform concepts into functional models, accelerating the
                      development process.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 3 */}
              <div className="group relative overflow-hidden">
                <div className="relative h-[400px] w-full">
                  <Image
                    src="/images/service-dfm.jpg"
                    alt="Design for Manufacture"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold text-white">Design for Manufacture</h3>
                    <p className="mt-2 text-gray-300 max-w-md">
                      Optimizing product designs for efficient manufacturing, reducing costs and improving quality.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service 4 */}
              <div className="group relative overflow-hidden">
                <div className="relative h-[400px] w-full">
                  <Image
                    src="/images/service-integration.jpg"
                    alt="Industrial Integration"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold text-white">Industrial Integration</h3>
                    <p className="mt-2 text-gray-300 max-w-md">
                      Seamlessly integrating new equipment and systems into existing production environments.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link href="/services" className="minimal-button">
                Explore Our Projects
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center">See Our Work in Action</h2>
            <p className="section-subtitle text-center">
              Delivering Industrial Design That Transforms Ideas Into Market-Ready Products
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {featuredProjects.map((project) => (
                <div key={project.id} className="product-image-container">
                  <Image
                    src={project.thumbnailImage || "/images/service_ergonomic.png"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-[300px] object-cover"
                  />
                  <div className="product-overlay">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className="text-sm text-gray-300 mt-2">{project.category}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link href="/projects" className="minimal-button">
                View All Projects
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="stats-number">50+</div>
                <div className="stats-label">Completed Projects</div>
              </div>
              <div>
                <div className="stats-number">12+</div>
                <div className="stats-label">Active Clients</div>
              </div>
              <div>
                <div className="stats-number">1000+</div>
                <div className="stats-label">Parts Developed</div>
              </div>
              <div>
                <div className="stats-number">45+</div>
                <div className="stats-label">Clients</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          heading="Ready to transform your industrial processes?"
          subtext="Contact us today to discuss how we can help you optimize your operations."
          buttonText="Get in Touch"
        />
      </main>
      <Footer />
    </div>
  )
}

