"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Truck, Wrench, Phone, Shield, MapPin, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { useRef } from "react"

const services = [
  {
    icon: Truck,
    title: "Vehicle Transportation",
    description:
      "Professional vehicle transportation services for cars, motorcycles, and commercial vehicles across the region.",
    features: ["Long Distance Transport", "Secure Loading", "Insurance Coverage"],
    image: "/modern-tow-truck-transporting-car-on-highway.png",
  },
  {
    icon: Wrench,
    title: "Roadside Assistance",
    description: "Comprehensive roadside support including jump starts, tire changes, and emergency repairs.",
    features: ["Battery Jump Start", "Tire Replacement", "Emergency Repairs"],
    image: "/mechanic-providing-roadside-assistance-to-modern-c.png",
  },
  {
    icon: Phone,
    title: "Emergency Recovery",
    description: "24/7 emergency vehicle recovery service with rapid response times and professional handling.",
    features: ["24/7 Availability", "Rapid Response", "Professional Team"],
    image: "/emergency-vehicle-recovery-truck-at-night-with-blu.png",
  },
  {
    icon: Shield,
    title: "Accident Recovery",
    description: "Specialized accident recovery services with careful handling of damaged vehicles.",
    features: ["Damage Assessment", "Secure Recovery", "Insurance Liaison"],
    image: "/professional-accident-recovery-team-with-modern-eq.png",
  },
  {
    icon: MapPin,
    title: "Local & Long Distance",
    description: "Complete coverage for both local pickups and long-distance vehicle transportation.",
    features: ["Local Coverage", "Interstate Transport", "GPS Tracking"],
    image: "/vehicle-transport-truck-on-modern-highway-with-gps.png",
  },
]

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(2) 
  const phoneNumber = "+447475365247"

  const headerRef = useRef(null)
  const cardsRef = useRef(null)
  const detailsRef = useRef(null)

  const headerInView = useInView(headerRef, { once: true, margin: "-100px" })
  const cardsInView = useInView(cardsRef, { once: true, margin: "-100px" })
  const detailsInView = useInView(detailsRef, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          className="text-center mb-5"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
            <span className="text-sm text-blue-600 font-medium">What We Do</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)] text-gray-900">
            Professional <span className="text-blue-600">Vehicle Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
            Comprehensive vehicle transportation and recovery services with modern equipment, professional team, and
            24/7 availability across the West Midlands.
          </p>
        </motion.div>

        <motion.div
          ref={cardsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeIn", delay: 0.2 }}
          className="relative max-w-6xl mx-auto h-[500px] flex items-center justify-center"
        >
          <div className="relative w-full flex items-center justify-center">
            {services.map((service, index) => {
              const isActive = index === activeIndex
              const offset = index - activeIndex

              return (
                <div
                  key={index}
                  className="absolute transition-all duration-700 ease-out cursor-pointer"
                  style={{
                    transform: `
                      translateX(${offset * 120}px) 
                      translateY(${Math.abs(offset) * 20}px)
                      scale(${isActive ? 1 : 0.85 - Math.abs(offset) * 0.1})
                    `,
                    zIndex: services.length - Math.abs(offset),
                    opacity: Math.abs(offset) > 2 ? 0 : 1 - Math.abs(offset) * 0.2,
                  }}
                  onClick={() => setActiveIndex(index)}
                >
                  <Card className="w-[330px] bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 flex flex-col p-0">
                    <div className="relative w-full h-48">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover object-center"
                        sizes="100%"
                      />
                      <div className="absolute top-4 right-4 w-10 h-10 bg-black/10 backdrop-blur-md rounded-lg flex items-center justify-center">
                        <service.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed flex-1">{service.description}</p>
                    </div>
                  </Card>
                </div>
              )
            })}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            ref={detailsRef}
            key={activeIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={detailsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeIn", delay: 0.4 }}
            className="text-center mt-16 max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{services[activeIndex].title}</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">{services[activeIndex].description}</p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {services[activeIndex].features.map((feature, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-sm text-gray-700"
                >
                  {feature}
                </span>
              ))}
            </div>
            <a href={`tel:${phoneNumber}`}>
              <Button className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-3 rounded-full font-semibold transition-all duration-300">
                Get Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center mt-12 gap-2">
          {services.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-gray-900 w-8" : "bg-gray-400 hover:bg-gray-600"
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
