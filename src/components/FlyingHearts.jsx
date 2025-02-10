"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const Heart = ({ x, y }) => (
  <motion.div
    className="heart"
    initial={{ x, y, scale: 0 }}
    animate={{
      y: -window.innerHeight,
      scale: [0, 1, 0.5, 1],
      rotate: [0, 45, -45, 0],
    }}
    transition={{
      duration: Math.random() * 2 + 3,
      ease: "easeOut",
      times: [0, 0.2, 0.5, 1],
    }}
    style={{ fontSize: `${Math.random() * 20 + 10}px` }}
  >
    ❤️
  </motion.div>
)

function FlyingHearts() {
  const [hearts, setHearts] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prevHearts) => [
        ...prevHearts,
        {
          id: Date.now(),
          x: Math.random() * window.innerWidth,
          y: window.innerHeight,
        },
      ])
    }, 300)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flying-hearts">
      {hearts.map((heart) => (
        <Heart key={heart.id} x={heart.x} y={heart.y} />
      ))}
    </div>
  )
}

export default FlyingHearts

