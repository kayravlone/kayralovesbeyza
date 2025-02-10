import { motion } from "framer-motion"

function LandingPage({ onExplore }) {
  return (
    <motion.div
      className="landing-page"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Do you want to explore my love for you?</h1>
      <button onClick={onExplore}>Explore</button>
    </motion.div>
  )
}

export default LandingPage

