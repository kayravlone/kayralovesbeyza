"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import LandingPage from "./components/LandingPage"
import PhotoStory from "./components/PhotoStory"
import Timer from "./components/Timer"
import FlyingHearts from "./components/FlyingHearts"
import "./App.css"

function App() {
  const [currentScreen, setCurrentScreen] = useState("landing")

  const handleExplore = () => setCurrentScreen("photoStory")
  const handlePhotoStoryComplete = () => setCurrentScreen("timer")
  const handleReturnHome = () => setCurrentScreen("landing")

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {currentScreen === "landing" && (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FlyingHearts />
            <LandingPage onExplore={handleExplore} />
          </motion.div>
        )}
        {currentScreen === "photoStory" && (
          <motion.div
            key="photo-story"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <PhotoStory onComplete={handlePhotoStoryComplete} />
          </motion.div>
        )}
        {currentScreen === "timer" && (
          <motion.div
            key="timer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Timer targetDate="2023-03-07" onReturnHome={handleReturnHome} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App

