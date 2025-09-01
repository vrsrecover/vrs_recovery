"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield, Clock, MapPin, Phone } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import AnimatedButton from "./customs/AnimatedButton"

export function AboutSection() {
  const phoneNumber = "+447475365247"
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
            >
              We've Been Getting People Back on the Road Since 2015
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Started by two mechanics who got tired of seeing people stranded. Now we're the West Midlands' most
              trusted recovery service.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Story Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="lg:col-span-2 bg-white rounded-xl p-8 shadow-sm border border-gray-300"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-900">Our Story</h3>
              <p className="text-gray-600 mb-4">
                It all started when Dave's mate got stuck on the M54 at 2am with a blown engine. The recovery company
                quoted him £400 and said they'd be there "sometime tomorrow." That didn't sit right with us.
              </p>
              <p className="text-gray-600 mb-6">
                So we bought our first truck, got properly licensed, and made a promise: fair prices, fast response, and
                we actually answer our phone. Ten years later, we've helped over 15,000 drivers get home safely.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-600">
                  <div className="text-2xl font-bold text-blue-600">15,000+</div>
                  <div className="text-sm font-semibold text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-600">
                  <div className="text-2xl font-bold text-orange-600">24/7</div>
                  <div className="text-sm text-semibold text-gray-600">Always Available</div>
                </div>
              </div>
            </motion.div>

            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-8 text-white"
            >
              <h3 className="text-xl font-semibold mb-6">Need Help Right Now?</h3>

              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-orange-300" />
                  <div>
                    <div className="font-semibold">07475 365247</div>
                    <div className="text-sm text-blue-100">24/7 Emergency Line</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-orange-300" />
                  <div>
                    <div className="font-semibold">Average Response</div>
                    <div className="text-sm text-blue-100">25 minutes or less</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-orange-300" />
                  <div>
                    <div className="font-semibold">Coverage Area</div>
                    <div className="text-sm text-blue-100">All of West Midlands</div>
                  </div>
                </div>
              </div>

              <Link href={`tel:${phoneNumber}`}>
                <AnimatedButton 
                  variant="primary"
                  className="w-full text-white border-0">
                  Call Now for Help
                </AnimatedButton>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="bg-white rounded-xl p-8 shadow-sm border border-gray-200"
          >
            <h3 className="text-xl font-semibold mb-6 text-center text-gray-900">What Makes Us Different</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-2 text-gray-900">No Hidden Fees</h4>
                <p className="text-sm text-gray-600">
                  The price we quote is the price you pay. No surprises, no extras for "difficult access" or time of
                  day.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <h4 className="font-semibold mb-2 text-gray-900">Actually Fast</h4>
                <p className="text-sm text-gray-600">
                  We don't just say "we'll be there soon." We give you a real time and stick to it. Usually under 30
                  minutes.
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold mb-2 text-gray-900">Real People</h4>
                <p className="text-sm text-gray-600">
                  When you call, you talk to Dave or one of the team. No call centers, no automated menus, just help.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
