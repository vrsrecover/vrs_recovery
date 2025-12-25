import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin, Truck, Clock, Shield, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import AnimatedButton from "./customs/AnimatedButton"

export function Footer() {
  const phoneNumber = "+447475365247"
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-t border-gray-700/50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(59,130,246,0.05)_49%,rgba(59,130,246,0.05)_51%,transparent_52%)] bg-[length:40px_40px]" />
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(168,85,247,0.03)_60deg,transparent_120deg)] opacity-50" />

      <div className="relative container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Brand Section */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 space-y-4 lg:space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white shadow-2xl backdrop-blur-sm border transition-all duration-300">
                <Image alt="VRS Recovery" src="/logos/vrs-logo.png" width={56}height={56} className="object-contain" />
              </div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent font-[family-name:var(--font-space-grotesk)]">
                VRS Recovery
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional vehicle recovery and transportation services across the UK. Fast response, fair pricing, and
              expertise you can trust.
            </p>

            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <div className="flex items-center space-x-2 text-xs text-gray-400">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 flex-shrink-0" />
                <span>24/7 Service</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-400">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500 flex-shrink-0" />
                <span>Fully Insured</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-400">
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 flex-shrink-0" />
                <span>Fast Response</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-400">
                <Truck className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500 flex-shrink-0" />
                <span>Modern Fleet</span>
              </div>
            </div>

            <div className="flex sm:justify-start justify-start space-x-3">
              {[
                { icon: Facebook, color: "hover:text-blue-600" },
                { icon: Twitter, color: "hover:text-blue-500" },
                { icon: Instagram, color: "hover:text-orange-500" },
                { icon: Linkedin, color: "hover:text-blue-700" },
              ].map(({ icon: Icon, color }, index) => (
                <Link
                  key={index}
                  href="#"
                  className={`w-9 h-9 sm:w-10 sm:h-10 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-lg flex items-center justify-center text-gray-500 ${color} transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20`}
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-semibold text-gray-400 font-[family-name:var(--font-space-grotesk)] text-base sm:text-lg">
              Our Services
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              {[
                "Vehicle Transportation",
                "Emergency Roadside Assistance",
                "Accident Recovery",
                "Breakdown Service",
                "Long Distance Towing",
                "Motorcycle Recovery",
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full group-hover:bg-blue-500 transition-colors duration-200 flex-shrink-0" />
                    <span>{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-semibold text-gray-400 font-[family-name:var(--font-space-grotesk)] text-base sm:text-lg">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              {[
                "About Us",
                "Coverage Areas",
                "Fleet Information",
                "Insurance Claims",
                "Customer Reviews",
                "Contact Support",
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-gray-200 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full group-hover:bg-blue-500 transition-colors duration-200 flex-shrink-0" />
                    <span>{link}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 sm:col-span-2 lg:col-span-1 space-y-3 sm:space-y-4">
            <h3 className="font-semibold text-gray-400 font-[family-name:var(--font-space-grotesk)] text-base sm:text-lg">
              Contact Info
            </h3>
            <div className="space-y-3 ">
              {/* Emergency Contact Card */}
              <AnimatedButton
               className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl text-white shadow-lg shadow-orange-500/25 px-5 py-2 flex items-center justify-start space-x-3">
                  <Phone className="w-4 h-4 mr-4 flex-shrink-0" />
                  <div className="text-left">
                    <p className="text-xs opacity-90">Emergency 24/7</p>
                      <Link href={`tel:${phoneNumber}`} className="font-semibold">07475 365247</Link>
                  </div>
              </AnimatedButton>

              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-3 text-gray-300">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                  </div>
                  <span>vrsrecovery909@gmail.com</span>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 rounded-lg flex items-center justify-center mt-0.5 flex-shrink-0">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                  </div>
                  <div>
                    <p>West Midlands, UK</p>
                    <p className="text-xs text-gray-300">Covering nationwide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-12 sm:mt-16 pt-6 sm:pt-8">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
          <div className="flex flex-col space-y-4 sm:space-y-2 md:space-y-0 md:flex-row md:justify-between md:items-center">
            <p className="text-sm text-gray-300 text-center md:text-left">
              © 2025 VRS Recovery. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-end space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link, index) => (
                <Link
                  key={index}
                  href="#"
                  className="text-gray-300 hover:text-blue-600 transition-colors duration-200 relative group text-center sm:text-left"
                >
                  {link}
                  <div className="absolute bottom-0 left-1/2 sm:left-0 transform -translate-x-1/2 sm:translate-x-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
