"use client"

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground text-balance">
            Hi, I'm Hakim a Web Developer
          </h1>
          <p className="text-xl sm:text-2xl text-foreground/70 font-medium">Web Developer & UI/UX Designer</p>
        </div>

        <p className="text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed text-balance">
          I build elegant, high-performance websites that help businesses stand out online. Specializing in clean code,
          beautiful design, and seamless user experiences.
        </p>

        <button
          onClick={scrollToProjects}
          className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:scale-105"
        >
          View My Work
        </button>
      </div>
    </section>
  )
}
