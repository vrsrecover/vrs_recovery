"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const fileNames = [
  "gal1.jpg", "gal2.jpg", "gal3.jpg", "gal4.jpg", "gal5.jpg",
  "gal6.jpg", "gal7.jpg", "gal8.jpg", "gal9.jpg", "gal10.jpg",
  "gal11.jpg", "gal12.jpg", "gal13.jpg", "gal14.jpg", "gal15.jpg",
  "gal16.png", "gal17.jpg", "gal18.jpg", "gal19.png", "gal20.png",
  "gal21.png", "gal22.jpg", "gal23.png", "gal24.png", "gal25.jpeg",
]

const galleryImages = fileNames.map((file, i) => {
  const isVideo = file.endsWith(".mp4") || file.endsWith(".mov") || file.endsWith(".webm")
  return {
    id: i + 1,
    src: `/gallery/${file}`,
    type: isVideo ? "video" : "image",
    title: `Recovery Operation ${i + 1}`,
    description: "Professional vehicle recovery service showcasing our expertise and modern equipment.",
    category: i % 3 === 0 ? "Emergency Recovery" : i % 3 === 1 ? "Roadside Assistance" : "Vehicle Mechanics",
  }
})

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [filter, setFilter] = useState<string>("All")

  const categories = ["All", "Emergency Recovery", "Roadside Assistance", "Vehicle Mechanics"]

  const filteredImages =
    filter === "All" ? galleryImages : galleryImages.filter((img) => img.category === filter)

  const openModal = (imageId: number) => setSelectedImage(imageId)
  const closeModal = () => setSelectedImage(null)

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return
    const currentIndex = galleryImages.findIndex((img) => img.id === selectedImage)
    let newIndex =
      direction === "prev"
        ? currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1
        : currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0
    setSelectedImage(galleryImages[newIndex].id)
  }

  const selectedImageData = selectedImage
    ? galleryImages.find((img) => img.id === selectedImage)
    : null

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-200 border border-green-300 mb-6">
            <div className="w-2 h-2 bg-green-300 rounded-full mr-2" />
            <span className="text-sm text-green-800 font-medium">Galleries</span>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
            Explore our professional vehicle recovery and roadside assistance services through our
            comprehensive gallery showcasing real operations and satisfied customers.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className="px-6 py-2 rounded-full transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredImages.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
                onClick={() => openModal(item.id)}
              >
                <div className="relative overflow-hidden rounded-lg bg-card border border-border shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    {item.type === "video" ? (
                      <video
                        src={item.src}
                        muted
                        loop
                        autoPlay
                        playsInline
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <motion.img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        whileHover={{ scale: 1.05 }}
                      />
                    )}
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-popover/80 flex items-center justify-center transition-opacity duration-300"
                  >
                    <div className="text-center p-6">
                      <h3 className="text-xl font-semibold text-popover-foreground mb-2 font-sans">{item.title}</h3>
                      <p className="text-sm text-popover-foreground/80 mb-3 font-sans">{item.description}</p>
                      <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs rounded-full font-sans">
                        {item.category}
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      <AnimatePresence>
        {selectedImage && selectedImageData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full bg-background rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-background/80 hover:bg-background"
                onClick={closeModal}
              >
                <X className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background"
                onClick={() => navigateImage("prev")}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background"
                onClick={() => navigateImage("next")}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
              <div className="aspect-[16/10] overflow-hidden bg-black">
                {selectedImageData.type === "video" ? (
                  <video
                    src={selectedImageData.src}
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <img
                    src={selectedImageData.src}
                    alt={selectedImageData.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-foreground font-sans">{selectedImageData.title}</h3>
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full font-sans">
                    {selectedImageData.category}
                  </span>
                </div>
                <p className="text-muted-foreground mb-6 font-sans">{selectedImageData.description}</p>
                <div className="flex gap-4">
                  <Button className="flex-1">Learn More</Button>
                  <Button variant="outline">Contact Us</Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
