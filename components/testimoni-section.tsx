"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"

const testimonials = [
  {
    id: 1,
    name: "Michael Thompson",
    title: "Private Customer",
    location: "Birmingham Resident",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Toronto_City_Councillor_Michael_Thompson_%28cropped%29.jpg/640px-Toronto_City_Councillor_Michael_Thompson_%28cropped%29.jpg",
    rating: 5,
    testimonial:
      "Broke down on the M6 at 2 AM and they were there within 20 minutes. Professional, friendly, and got me back on the road quickly. Highly recommend!",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    title: "Business Owner",
    location: "Manchester Resident",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Sarah_Pitlyk_in_2007_%28584067418%29_%28cropped%29.jpg/640px-Sarah_Pitlyk_in_2007_%28584067418%29_%28cropped%29.jpg",
    rating: 5,
    testimonial:
      "Excellent service when my delivery van broke down. Quick response time and very reasonable prices. Will definitely use again!",
  },
  {
    id: 3,
    name: "David Wilson",
    title: "Private Customer",
    location: "London Resident",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Official_portrait_of_Lord_Wilson_of_Tillyorn_crop_3.jpg/640px-Official_portrait_of_Lord_Wilson_of_Tillyorn_crop_3.jpg",
    rating: 5,
    testimonial:
      "Outstanding customer service! They kept me informed throughout the entire process and handled my car with great care.",
  },
]

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000) // Change testimonial every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentTestimonial]

  return (
    <section className="py-20 px-4 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center px-6 py-3 bg-orange-50 border border-orange-200 text-orange-600 rounded-full text-sm font-medium mb-8"
        >
          <div className="w-2 h-2 bg-orange-500 rounded-full mr-2" />
          What Our Customers Say
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 tracking-tight"
        >
          Don't Just Take Our Word For It
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 bg-clip-text text-transparent mb-6"
        >
          Hear From Our Satisfied Customers
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="text-slate-600 text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Real experiences from real customers who trusted us with their vehicle recovery needs
        </motion.p>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-lg max-w-3xl mx-auto mb-8 hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute top-6 left-6 text-orange-200">
              <Quote className="w-8 h-8" />
            </div>

            <div className="flex justify-center mb-8">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-7 h-7 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            <blockquote className="text-xl md:text-2xl text-slate-700 italic mb-10 leading-relaxed font-light">
              "{current.testimonial}"
            </blockquote>

            <div className="flex items-center justify-center gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
                <img src={current.image || "/placeholder.svg"} alt={current.name} className="w-16 h-16 rounded-full" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-slate-900 text-xl mb-1">{current.name}</div>
                <div className="text-slate-600 text-sm">{current.title}</div>
                <div className="text-orange-500 text-sm font-medium">{current.location}</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
          className="flex items-center justify-center gap-6"
        >
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="rounded-full border-slate-300 hover:bg-slate-50 text-slate-600 hover:text-orange-500 transition-all duration-300 w-12 h-12 bg-transparent"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <div className="flex gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? "bg-orange-500 shadow-md scale-125" : "bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="rounded-full border-slate-300 hover:bg-slate-50 text-slate-600 hover:text-orange-500 transition-all duration-300 w-12 h-12 bg-transparent"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
