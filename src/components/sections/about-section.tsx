import { motion } from 'framer-motion'
import HolographicCard from '@/components/ui/holographic-card'
import { Button } from '@/components/ui/button'
import { Brain, Code, Palette, Zap } from 'lucide-react'

export default function AboutSection() {
  const skills = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Artificial Intelligence",
      description: "Machine learning algorithms, neural networks, and data science",
      progress: 88
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Programming", 
      description: "Python, JavaScript, SQL, C++, Java and modern frameworks",
      progress: 90
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Web Development",
      description: "Modern web technologies and responsive design",
      progress: 85
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Blockchain",
      description: "Smart contracts, cryptocurrency, and decentralized systems",
      progress: 75
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
            I'm a Computer Applications graduate specializing in Artificial Intelligence with 
            strong skills in software development and data science.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bio Card */}
          <HolographicCard delay={0.2} hoverable={false}>
            <div className="space-y-6">
              <div className="w-16 h-16 bg-gradient-holographic rounded-full flex items-center justify-center mb-6">
                <Brain className="h-8 w-8 text-background" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">CS Graduate & AI Enthusiast</h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I specialize in artificial intelligence and software development, with 
                  experience in machine learning algorithms, web applications, and 
                  blockchain technologies.
                </p>
                <p>
                  Passionate about applying innovative technologies to solve real-world 
                  problems, with published research in financial fraud detection using 
                  neural networks.
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