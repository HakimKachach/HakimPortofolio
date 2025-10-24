export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground/5 border-t border-border py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-foreground/60 text-sm">© {currentYear} Developer Portfolio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#home" className="text-foreground/60 hover:text-foreground transition-colors text-sm">
              Home
            </a>
            <a href="#projects" className="text-foreground/60 hover:text-foreground transition-colors text-sm">
              Projects
            </a>
            <a href="#about" className="text-foreground/60 hover:text-foreground transition-colors text-sm">
              About
            </a>
            <a href="#contact" className="text-foreground/60 hover:text-foreground transition-colors text-sm">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
