"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Truck } from "lucide-react";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInHero, setIsInHero] = useState(true);
  const phoneNumber = "+447475365247"

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("home");
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollPosition = window.scrollY + 100; // Add offset for better transition
        setIsInHero(scrollPosition < heroBottom);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {name: "home", href: "#home"},
    {name: "services", href: "#services"},
    {name: "gallery", href: "/gallery"},
    {name: "about", href: "#about"},
    {name: "contact", href: "#contact"},
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isInHero
          ? ""
          : "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200/20 dark:border-gray-700/20"
      }`}
    >
      <div className="container max-w-full px-6 md:py-6 py-10">
        <div className="flex items-center justify-center relative">
          {/* Logo positioned absolutely to the left */}
          <div className="absolute left-0 flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-2xl backdrop-blur-sm border transition-all duration-300 ${
                  isInHero
                    ? "bg-white dark:bg-gray-900/90 border-white/20 hover:bg-white dark:hover:bg-gray-800"
                    : "bg-white dark:bg-gray-700 border-blue-500/20 hover:bg-transparent"
                }`}
              >
                {/* Re-Routing to homepage */}
                <Link href="/">
                  <Image
                    alt="VRS Recovery"
                    src="/logos/vrs-logo.png"
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                </Link>
              </div>
              <div className="flex flex-col">
                <span
                  className={`text-xl font-bold font-[family-name:var(--font-space-grotesk)] transition-all duration-300 ${
                    isInHero
                      ? "text-white drop-shadow-lg [text-shadow:_0_1px_2px_rgb(0_0_0_/_0.8)]"
                      : "text-black dark:text-white drop-shadow-sm"
                  }`}
                >
                  VRS
                </span>
                <span
                  className={`text-sm font-semibold -mt-1 transition-all duration-300 ${
                    isInHero
                      ? "text-white/90 drop-shadow-md [text-shadow:_0_1px_1px_rgb(0_0_0_/_0.6)]"
                      : "text-gray-600 dark:text-gray-400"
                  }`}
                >
                  Recovery
                </span>
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(
              (item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium relative group ${
                    isInHero
                      ? "text-white drop-shadow-lg [text-shadow:_0_1px_2px_rgb(0_0_0_/_0.8)]"
                      : "text-black dark:text-gray-300"
                  }`}
                >
                  {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full shadow-sm"></span>
                </Link>
              )
            )}
          </nav>

          {/* Phone number positioned absolutely to the right */}
          <div className="absolute right-0 hidden lg:flex items-center space-x-4">
            <div
              className={`flex items-center space-x-3 font-semibold px-5 py-2.5 rounded-full transition-all duration-500
      backdrop-blur-md shadow-xl border-2
      ${
        isInHero
          ? "text-white bg-gradient-to-r from-blue-600/30 via-orange-500/30 to-blue-600/30 border-white/40 hover:from-blue-600/40 hover:to-orange-500/40"
          : "text-gray-900 dark:text-gray-100 bg-gradient-to-r from-blue-100 via-orange-100 to-white border-blue-200/50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 hover:from-blue-200 hover:via-orange-200 hover:to-white"
      }`}
            >
              <Phone className="w-5 h-5 text-orange-400 drop-shadow-md animate-pulse" />
              <span
                className={`tracking-wide transition-all duration-500 ${
                  isInHero
                    ? "drop-shadow-md [text-shadow:_0_0_8px_rgb(255_255_255_/_0.9)]"
                    : "text-gray-800 dark:text-gray-200"
                }`}
              >
                Emergency: <Link href={`tel:${phoneNumber}`} className="text-orange-400">07475 365247</Link>
              </span>
            </div>
          </div>

          {/* Mobile Menu Button positioned absolutely to the right */}
          <button
            className={`absolute right-0 md:hidden p-2 rounded-lg transition-all duration-300 shadow-lg backdrop-blur-sm border ${
              isInHero
                ? "bg-blend-color dark:bg-gray-900/80 hover:bg-white/90 dark:hover:bg-gray-800/90 border-white/30 dark:border-gray-700/30"
                : "bg-gray-100/80 dark:bg-gray-800/80 hover:bg-gray-200/80 dark:hover:bg-gray-700/80 border-gray-200/30 dark:border-gray-600/30"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X
                className={`w-6 h-6 transition-colors duration-300 ${
                  isInHero
                    ? "text-black drop-shadow-sm"
                    : "text-black dark:text-gray-300"
                }`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 transition-colors duration-300 ${
                  isInHero
                    ? "text-black drop-shadow-sm"
                    : "text-black dark:text-gray-300"
                }`}
              />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div
            className={`md:hidden py-4 rounded-lg p-4 mt-10 backdrop-blur-sm shadow-xl border transition-all duration-300 ${
              isInHero
                ? "bg-transparent dark:bg-gray-900/90 border-white/30 dark:border-gray-700/30"
                : "bg-transparent dark:bg-gray-900/95 border-gray-200/30 dark:border-gray-600/30"
            }`}
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map(
                (item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2 px-4 rounded-lg ${
                      isInHero
                        ? "text-white hover:bg-gray-100/20 dark:hover:bg-gray-800/20 drop-shadow-sm"
                        : "text-black dark:text-gray-300 hover:bg-gray-100/60 dark:hover:bg-gray-800/60"
                    }`}
                  >
                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}  
                  </Link>
                )
              )}
              <div
                className={`flex items-center space-x-3 font-semibold px-5 py-2.5 rounded-xl shadow-md transition-all duration-300
                  ${
                    isInHero
                      ? "text-white bg-gradient-to-r from-blue-600/40 via-orange-500/40 to-white/10 backdrop-blur-md border border-white/20"
                      : "text-gray-900 dark:text-gray-200 bg-gradient-to-r from-blue-100 via-orange-50 to-white shadow-sm border border-gray-200/50 dark:border-gray-700/50"
                  } hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-400/30`}
              >
                <Phone className="w-5 h-5 text-orange-400 dark:text-orange-300 drop-shadow-[0_0_6px_rgba(255,165,0,0.6)]" />
                <span
                  className={`tracking-wide ${
                    isInHero
                      ? "drop-shadow-[0_0_6px_rgba(59,130,246,0.6)]"
                      : "text-gray-800 dark:text-gray-200"
                  }`}
                >
                  Emergency:{" "}
                  <Link href={`tel:${phoneNumber}`} className="text-blue-500 dark:text-blue-400">
                    07475 365247
                  </Link>
                </span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
