"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PhotoProvider, PhotoView } from "react-photo-view"
import { IoHomeOutline } from "react-icons/io5"
import "react-photo-view/dist/react-photo-view.css"

const photos = [
  {
    src: "/1.jpeg",
    caption: "İlk fotoğraf çekildiğimiz gün",
  },
  { 
    src: "2.jpeg",
    caption: "İkimizin en beğendiğim fotoğrafı",
  },
  {
    src: "3.jpeg",
    caption: "Evlere gittiğimiz gün :((",
  },
  {
    src: "4.jpeg",
    caption: "Yeni yeni İstanbul'a gezmeye gittiğimiz gün",
  },
  {
    src: "5.jpeg",
    caption: "Yorucu ama güzel olan Kadıköy macerasııı",
  },
  {
    src: "6.jpeg",
    caption: "Pizza ve gün batımını izlediğimiz gün",
  },
  {
    src: "7.jpeg",
    caption: "Beraber geçirdiğimzi İlk yılbaşımızz",
  },
  {
     src: "18.jpeg",
     caption: "Sen tatlı yaparken bende kendi tatlımı izlerkenn",
   },
  {
    src: "8.jpeg",
    caption: "Caddebostan'a gittiğimiz gün",
  },
  {
    src: "9.jpeg",
    caption: "Senden uzaklaştığım için sevmediğim günlerden biri... ",
  },
  {
    src: "10.jpeg",
    caption: "FaceTime zamanıı",
  },
  {
    src: "11.jpeg",
    caption: "Yine çok güzel çıktığın bir fotoğraf daha ",
  },
   {
     src: "12.jpeg",
     caption: "Soğukta donduğumuz gün",
   },
   {
     src: "13.jpeg",
     caption: "Üsküdarda aşkıma 2. çiçek vakası",
   },
   {
     src: "14.jpeg",
     caption: "Tüm çiçeklerden güzel olduğun için ne alacağımı bilemediğim bir gün..",
   },
   {
     src: "15.jpeg",
     caption: "İstanbul'daki en güzel manzaramı çekerken",
   },
   {
     src: "16.jpeg",
     caption: "Seninle ne kadar vakit geçirsem doyamadığım bir gün daha",
   },
   {
     src: "17.jpeg",
     caption: "Tatlı yedim ama doyamıyorum napıyımmm",
   },
   
  // {
  //   src: "19.jpeg",
  //   caption: "The surprise birthday party",
  // },
  // {
  //   src: "20.jpeg",
  //   caption: "Our karaoke night",
  // },
  // {
  //   src: "21.jpeg",
  //   caption: "The day we made promises",
  // },
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
          Önceki hikayemiz
        </motion.button>
        <motion.button
          onClick={nextPhoto}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {currentPhotoIndex === photos.length - 1 ? "Seni çok seviyorum sevgilim ❤️" : "Sonraki hikayemiz"}
        </motion.button>
      </div>
    </div>
  )
}

export default PhotoStory

