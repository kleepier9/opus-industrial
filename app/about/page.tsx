import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CTASection from "@/components/cta-section"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/about-hero.jpg"
              alt="Industrial design workspace"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-white">About Opus Industrial</h1>
              <p className="mt-6 text-xl text-gray-300">
                Dedicated to creating innovative solutions for complex manufacturing challenges through expert
                industrial design and engineering.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <h2 className="section-title">Our Story</h2>
                <div className="mt-8 space-y-6 text-lg text-gray-600">
                  <p>
                    Opus Industrial was founded by Tyler Brownlow, a mechanical engineer with extensive experience in
                    material handling, automation, and industrial design. After witnessing firsthand the challenges
                    faced by manufacturing companies, Tyler set out to create a firm that would provide innovative,
                    ergonomic solutions to improve efficiency and worker safety.
                  </p>
                  <p>
                    What began as a vision to transform industrial processes has grown into a specialized industrial
                    design agency delivering tailored solutions for manufacturing challenges. Opus Industrial combines
                    deep technical expertise with a practical approach to create solutions that make a real difference
                    in production environments.
                  </p>
                  <p>
                    The commitment to excellence, attention to detail, and focus on practical, implementable solutions
                    has earned Opus Industrial a reputation as a trusted partner for industrial design challenges of all
                    sizes.
                  </p>
                </div>
              </div>
              <div className="relative h-[500px] overflow-hidden">
                <Image src="/images/founder.jpg" alt="Tyler Brownlow, Founder" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Founder Profile */}
        <section className="py-24 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center">Meet the Founder</h2>
            <p className="section-subtitle text-center">The expertise behind Opus Industrial's innovative solutions</p>

            <div className="mt-16 mx-auto max-w-3xl">
              <div className="bg-white shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <div className="relative h-64 w-full md:h-full md:w-64">
                      <Image src="/images/team-member1.jpg" alt="Tyler Brownlow" fill className="object-cover" />
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold">Tyler Brownlow</h3>
                    <p className="text-gray-500 font-medium">Founder & Lead Engineer</p>

                    <div className="mt-4 space-y-4 text-gray-600">
                      <p>
                        Tyler brings over 15 years of experience in industrial design and engineering to every project.
                        His diverse background spans multiple disciplines that enable him to approach manufacturing
                        challenges with a holistic perspective.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
                        <div className="flex items-start">
                          <svg
                            className="h-5 w-5 text-accent mr-2 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                          <span>Material Handling & Automation</span>
                        </div>
                        <div className="flex items-start">
                          <svg
                            className="h-5 w-5 text-accent mr-2 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                          <span>Systems Engineering</span>
                        </div>
                        <div className="flex items-start">
                          <svg
                            className="h-5 w-5 text-accent mr-2 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                          <span>Project Management</span>
                        </div>
                        <div className="flex items-start">
                          <svg
                            className="h-5 w-5 text-accent mr-2 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                          <span>Ergonomic Solutions</span>
                        </div>
                        <div className="flex items-start">
                          <svg
                            className="h-5 w-5 text-accent mr-2 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                          <span>R&D and Prototyping</span>
                        </div>
                        <div className="flex items-start">
                          <svg
                            className="h-5 w-5 text-accent mr-2 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                          <span>Engineering</span>
                        </div>
                        <div className="flex items-start">
                          <svg
                            className="h-5 w-5 text-accent mr-2 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                          <span>CAD/CAM Expertise</span>
                        </div>
                        <div className="flex items-start">
                          <svg
                            className="h-5 w-5 text-accent mr-2 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                          <span>Manufacturing Processes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-24 bg-black text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="section-title text-white">Our Mission</h2>
              <p className="mt-6 text-xl text-gray-300">
                To transform industrial processes through innovative design, creating safer, more efficient, and more
                sustainable manufacturing environments.
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <div className="p-8 border border-gray-800">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold">Safety First</h3>
                <p className="text-gray-400">
                  We prioritize worker safety in every design, creating ergonomic solutions that reduce strain and
                  prevent injuries.
                </p>
              </div>

              <div className="p-8 border border-gray-800">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.29 7 12 12 20.71 7" />
                    <line x1="12" x2="12" y1="22" y2="12" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold">Innovation</h3>
                <p className="text-gray-400">
                  We constantly push the boundaries of what's possible, leveraging the latest technologies and
                  methodologies to solve complex problems.
                </p>
              </div>

              <div className="p-8 border border-gray-800">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold">Sustainability</h3>
                <p className="text-gray-400">
                  We design with the environment in mind, creating solutions that reduce waste, energy consumption, and
                  environmental impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="section-title text-center">Our Values</h2>
            <p className="section-subtitle text-center">The principles that guide our work and relationships.</p>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="p-8 border border-gray-200">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M18 6 7 17l-5-5" />
                    <path d="m22 10-7.5 7.5L13 16" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in every project, delivering solutions that exceed expectations.
                </p>
              </div>

              <div className="p-8 border border-gray-200">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold">Transparency</h3>
                <p className="text-gray-600">
                  We believe in open communication and transparency throughout the design process.
                </p>
              </div>

              <div className="p-8 border border-gray-200">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                    <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold">Collaboration</h3>
                <p className="text-gray-600">
                  We work closely with our clients, valuing their input and expertise throughout the project.
                </p>
              </div>

              <div className="p-8 border border-gray-200">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold">Continuous Learning</h3>
                <p className="text-gray-600">
                  We're committed to staying at the forefront of industrial design through continuous learning and
                  innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

