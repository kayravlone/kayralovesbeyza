"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PhotoProvider, PhotoView } from "react-photo-view"
import "react-photo-view/dist/react-photo-view.css"

const photos = [
  {
    src: "https://via.placeholder.com/400x600",
    caption: "Our first date at the park",
  },
  {
    src: "https://via.placeholder.com/400x600",
    caption: "That time we went to the beach",
  },
  {
    src: "https://via.placeholder.com/400x600",
    caption: "Our favorite coffee shop",
  },
  {
    src: "https://via.placeholder.com/400x600",
    caption: "The day we adopted our pet",
  },
]

function PhotoStory({ onComplete }) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

  const nextPhoto = () => {
    if (currentPhotoIndex < photos.length - 1) {
      setCurrentPhotoIndex(currentPhotoIndex + 1)
    } else {
      onComplete()
    }
  }

  const prevPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex))
  }

  return (
    <div className="photo-story">
      <PhotoProvider>
        <div className="photo-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPhotoIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <PhotoView src={photos[currentPhotoIndex].src}>
                <img
                  src={photos[currentPhotoIndex].src || "/placeholder.svg"}
                  alt={`Photo ${currentPhotoIndex + 1}`}
                  className="photo"
                />
              </PhotoView>
            </motion.div>
          </AnimatePresence>
          <motion.p
            className="caption"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {photos[currentPhotoIndex].caption}
          </motion.p>
        </div>
      </PhotoProvider>
      <div className="navigation">
        <button onClick={prevPhoto} disabled={currentPhotoIndex === 0}>
          Previous
        </button>
        <button onClick={nextPhoto}>{currentPhotoIndex === photos.length - 1 ? "Finish" : "Next"}</button>
      </div>
    </div>
  )
}

export default PhotoStory

