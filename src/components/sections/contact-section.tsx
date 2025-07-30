import { motion } from 'framer-motion'
import HolographicCard from '@/components/ui/holographic-card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, MessageSquare, Phone, MapPin, Send } from 'lucide-react'

export default function ContactSection() {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "nuthanmc4@gmail.com",
      description: "Get in touch via email"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+91 9353671680",
      description: "Call for urgent inquiries"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Chikkamagaluru",
      description: "Available for remote work"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Website",
      value: "yourwebsite.com",
      description: "Visit my portfolio"
    }
  ]

  return (
    <section id="contact" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 quantum-text font-mono">
            Contact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate? Let's discuss opportunities in AI, machine learning, or software development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-6"
            >
              Get In Touch
            </motion.h3>
            
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <HolographicCard delay={index * 0.1} hoverable={false}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-neural rounded-lg flex items-center justify-center neural-glow">
                      {method.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold">{method.title}</h4>
                      <p className="text-primary font-mono text-sm">{method.value}</p>
                      <p className="text-xs text-muted-foreground">{method.description}</p>
                    </div>
                  </div>
                </HolographicCard>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <HolographicCard delay={0.3}>
              <form className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Send Message</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name</label>
                    <Input 
                      placeholder="Your name"
                      className="glass border-primary/20 focus:border-primary/40"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input 
                      type="email"
                      placeholder="your@email.com"
                      className="glass border-primary/20 focus:border-primary/40"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input 
                    placeholder="Project inquiry"
                    className="glass border-primary/20 focus:border-primary/40"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="glass border-primary/20 focus:border-primary/40"
                  />
                </div>

                <Button variant="holographic" size="lg" className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </HolographicCard>
          </motion.div>
        </div>

        {/* Status Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-border"
        >
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground font-mono">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-neural-glow rounded-full animate-pulse" />
              <span>Available for new projects</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>Response within 24h</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}