import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TypingAnimationProps {
  text: string
  speed?: number
  className?: string
  onComplete?: () => void
}

export default function TypingAnimation({ 
  text, 
  speed = 50, 
  className = "",
  onComplete 
}: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    } else {
      onComplete?.()
    }
  }, [currentIndex, text, speed, onComplete])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <motion.span 
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayText}
      <span className={`inline-block w-0.5 h-6 ml-1 ${showCursor ? 'bg-primary' : 'bg-transparent'} transition-colors duration-100`} />
    </motion.span>
  )
}