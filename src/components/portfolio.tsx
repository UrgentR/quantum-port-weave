import Navigation from '@/components/navigation'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/sections/about-section'
import ProjectsSection from '@/components/sections/projects-section'
import ContactSection from '@/components/sections/contact-section'

export default function Portfolio() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Static Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-background via-background to-background/95" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Page Sections */}
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-muted-foreground font-mono">
            © 2024 AI Portfolio • Crafted with 🧠 and ⚡ • Built with React, Three.js & Framer Motion
          </p>
        </div>
      </footer>
    </div>
  )
}