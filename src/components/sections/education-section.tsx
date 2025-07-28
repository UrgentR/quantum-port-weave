import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import HolographicCard from '@/components/ui/holographic-card'
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react'

const education = [
  {
    degree: "Ph.D. in Computer Science",
    institution: "Stanford University",
    location: "Stanford, CA",
    duration: "2018 - 2022",
    gpa: "3.9/4.0",
    thesis: "Advanced Machine Learning Algorithms for Distributed Systems",
    advisor: "Dr. Sarah Johnson",
    achievements: [
      "Stanford Graduate Fellowship Recipient",
      "Best Dissertation Award 2022",
      "Published 8 peer-reviewed papers during PhD"
    ],
    coursework: ["Advanced Algorithms", "Machine Learning Theory", "Distributed Systems", "Quantum Computing"]
  },
  {
    degree: "Master of Science in Software Engineering",
    institution: "MIT",
    location: "Cambridge, MA", 
    duration: "2016 - 2018",
    gpa: "3.85/4.0",
    thesis: "Scalable Web Architectures for High-Traffic Applications",
    advisor: "Dr. Michael Chen",
    achievements: [
      "Dean's List for Academic Excellence",
      "Outstanding Graduate Student Award",
      "Teaching Assistant for Advanced Algorithms"
    ],
    coursework: ["Software Architecture", "Database Systems", "Web Technologies", "System Design"]
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of California, Berkeley",
    location: "Berkeley, CA",
    duration: "2012 - 2016",
    gpa: "3.7/4.0",
    thesis: "Mobile Application Development for Social Networks",
    advisor: "Dr. Emily Rodriguez",
    achievements: [
      "Magna Cum Laude Graduate",
      "ACM Student Chapter President",
      "Hackathon Winner - Cal Hacks 2015"
    ],
    coursework: ["Data Structures", "Computer Networks", "Mobile Development", "Human-Computer Interaction"]
  }
]

const certifications = [
  {
    name: "AWS Solutions Architect Professional",
    issuer: "Amazon Web Services",
    year: "2023",
    icon: "🏆"
  },
  {
    name: "Google Cloud Professional Cloud Architect",
    issuer: "Google Cloud",
    year: "2023",
    icon: "☁️"
  },
  {
    name: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    year: "2022",
    icon: "🎯"
  },
  {
    name: "Machine Learning Engineering Certification",
    issuer: "Coursera - Stanford",
    year: "2021",
    icon: "🤖"
  }
]

export default function EducationSection() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A strong academic foundation combined with continuous learning and professional development.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="space-y-12 mb-20">
          {education.map((edu, index) => (
            <HolographicCard key={index} delay={index * 0.1} className="relative">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {edu.duration}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                  <p className="text-primary font-semibold mb-1">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mb-3">{edu.location}</p>
                  <div className="text-sm">
                    <span className="font-medium">GPA:</span> <span className="text-primary">{edu.gpa}</span>
                  </div>
                </div>
                
                <div className="lg:w-2/3 space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      Thesis
                    </h4>
                    <p className="text-muted-foreground italic">"{edu.thesis}"</p>
                    <p className="text-sm text-muted-foreground mt-1">Advisor: {edu.advisor}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      Achievements
                    </h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Key Coursework</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <Badge key={courseIndex} variant="outline" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </HolographicCard>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Professional Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <HolographicCard key={index} delay={index * 0.1} className="text-center group">
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {cert.name}
                </h4>
                <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                <p className="text-xs text-primary font-medium">{cert.year}</p>
              </HolographicCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}