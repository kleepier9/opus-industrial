import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProjectDetailTemplate from "@/components/project-detail-template"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// This would typically come from a database or CMS
// You can expand this with more projects as needed
const projectsData = {
  "automated-assembly-line": {
    title: "Automated Assembly Line",
    category: "Manufacturing Optimization",
    client: "Automotive Components Inc.",
    location: "Detroit, MI",
    year: "2022",
    description:
      "Custom-designed assembly system for automotive components manufacturing that increased production efficiency by 35% while reducing error rates by 50%.",
    challenge:
      "The client was facing significant bottlenecks in their production line, with manual assembly processes leading to inconsistent quality and production delays. They needed a solution that would increase throughput while maintaining or improving quality standards.",
    solution:
      "We designed a fully automated assembly line with integrated quality control systems. The solution included custom fixtures, robotic assembly stations, and a centralized control system that allowed for real-time monitoring and adjustments.",
    results: [
      "35% increase in production efficiency",
      "50% reduction in error rates",
      "20% decrease in production costs",
      "ROI achieved within 14 months",
    ],
    mainImage: "/images/project1-detail.jpg",
    gallery: [
      "/images/project1-gallery1.jpg",
      "/images/project1-gallery2.jpg",
      "/images/project1-gallery3.jpg",
      "/images/project1-gallery4.jpg",
    ],
    testimonial: {
      quote:
        "The automated assembly line designed by Opus Industrial transformed our manufacturing process. We've seen significant improvements in both efficiency and quality, which has directly impacted our bottom line.",
      author: "James Wilson",
      position: "Production Manager, Automotive Components Inc.",
    },
  },
  "ergonomic-workstation": {
    title: "Ergonomic Workstation",
    category: "Ergonomic Solutions",
    client: "Global Logistics Corp.",
    location: "Chicago, IL",
    year: "2021",
    description:
      "Height-adjustable workstation with integrated lifting system for warehouse operations, reducing worker strain and increasing productivity.",
    challenge:
      "The client's warehouse operations involved frequent lifting and handling of various sized packages, leading to worker fatigue and an increase in repetitive strain injuries. They needed a solution that would improve worker comfort and safety without sacrificing productivity.",
    solution:
      "We designed a custom ergonomic workstation with height-adjustable surfaces and an integrated lifting system. The design incorporated adjustable lighting, anti-fatigue flooring, and optimized tool placement to reduce reaching and bending.",
    results: [
      "40% reduction in reported ergonomic injuries",
      "15% increase in worker productivity",
      "Decreased worker fatigue and improved morale",
      "Reduced worker compensation claims",
    ],
    mainImage: "/images/project2-detail.jpg",
    gallery: [
      "/images/project2-gallery1.jpg",
      "/images/project2-gallery2.jpg",
      "/images/project2-gallery3.jpg",
      "/images/project2-gallery4.jpg",
    ],
    testimonial: {
      quote:
        "The ergonomic workstations have made a tremendous difference in our warehouse operations. Our team members are experiencing less fatigue and fewer injuries, and we've seen a notable increase in productivity.",
      author: "Sarah Johnson",
      position: "Operations Director, Global Logistics Corp.",
    },
  },
  "medical-device-prototype": {
    title: "Medical Device Prototype",
    category: "Prototyping",
    client: "MedTech Innovations",
    location: "Boston, MA",
    year: "2023",
    description:
      "Rapid prototyping and design optimization for a new medical diagnostic device, reducing time to market by 40%.",
    challenge:
      "The client had developed a breakthrough medical diagnostic technology but needed to transform their concept into a production-ready prototype quickly to secure additional funding and begin clinical trials.",
    solution:
      "We utilized our rapid prototyping capabilities to create multiple iterations of the device, incorporating design for manufacture principles from the start. Our team worked closely with the client's engineers to optimize the design for both functionality and manufacturability.",
    results: [
      "40% reduction in time to market",
      "30% decrease in estimated production costs",
      "Successful clinical trials with the prototype",
      "Secured additional $5M in venture funding",
    ],
    mainImage: "/images/project3-detail.jpg",
    gallery: [
      "/images/project3-gallery1.jpg",
      "/images/project3-gallery2.jpg",
      "/images/project3-gallery3.jpg",
      "/images/project3-gallery4.jpg",
    ],
    testimonial: {
      quote:
        "Opus Industrial's expertise in rapid prototyping and design for manufacture was invaluable to our product development process. They helped us transform our concept into a production-ready device in record time.",
      author: "Dr. Michael Chen",
      position: "CTO, MedTech Innovations",
    },
  },
  // Add more projects here as needed
}

export default function ProjectDetailPage({ params }) {
  const project = projectsData[params.slug]

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center pt-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Project Not Found</h1>
            <p className="mt-4 text-gray-600">The project you're looking for doesn't exist or has been removed.</p>
            <Button asChild className="mt-8 minimal-button bg-black text-white">
              <Link href="/projects">Back to Projects</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="pt-16">
        <ProjectDetailTemplate {...project} />
      </div>
      <Footer />
    </div>
  )
}

