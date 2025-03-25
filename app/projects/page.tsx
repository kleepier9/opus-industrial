import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CTASection from "@/components/cta-section"
import { projects } from "@/lib/project-data"

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/projects-hero.jpg"
              alt="Industrial projects"
              fill
              className="object-cover brightness-[0.7]"
              priority
            />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-white">Our Projects</h1>
              <p className="mt-6 text-xl text-gray-300">
                Explore our portfolio of innovative industrial design solutions across various industries. Each project
                showcases our commitment to excellence, efficiency, and ergonomic design.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Showcase */}
        <div className="bg-white">
          {projects.map((project, index) => (
            <section key={project.id} className={`py-24 ${index % 2 === 1 ? "bg-gray-50" : "bg-white"}`}>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-12">
                  {/* Project Image - Left on even indexes, right on odd indexes */}
                  <div className={`w-full md:w-1/2 order-1 ${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}>
                    <div className="relative h-[500px] overflow-hidden">
                      <Image
                        src={project.thumbnailImage || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Project Info - Right on even indexes, left on odd indexes */}
                  <div className={`w-full md:w-1/2 order-2 ${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}>
                    <div className="max-w-xl">
                      <h2 className="project-title text-black">{project.title}</h2>
                      <h3 className="project-subtitle">{project.category}</h3>
                      <p className="mt-6 text-lg text-gray-600">{project.description}</p>
                      <div className="mt-8">
                        <Link
                          href={`/projects/${project.id}`}
                          className="minimal-button bg-black text-white hover:bg-gray-800"
                        >
                          View Project
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* CTA Section */}
        <CTASection
          heading="Have a project in mind?"
          subtext="Let's discuss how we can help bring your vision to life with our industrial design expertise."
          buttonText="Start a Project"
        />
      </main>
      <Footer />
    </div>
  )
}

