"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Script from "next/script"

export function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 px-4 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto text-center">
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
          Verified Reviews From Real Customers
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="text-slate-600 text-lg mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Integrated directly with Google, Facebook, and more via Elfsight.
        </motion.p>

        {/* Embed Elfsight Reviews */}
        <div className="relative">
          <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
          <div
            className="elfsight-app-41624caf-0019-4cbb-bd86-5e2dc4a1290a"
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>
    </section>
  )
}
