"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Send, Sparkles, Locate, AlertCircle } from "lucide-react"
import { motion, useInView } from "framer-motion"

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    pickup: "",
    dropoff: "",
    fault: "",
    passengers: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [locationError, setLocationError] = useState<string | null>(null)
  const [isLocating, setIsLocating] = useState(false)

  const detectLocation = () => {
    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by your browser")
      return
    }

    setIsLocating(true)
    setLocationError(null)

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const { latitude, longitude } = pos.coords
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
          )
          const data = await res.json()
          const address = data.display_name || `${latitude.toFixed(6)},${longitude.toFixed(6)}`
          setFormData((prev) => ({ ...prev, pickup: address }))
          setLocationError(null)
        } catch (err) {
          console.error("Location fetch failed:", err)
          setLocationError("Failed to get address from coordinates")
        } finally {
          setIsLocating(false)
        }
      },
      (err) => {
        console.warn("Location access denied", err)
        setIsLocating(false)
        
        switch (err.code) {
          case err.PERMISSION_DENIED:
            setLocationError("Location access denied. Please enable location permissions in your browser settings.")
            break
          case err.POSITION_UNAVAILABLE:
            setLocationError("Location information is unavailable.")
            break
          case err.TIMEOUT:
            setLocationError("Location request timed out.")
            break
          default:
            setLocationError("An unknown error occurred.")
            break
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
      }
    )
  }

  useEffect(() => {
    if (navigator.geolocation && navigator.permissions) {
      navigator.permissions.query({ name: 'geolocation' }).then((result) => {
        if (result.state === 'granted') {
          detectLocation()
        } else if (result.state === 'prompt') {
          detectLocation()
        }
        // If 'denied', don't attempt automatically
      })
    }
  }, [])

  // useEffect(() => {
  //   detectLocation()
  // }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form processing
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const { name, email, pickup, dropoff, fault, passengers, service, message } = formData

    const text = ` *New Recovery Request* 
                      *Name:* ${name}
                      *Email:* ${email}
                      *Pickup Location:* ${pickup}
                      *Drop-off Location:* ${dropoff}
                      *Fault:* ${fault}
                      *Passengers:* ${passengers}
                      *Service Needed:* ${service}
                      *Message:* ${message}`

    const phoneNumber = "447475365247"
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`
    window.open(url, "_blank")
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      desc: "Call us directly",
      content: "07475 365247",
      sub: "Emergency: 07475 365247",
      gradient: "from-orange-400 to-orange-500",
      shadowColor: "shadow-orange-500/25",
    },
    {
      icon: Mail,
      title: "Email",
      desc: "Send us a message",
      content: "vrsrecovery909@gmail.com",
      sub: "",
      gradient: "from-blue-400 to-blue-500",
      shadowColor: "shadow-blue-500/25",
    },
    {
      icon: MapPin,
      title: "Location",
      desc: "Our office address",
      content: "Morford Rd",
      sub: "Aldridge, Walsall WS9 8TH, United Kingdom",
      gradient: "from-orange-400 to-orange-500",
      shadowColor: "shadow-orange-500/25",
    },
    {
      icon: Clock,
      title: "Hours",
      desc: "We're here when you need us",
      content: "Mon-Fri: 8:00 AM - 8:00 PM",
      sub: "Sat-Sun: 9:00 AM - 5:00 PM",
      gradient: "from-blue-400 to-blue-500",
      shadowColor: "shadow-blue-500/25",
    },
  ]

  return (
    <section id="contact" className="relative py-32 overflow-hidden" ref={ref}>
      {/* Animated background */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-blue-50/30 to-orange-50/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
      </div> */}

      {/* Floating elements
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full opacity-10 animate-bounce" style={{ animationDuration: '3s' }} />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-gradient-to-r from-orange-400 to-blue-400 rounded-full opacity-15 animate-pulse" style={{ animationDelay: '1s' }} /> */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-orange-500/10 border border-blue-200/50 backdrop-blur-sm mb-8 shadow-lg shadow-blue-500/10"
          >
            <Sparkles className="w-4 h-4 text-blue-600 mr-2 animate-pulse" />
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
          >
            Start Your{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-orange-600 bg-clip-text text-transparent animate-pulse">
              Recovery
            </span>{" "}
            Today
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-md text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Ready to begin your journey to recovery? Contact us today to schedule your consultation and take the first
            step towards a{" "}
            <span className="font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              healthier future
            </span>
            .
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50, rotateY: -15 }}
                animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: -50, rotateY: -15 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.15, ease: "easeOut" }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="group"
              >
                <Card className={`relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-md ${item.shadowColor} hover:shadow-2xl transition-all duration-500 group-hover:bg-white/90`}>
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <CardHeader className="relative">
                    <motion.div 
                      className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg ${item.shadowColor} group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-slate-500 group-hover:text-slate-600 transition-colors">
                      {item.desc}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <p className="font-semibold text-slate-800 mb-1">{item.content}</p>
                    {item.sub && <p className="text-sm text-slate-500">{item.sub}</p>}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: 50, rotateY: 15 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="lg:col-span-2"
          >
            <Card className="relative overflow-hidden border-0 bg-white/90 backdrop-blur-sm shadow-2xl shadow-indigo-500/10 hover:shadow-indigo-500/20 transition-all duration-500">
              {/* Animated gradient border */}
              <div className="absolute inset-0 bg-blue-500 opacity-20 animate-pulse" />
              <div className="absolute inset-[1px] bg-white/95 backdrop-blur-sm rounded-lg" />
              
              <div className="relative">
                <CardHeader className="text-center pb-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.6, delay: 1.2, type: "spring", bounce: 0.4 }}
                    className="w-14 h-14 bg-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-500/25"
                  >
                    <Send className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-3">
                    Book Your Consultation
                  </CardTitle>
                  <CardDescription className="text-md text-slate-500">
                    Fill out the form below and we'll get back to you within{" "}
                    <span className="font-semibold text-indigo-600">24 hours</span>
                  </CardDescription>
                </CardHeader>

                <CardContent className="px-8 pb-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 1.4 }}
                        className="group"
                      >
                        <label className="text-sm font-semibold text-slate-700 mb-3 block group-focus-within:text-indigo-600 transition-colors">
                          Full Name
                        </label>
                        <Input 
                          name="name" 
                          placeholder="Enter your full name" 
                          onChange={handleChange} 
                          required 
                          className="h-12 border-slate-200 focus:border-indigo-400 focus:ring-indigo-400/20 transition-all duration-300 hover:border-slate-300"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 1.5 }}
                        className="group"
                      >
                        <label className="text-sm font-semibold text-slate-700 mb-3 block group-focus-within:text-indigo-600 transition-colors">
                          Email Address
                        </label>
                        <Input 
                          name="email" 
                          type="email" 
                          placeholder="Enter your email" 
                          onChange={handleChange} 
                          required 
                          className="h-12 border-slate-200 focus:border-indigo-400 focus:ring-indigo-400/20 transition-all duration-300 hover:border-slate-300"
                        />
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 1.6 }}
                        className="group"
                      >
                        <label className="text-sm font-semibold text-slate-700 mb-3 block group-focus-within:text-indigo-600 transition-colors">
                          Pickup Location
                        </label>
                        <Input
                          name="pickup"
                          placeholder="Enter pickup location"
                          value={formData.pickup}
                          onChange={handleChange}
                          required
                          className="h-12 border-slate-200 focus:border-indigo-400 focus:ring-indigo-400/20 transition-all duration-300 hover:border-slate-300"
                        />
                        {locationError && (
                        <div className="flex items-center gap-2 mt-2 text-sm text-red-600">
                          <AlertCircle className="w-4 h-4" />
                          <span>{locationError}</span>
                        </div>
                        )}
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={detectLocation}
                          disabled={isLocating}
                          className="flex items-center gap-2 text-xs"
                        >
                          {isLocating ? (
                            <>
                              <div className="w-3 h-3 border-2 border-orange-400/30 border-t-orange-600 rounded-full animate-spin" />
                              Locating...
                            </>
                          ) : (
                            <>
                              <Locate className="w-3 h-3" />
                              Use My Location
                            </>
                          )}
                        </Button>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 1.7 }}
                        className="group"
                      >
                        <label className="text-sm font-semibold text-slate-700 mb-3 block group-focus-within:text-indigo-600 transition-colors">
                          Drop-off Location
                        </label>
                        <Input 
                          name="dropoff" 
                          placeholder="Enter drop-off location" 
                          onChange={handleChange} 
                          required 
                          className="h-12 border-slate-200 focus:border-indigo-400 focus:ring-indigo-400/20 transition-all duration-300 hover:border-slate-300"
                        />
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 1.8 }}
                        className="group"
                      >
                        <label className="text-sm font-semibold text-slate-700 mb-3 block group-focus-within:text-indigo-600 transition-colors">
                          Vehicle Fault
                        </label>
                        <Input 
                          name="fault" 
                          placeholder="Describe the issue" 
                          onChange={handleChange} 
                          required 
                          className="h-12 border-slate-200 focus:border-indigo-400 focus:ring-indigo-400/20 transition-all duration-300 hover:border-slate-300"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 1.9 }}
                        className="group"
                      >
                        <label className="text-sm font-semibold text-slate-700 mb-3 block group-focus-within:text-indigo-600 transition-colors">
                          Number of Passengers
                        </label>
                        <Input 
                          name="passengers" 
                          type="number" 
                          placeholder="How many passengers?" 
                          onChange={handleChange} 
                          required 
                          className="h-12 border-slate-200 focus:border-indigo-400 focus:ring-indigo-400/20 transition-all duration-300 hover:border-slate-300"
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 2.0 }}
                      className="group"
                    >
                      <label className="text-sm font-semibold text-slate-700 mb-3 block group-focus-within:text-indigo-600 transition-colors">
                        Service Needed
                      </label>
                      <select
                        name="service"
                        className="w-full h-12 px-4 bg-white border border-slate-200 rounded-lg focus:border-indigo-400 focus:ring-4 focus:ring-indigo-400/20 transition-all duration-300 hover:border-slate-300 text-slate-700"
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a service</option>
                        <option>Vehicle Transportation</option>
                        <option>Roadside Assistance</option>
                        <option>Emergency Breakdown Service</option>
                        <option>Accident Recovery</option>
                        <option>Local & Long Distance</option>
                        <option>Scheduled Services</option>
                      </select>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 2.1 }}
                      className="group"
                    >
                      <label className="text-sm font-semibold text-slate-700 mb-3 block group-focus-within:text-indigo-600 transition-colors">
                        Additional Details
                      </label>
                      <Textarea
                        name="message"
                        placeholder="Tell us more about your situation..."
                        className="min-h-[140px] border-slate-200 focus:border-indigo-400 focus:ring-indigo-400/20 transition-all duration-300 hover:border-slate-300 resize-none"
                        onChange={handleChange}
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ duration: 0.8, delay: 2.2 }}
                    >
                      <Button 
                        type="submit" 
                        size="lg" 
                        disabled={isSubmitting}
                        className="w-full h-14 bg-gradient-to-r from-blue-600 to-orange-600 hover:from-orange-700 hover:to-blue-700 text-white font-semibold text-lg shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3" />
                            Sending...
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <Send className="w-5 h-5 mr-3" />
                            Send via WhatsApp
                          </div>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 2.4 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-slate-500">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-orange-600 rounded-full mr-2 animate-pulse" />
              <span>24/7 Emergency Service</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse" style={{ animationDelay: '0.5s' }} />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-600 rounded-full mr-2 animate-pulse" style={{ animationDelay: '1s' }} />
              <span>Fast Response Time</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}