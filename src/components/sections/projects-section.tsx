import { motion } from 'framer-motion'
import HolographicCard from '@/components/ui/holographic-card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, Play } from 'lucide-react'

export default function ProjectsSection() {
  const projects = [
    {
      title: "Neural Network Visualizer",
      description: "Real-time 3D visualization of artificial neural networks with interactive training simulation",
      image: "🧠",
      tags: ["Three.js", "TensorFlow.js", "React", "WebGL"],
      gradient: "gradient-neural"
    },
    {
      title: "Holographic UI Framework",
      description: "A revolutionary UI library for creating floating, holographic interfaces in web applications",
      image: "✨",
      tags: ["React", "Framer Motion", "CSS3", "TypeScript"],
      gradient: "gradient-holographic"
    },
    {
      title: "Quantum Computing Simulator",
      description: "Interactive quantum circuit simulator with real-time qubit state visualization",
      image: "⚛️",
      tags: ["WebAssembly", "Rust", "React", "D3.js"],
      gradient: "gradient-quantum"
    },
    {
      title: "AI Voice Assistant",
      description: "Intelligent voice assistant with natural language processing and 3D avatar interaction",
      image: "🎙️",
      tags: ["WebRTC", "NLP", "Three.js", "Node.js"],
      gradient: "gradient-neural"
    },
    {
      title: "Metaverse Portfolio",
      description: "Immersive 3D portfolio experience in a virtual environment with physics simulation",
      image: "🌌",
      tags: ["Three.js", "Cannon.js", "WebXR", "GLSL"],
      gradient: "gradient-holographic"
    },
    {
      title: "Blockchain Visualizer",
      description: "Real-time 3D visualization of blockchain networks and transaction flows",
      image: "⛓️",
      tags: ["Web3.js", "Three.js", "Solidity", "React"],
      gradient: "gradient-quantum"
    }
  ]

  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 quantum-text tracking-tight">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of applications demonstrating modern web technologies, 
            AI integration, and innovative user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <HolographicCard delay={index * 0.1}>
                <div className="space-y-4">
                  {/* Project Icon */}
                  <div className={`w-16 h-16 bg-${project.gradient} rounded-xl flex items-center justify-center text-3xl mb-4`}>
                    {project.image}
                  </div>

                  {/* Project Info */}
                  <div>
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-muted rounded-full font-mono text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button variant="quantum" size="sm" className="flex-1">
                      <Play className="h-3 w-3 mr-1" />
                      Demo
                    </Button>
                    <Button variant="glass" size="sm">
                      <Github className="h-3 w-3" />
                    </Button>
                    <Button variant="glass" size="sm">
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </HolographicCard>
            </motion.div>
          ))}
        </div>

        {/* Load More Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="holographic" size="lg">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  )
}