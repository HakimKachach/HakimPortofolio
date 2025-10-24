"use client"

import Image from "next/image"

const skills = [
  "HTML & CSS",
  "JavaScript",
  "React",
  "Next.js",
  "TailwindCSS",
  "Node.js",
  "TypeScript",
  "UI/UX Design",
  "Responsive Design",
  "Web Performance",
]

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-12 text-center">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 rounded-lg overflow-hidden border-2 border-primary/20">
              <Image src="/professional-developer-portrait.png" alt="Developer portrait" fill className="object-cover" />
            </div>
          </div>

          {/* Bio and Skills */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm Hakim a passionate web developer specializing in building clean, fast, and visually appealing digital
                experiences. With a keen eye for design and a strong foundation in modern web technologies, I create
                solutions that not only look great but perform exceptionally well.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                My approach combines strategic thinking with technical expertise to deliver projects that exceed
                expectations and drive real business results.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-bold text-foreground">Key Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
