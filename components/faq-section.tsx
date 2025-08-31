"use client"

import { useState, useRef } from "react"
import { ChevronDown, Phone, MessageCircle } from "lucide-react"
import { motion, useInView } from "framer-motion"

const faqs = [
  {
    question: "How quickly can you respond to emergencies?",
    answer:
      "We provide 24/7 emergency response with an average arrival time of 15-30 minutes within our coverage area. Our GPS-tracked vehicles are strategically positioned to ensure rapid response times.",
  },
  {
    question: "Do you provide 24/7 service?",
    answer:
      "Yes, we operate round-the-clock, 365 days a year. Whether it's a weekend, holiday, or the middle of the night, our emergency response team is always ready to assist you.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "Our primary coverage is within a 30-mile radius of our base in the West Midlands, including Birmingham, Wolverhampton, Coventry, and surrounding areas. We also offer extended coverage for long-distance recovery.",
  },
  {
    question: "Are your services insured?",
    answer:
      "Yes, we are fully insured with comprehensive coverage including public liability and goods in transit insurance. We hold all necessary licenses and certifications required for vehicle recovery operations in the UK.",
  },
  {
    question: "What types of vehicles can you recover?",
    answer:
      "We can recover all types of vehicles including cars, motorcycles, vans, light commercial vehicles, and even some heavy-duty trucks. Our fleet includes specialized equipment for different vehicle types and recovery scenarios.",
  },
]

const phoneNumber = "+447475365247"

export function FaqSection() {
  const [openItems, setOpenItems] = useState<number[]>([])
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const whatsappUrl = `https://wa.me/${447475365247}`

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-6"
            >
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-2" />
              Frequently Asked Questions
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-bold mb-4 text-balance"
            >
              <span className="text-slate-900">Quick Answers to</span>
              <br />
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Common Questions
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="text-md text-slate-600 max-w-2xl mx-auto leading-relaxed"
            >
              Find answers to the most frequently asked questions about our vehicle recovery and transport services
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - FAQ List */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="bg-white rounded-2xl shadow-sm p-8"
              >
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1, ease: "easeOut" }}
                      className="border-b border-gray-100 last:border-b-0"
                    >
                      <button
                        onClick={() => toggleItem(index)}
                        className="w-full py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 rounded-lg px-2"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-8 h-8 bg-orange-500 text-white rounded-lg flex items-center justify-center text-sm font-semibold flex-shrink-0">
                            {index + 1}
                          </div>
                          <h3 className="text-base font-medium text-slate-900 text-balance">{faq.question}</h3>
                        </div>
                        <ChevronDown
                          className={`w-5 h-5 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                            openItems.includes(index) ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          openItems.includes(index) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="pl-12 pb-4 pr-2">
                          <p className="text-slate-600 leading-relaxed text-sm">{faq.answer}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - CTA Cards */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl p-6 text-white"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold">Still Have Questions?</h3>
                </div>
                <p className="text-orange-50 text-sm mb-4 leading-relaxed">
                  Our friendly team is here to help 24/7. Give us a call for immediate assistance.
                </p>
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold mb-2">07475 365247</div>
                </div>
                <a
                  href={`tel:${phoneNumber}`}
                  className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-3 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl p-6 text-white"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold">Quick WhatsApp</h3>
                </div>
                <p className="text-blue-50 text-sm mb-4 leading-relaxed">
                  Send us a quick message on WhatsApp for fast response and easy communication.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-3 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
