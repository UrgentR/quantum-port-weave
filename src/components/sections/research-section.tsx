import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import HolographicCard from '@/components/ui/holographic-card'
import { ExternalLink, FileText, Users } from 'lucide-react'

const researchPapers = [
  {
    title: "Neural Networks for Financial Fraud Detection: Enhancing Security with Scalable Machine Learning and Deep Learning Solutions",
    journal: "IEEE Xplore",
    year: "2025",
    authors: "Nuthan M C, et al.",
    abstract: "Published research on scalable deep learning methods for financial fraud detection. Exploring enhanced security approaches using neural network architectures for real-time fraud prevention in financial systems.",
    tags: ["Neural Networks", "Financial Security", "Machine Learning", "Deep Learning"],
    link: "#",
    citations: 0
  }
]

export default function ResearchSection() {
  return (
    <section id="research" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Research & Publications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contributing to the advancement of technology through rigorous research and peer-reviewed publications.
          </p>
        </motion.div>

        <div className="space-y-8">
          {researchPapers.map((paper, index) => (
            <HolographicCard key={index} delay={index * 0.1} className="group" hoverable={false}>
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {paper.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{paper.citations} citations</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                    <span className="font-medium">{paper.journal}</span>
                    <span>•</span>
                    <span>{paper.year}</span>
                    <span>•</span>
                    <span>{paper.authors}</span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {paper.abstract}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {paper.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <motion.a
                    href={paper.link}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted/50 transition-colors text-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FileText className="w-4 h-4" />
                    View Paper
                  </motion.a>
                  <motion.a
                    href={paper.link}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted/50 transition-colors text-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Citation
                  </motion.a>
                </div>
              </div>
            </HolographicCard>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <HolographicCard className="text-center" hoverable={false}>
              <div className="text-3xl font-bold text-primary mb-2">1</div>
              <p className="text-muted-foreground">Publications</p>
            </HolographicCard>
            <HolographicCard className="text-center" hoverable={false}>
              <div className="text-3xl font-bold text-primary mb-2">0</div>
              <p className="text-muted-foreground">Citations</p>
            </HolographicCard>
            <HolographicCard className="text-center" hoverable={false}>
              <div className="text-3xl font-bold text-primary mb-2">2025</div>
              <p className="text-muted-foreground">Research Year</p>
            </HolographicCard>
          </div>
        </motion.div>
      </div>
    </section>
  )
}