"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PhotoProvider, PhotoView } from "react-photo-view"
import { IoHomeOutline } from "react-icons/io5"
import "react-photo-view/dist/react-photo-view.css"

const photos = [
  {
    src: "/1.jpeg",
    caption: "Our first date at the park",
  },
  { 
    src: "2.jpeg",
    caption: "That time we went to the beach",
  },
  {
    src: "3.jpeg",
    caption: "Our favorite coffee shop",
  },
  {
    src: "4.jpeg",
    caption: "The day we adopted our pet",
  },
  {
    src: "5.jpeg",
    caption: "Our first movie night together",
  },
  {
    src: "6.jpeg",
    caption: "That beautiful sunset we watched",
  },
  {
    src: "7.jpeg",
    caption: "Our first dinner date",
  },
  {
    src: "8.jpeg",
    caption: "The day we went hiking",
  },
  {
    src: "9.jpeg",
    caption: "Our ice cream adventure",
  },
  {
    src: "10.jpeg",
    caption: "Dancing in the rain",
  },
  {
    src: "11.jpeg",
    caption: "Our first holiday together",
  },
  {
    src: "12.jpeg",
    caption: "That picnic in the park",
  },
  {
    src: "13.jpeg",
    caption: "Star gazing night",
  },
  {
    src: "14.jpeg",
    caption: "Our cooking experiment",
  },
  {
    src: "15.jpeg",
    caption: "The carnival date",
  },
  {
    src: "16.jpeg",
    caption: "Our first road trip",
  },
  {
    src: "17.jpeg",
    caption: "That time we went bowling",
  },
  {
    src: "18.jpeg",
    caption: "Our garden project",
  },
  {
    src: "19.jpeg",
    caption: "The surprise birthday party",
  },
  {
    src: "20.jpeg",
    caption: "Our karaoke night",
  },
  {
    src: "21.jpeg",
    caption: "The day we made promises",
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
      <motion.button
        className="home-button"
        onClick={onComplete}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          padding: '8px',
          borderRadius: '50%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '40px',
          height: '40px'
        }}
      >
        <IoHomeOutline size={20} />
      </motion.button>

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
        <motion.button
          onClick={prevPhoto}
          disabled={currentPhotoIndex === 0}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          Previous
        </motion.button>
        <motion.button
          onClick={nextPhoto}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {currentPhotoIndex === photos.length - 1 ? "Finish" : "Next"}
        </motion.button>
      </div>
    </div>
  )
}

export default PhotoStory

