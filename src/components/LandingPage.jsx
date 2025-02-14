import { motion } from "framer-motion"

function LandingPage({ onExplore }) {
  return (
    <motion.div
      className="landing-page"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>"Kelimelerle tarif edilemeyecek güzelime hazırlandı❤️"</h1>
      <h1>Hazırsan başlayalım aşkım</h1>
      <button onClick={onExplore}>Beni dünyanın en güzel çiftinin hikayesine götür.</button>
    </motion.div>
  )
}

export default LandingPage

