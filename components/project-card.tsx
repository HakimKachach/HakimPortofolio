"use client"

import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  project: {
    id: number
    title: string
    description: string
    example: string
    image: string
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/project/${project.id}`}>
      <div className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer h-full">
        <div className="relative h-48 overflow-hidden bg-muted">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        <div className="p-6 space-y-4">
          <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
          <p className="text-foreground/70 text-sm leading-relaxed">{project.description}</p>
          <p className="text-foreground/60 text-sm italic">{project.example}</p>

          <div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-300 group/btn">
            View Project
            <svg
              className="w-[18px] h-[18px] group-hover/btn:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  )
}
