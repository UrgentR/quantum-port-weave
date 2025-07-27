import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface HolographicCardProps {
  children: ReactNode
  className?: string
  delay?: number
  hoverable?: boolean
}

export default function HolographicCard({ 
  children, 
  className = "", 
  delay = 0,
  hoverable = true 
}: HolographicCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        rotateX: 0,
      }}
      transition={{ 
        duration: 0.8, 
        delay,
        type: "spring",
        damping: 25,
        stiffness: 300
      }}
      whileHover={hoverable ? { 
        y: -10, 
        rotateX: 5,
        transition: { duration: 0.3 }
      } : undefined}
      className={cn(
        "glass holographic-border rounded-xl p-6 floating",
        "transform-gpu perspective-1000",
        "shadow-elevated hover:shadow-glow-holographic",
        "transition-all duration-300 ease-smooth",
        className
      )}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Holographic overlay effect */}
      <div className="absolute inset-0 rounded-xl opacity-20 bg-gradient-holographic blur-sm" />
      
      {/* Neural glow border */}
      <div className="absolute inset-0 rounded-xl border border-primary/20 neural-glow" />
    </motion.div>
  )
}