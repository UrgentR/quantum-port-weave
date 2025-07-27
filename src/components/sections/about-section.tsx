import { motion } from 'framer-motion'
import HolographicCard from '@/components/ui/holographic-card'
import { Button } from '@/components/ui/button'
import { Brain, Code, Palette, Zap } from 'lucide-react'

export default function AboutSection() {
  const skills = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AI Development",
      description: "Machine learning, neural networks, and intelligent systems",
      progress: 90
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Full-Stack Development", 
      description: "React, Node.js, Python, and modern web technologies",
      progress: 95
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "UI/UX Design",
      description: "Creative interfaces with focus on user experience",
      progress: 85
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "3D Graphics",
      description: "Three.js, WebGL, and immersive experiences",
      progress: 80
    }
  ]

  return (
    <section id="about" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 quantum-text tracking-tight">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a software engineer specializing in AI-driven web applications, 
            modern development practices, and innovative user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bio Card */}
          <HolographicCard delay={0.2}>
            <div className="space-y-6">
              <div className="w-16 h-16 bg-gradient-holographic rounded-full flex items-center justify-center mb-6">
                <Brain className="h-8 w-8 text-background" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">Software Engineer</h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I specialize in developing scalable web applications with a focus on 
                  artificial intelligence integration, modern UI/UX design, and 
                  performance optimization.
                </p>
                <p>
                  With expertise in React, TypeScript, and AI technologies, I build 
                  solutions that are elegant, efficient, and user-centered.
                </p>
              </div>

              <div className="flex gap-3 pt-4">
                <Button variant="neural" size="sm">
                  Download Resume
                </Button>
                <Button variant="glass" size="sm">
                  View Certifications
                </Button>
              </div>
            </div>
          </HolographicCard>

          {/* Skills Grid */}
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <HolographicCard delay={0.3 + index * 0.1} hoverable={false}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-neural rounded-lg flex items-center justify-center neural-glow flex-shrink-0">
                      {skill.icon}
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-2">{skill.title}</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {skill.description}
                      </p>
                      
                      {/* Progress bar */}
                      <div className="w-full bg-muted rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.progress}%` }}
                          transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                          viewport={{ once: true }}
                          className="h-2 bg-gradient-holographic rounded-full"
                        />
                      </div>
                      <span className="text-xs text-muted-foreground font-mono mt-1 block">
                        {skill.progress}%
                      </span>
                    </div>
                  </div>
                </HolographicCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}