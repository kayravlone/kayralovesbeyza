"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const Timer = ({ targetDate, onReturnHome }) => {
  const [timeElapsed, setTimeElapsed] = useState({ years: 0, months: 0, days: 0, seconds: 0 })

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date()
      const target = new Date(targetDate)
      const difference = now.getTime() - target.getTime()

      const seconds = Math.floor(difference / 1000)
      const days = Math.floor(seconds / (3600 * 24))
      const months = Math.floor(days / 30.44) // Average days in a month
      const years = Math.floor(months / 12)

      setTimeElapsed({
        years,
        months: months % 12,
        days: days % 30,
        seconds: seconds % 60,
      })
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <motion.div
      className="timer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <h2>I love you</h2>
      <p>
        {timeElapsed.years} years {timeElapsed.months} months {timeElapsed.days} days {timeElapsed.seconds} seconds
      </p>
      
      <button 
        onClick={onReturnHome}
        className="return-home-btn"
      >
        Ana Sayfaya Dön
      </button>
    </motion.div>
  )
}

export default Timer

