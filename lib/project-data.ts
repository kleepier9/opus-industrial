// This file serves as a central place to store all project data
// You can import this in any component that needs to display project information

export interface ProjectGalleryImage {
  src: string
  alt?: string
}

export interface ProjectTestimonial {
  quote: string
  author: string
  position: string
}

export interface ProjectData {
  id: string
  title: string
  category: string
  client: string
  location: string
  year: string
  description: string
  challenge: string
  solution: string
  results: string[]
  mainImage: string
  thumbnailImage: string
  gallery: ProjectGalleryImage[] | string[]
  testimonial?: ProjectTestimonial
  featured?: boolean
}

// Sample project data - you can expand this as needed
export const projects: ProjectData[] = [
  {
    id: "automated-beverage-dispenser",
    title: "Automated Beverage Dispenser",
    category: "Hospitality Innovation",
    client: "Sylf, LLC",
    location: "Scranton, PA",
    year: "2023",
    description:
      "A state-of-the-art automated cocktail dispenser capable of creating custom cocktails with precision and speed, enhancing customer experience in high-end hospitality settings.",
    challenge:
      "The client wanted to revolutionize the bar experience by introducing an automated solution that could handle high demand while maintaining the quality and consistency of handcrafted cocktails. They needed a system that combined precision, speed, and reliability.",
    solution:
      "We developed a fully automated cocktail dispenser, handling everything from CAD design to assembly and part procurement.",
    results: [
      "50% reduction in drink preparation time",
      "Consistent cocktail quality across all servings",
      "Increased customer satisfaction and engagement",
      "Reduced operational costs for bar staff",
    ],
    mainImage: "/images/sylf-dispenser.png",
    thumbnailImage: "/images/sylf-dispenser.png",
    gallery: [
      "/images/project-cocktail-gallery1.jpg",
      "/images/project-cocktail-gallery2.jpg",
      "/images/project-cocktail-gallery3.jpg",
      "/images/project-cocktail-gallery4.jpg",
    ],
    testimonial: {
      quote:
        "Opus Industrial made our vision a reality with their innovative approach and attention to detail. Every step of the way they worked with us to make this product a success.",
      author: "Keyser Leepier",
      position: "CEO/Founder, Sylf",
    },
    featured: true,
  },
  {
    id: "ergonomic-workstation",
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
    thumbnailImage: "/images/project2.jpg",
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
    featured: true,
  },
  {
    id: "medical-device-prototype",
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
    thumbnailImage: "/images/project3.jpg",
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
    featured: true,
  },
  // Add more projects here as needed
]

// Helper functions to work with project data
export function getProjectById(id: string): ProjectData | undefined {
  return projects.find((project) => project.id === id)
}

export function getFeaturedProjects(limit = 3): ProjectData[] {
  return projects.filter((project) => project.featured).slice(0, limit)
}

export function getProjectsByCategory(category: string): ProjectData[] {
  return projects.filter((project) => project.category === category)
}

export function getAllCategories(): string[] {
  const categories = new Set(projects.map((project) => project.category))
  return Array.from(categories)
}
