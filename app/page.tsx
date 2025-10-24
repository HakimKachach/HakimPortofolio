import Header from "@/components/header"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export const metadata = {
  title: "Developer Portfolio",
  description: "Professional web developer & UI/UX designer portfolio",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
