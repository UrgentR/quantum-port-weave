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
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto text-center"
      >
        {/* Main heading */}
        <motion.div variants={itemVariants} className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 quantum-text font-mono">
            <TypingAnimation 
              text="AI PORTFOLIO" 
              speed={100}
              className="block"
              onComplete={() => setTypingComplete(true)}
            />
          </h1>
          
          {typingComplete && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h2 className="text-2xl md:text-4xl text-muted-foreground font-light">
                Futuristic Digital Workspace
              </h2>
            </motion.div>
          )}
        </motion.div>

        {/* Holographic cards grid */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <HolographicCard delay={0.2}>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-neural rounded-full flex items-center justify-center neural-glow">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">AI-Powered</h3>
              <p className="text-sm text-muted-foreground">
                Intelligent design with adaptive interfaces
              </p>
            </div>
          </HolographicCard>

          <HolographicCard delay={0.4}>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-holographic rounded-full flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Interactive 3D</h3>
              <p className="text-sm text-muted-foreground">
                Immersive holographic experiences
              </p>
            </div>
          </HolographicCard>

          <HolographicCard delay={0.6}>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-quantum rounded-full flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Future-Ready</h3>
              <p className="text-sm text-muted-foreground">
                Next-generation web technologies
              </p>
            </div>
          </HolographicCard>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button 
            variant="holographic" 
            size="lg"
            className="group"
          >
            Explore Portfolio
            <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
          
          <div className="flex gap-3">
            <Button variant="glass" size="icon">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="glass" size="icon">
              <Linkedin className="h-4 w-4" />
            </Button>
            <Button variant="glass" size="icon">
              <Mail className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        {/* Status indicator */}
        <motion.div 
          variants={itemVariants}
          className="flex items-center justify-center gap-2 text-sm text-muted-foreground font-mono"
        >
          <div className="w-2 h-2 bg-neural-glow rounded-full animate-pulse" />
          <span>SYSTEMS ONLINE • NEURAL NETWORKS ACTIVE</span>
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
        </motion.div>
      </motion.div>

      {/* Floating scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}