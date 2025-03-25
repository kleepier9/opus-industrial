import Image from "next/image"
import Link from "next/link"
import type { ProjectData } from "@/lib/project-data"

interface ProjectCardProps {
  project: ProjectData
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`} className="group block">
      <div className="project-card">
        <div className="product-image-container">
          <Image
            src={project.thumbnailImage || "/placeholder.svg"}
            alt={project.title}
            width={800}
            height={600}
            className="w-full h-[400px] object-cover"
          />
          <div className="product-overlay">
            <div className="category-label">{project.category}</div>
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
          </div>
        </div>
      </div>
    </Link>
  )
}

