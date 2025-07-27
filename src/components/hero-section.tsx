import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import TypingAnimation from '@/components/ui/typing-animation'
import HolographicCard from '@/components/ui/holographic-card'
import { useState } from 'react'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'

export default function HeroSection() {
  const [typingComplete, setTypingComplete] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6 pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Name Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Alex Chen
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                I'm <span className="quantum-text">Tech Enthusiast</span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Final year Computer Science student passionate about full-stack development. 
                Skilled in building end-to-end web applications with a strong foundation 
                in both tech and business concepts.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg" className="w-fit">
                Download CV
              </Button>
              
              <div className="flex gap-3">
                <Button variant="outline" size="icon">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>

            {/* Status indicator */}
            <motion.div 
              variants={itemVariants}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Available for opportunities</span>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
              <img 
                src="/lovable-uploads/a401a34d-9515-4661-a53e-baedaa7568f0.png"
                alt="Alex Chen - Tech Enthusiast"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}