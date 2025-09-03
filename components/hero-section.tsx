"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, Eye, Shield } from "lucide-react"
import AnimatedButton from "./customs/AnimatedButton"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        poster="/bg/bgimages.png"
      >
        <source src="/bg/bgvids.mp4" type="video/mp4" />
        <source src="https://vrsrecovery.netlify.app/bg/bgvids.mp4" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-gray-900/10 to-gray-900/90" />

      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-orange-500/20 border border-orange-500/30 mb-6 sm:mb-8 backdrop-blur-sm glow-effect"
          >
            <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500 mr-2" />
            <span className="text-xs sm:text-sm text-white font-semibold">
              Trusted Since 2015 • 24/7 Emergency Service
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white font-bold mb-4 sm:mb-6 font-[family-name:var(--font-space-grotesk)] text-balance leading-tight"
          >
            When You're <span className="text-orange-500">Stuck,</span>
            <br />
            <span className="text-white" style={{ textShadow: "0 0 30px rgba(249, 115, 22, 0.5)" }}>
              We're Your <span className="text-orange-500">Lifeline</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-4xl mx-auto text-pretty font-[family-name:var(--font-dm-sans)] leading-relaxed px-2 sm:px-0"
          >
            Professional vehicle recovery and roadside assistance across the West Midlands. Fast response, fair pricing,
            and the expertise to get you back on the road safely.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4 sm:px-0"
          >
            <AnimatedButton
              variant="primary"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-2 text-base sm:text-lg"
            >
              <Phone className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              <Link href="tel:+447475365247">Call Now - Free Quote</Link>
            </AnimatedButton>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-sm sm:text-md px-6 sm:px-8 py-3 sm:py-4 bg-gray-800/80 hover:bg-gray-700/80 text-white border-gray-600 hover:border-gray-500 shadow-lg backdrop-blur-sm transition-all duration-300 group"
            >
              <Eye className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              <Link href="#services">View Our Services</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
      >
        <Button
          size="lg"
          className="rounded-full w-12 h-12 sm:w-14 sm:h-14 bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-green-500/25 transition-all duration-300"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
        </Button>
      </motion.div> */}
    </section>
  )
}
