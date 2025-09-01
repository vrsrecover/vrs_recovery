"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

type ReviewItem = {
  author: string
  authorUrl?: string
  avatar?: string
  rating: number
  text?: string
  time?: number
  relativeTime?: string
  language?: string
}

type ReviewsPayload = {
  placeName: string
  avgRating: number
  totalRatings: number
  reviews: ReviewItem[]
  source: "google"
}

export function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [data, setData] = useState<ReviewsPayload | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // UI state
  const [index, setIndex] = useState(0)
  const [minRating, setMinRating] = useState<number>(0)
  const [onlyWithText, setOnlyWithText] = useState<boolean>(true)
  const [sortBy, setSortBy] = useState<"newest" | "highest" | "lowest">("newest")

  useEffect(() => {
    let active = true
    const fetchReviews = async () => {
      try {
        setLoading(true)
        const res = await fetch("/api/google-reviews", { cache: "no-store" })
        if (!res.ok) throw new Error(await res.text())
        const json = (await res.json()) as ReviewsPayload
        if (active) {
          setData(json)
          setError(null)
        }
      } catch (e: any) {
        setError(e?.message || "Failed to load reviews")
      } finally {
        if (active) setLoading(false)
      }
    }
    fetchReviews()
    return () => {
      active = false
    }
  }, [])

  // Filter + Sort
  const filtered = useMemo(() => {
    if (!data?.reviews) return []
    let arr = [...data.reviews]
    if (onlyWithText) arr = arr.filter((r) => (r.text || "").trim().length > 0)
    if (minRating > 0) arr = arr.filter((r) => r.rating >= minRating)
    if (sortBy === "newest") {
      arr.sort((a, b) => (b.time ?? 0) - (a.time ?? 0))
    } else if (sortBy === "highest") {
      arr.sort((a, b) => b.rating - a.rating)
    } else {
      arr.sort((a, b) => a.rating - b.rating)
    }
    return arr
  }, [data, onlyWithText, minRating, sortBy])

  // Auto-rotate
  useEffect(() => {
    if (!filtered.length) return
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % filtered.length)
    }, 5000)
    return () => clearInterval(id)
  }, [filtered.length])

  const current = filtered[index] || null

  const goPrev = () => setIndex((prev) => (prev - 1 + filtered.length) % filtered.length)
  const goNext = () => setIndex((prev) => (prev + 1) % filtered.length)

  return (
    <section ref={ref} className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center px-6 py-3 bg-orange-50 border border-orange-200 text-orange-600 rounded-full text-sm font-medium mb-8"
        >
          <div className="w-2 h-2 bg-orange-500 rounded-full mr-2" />
          Verified Google Reviews
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 tracking-tight"
        >
          What Our Customers Say
        </motion.h2>

        {data && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {data.placeName
              ? `From ${data.placeName} · `
              : ""}
            Average rating {data.avgRating?.toFixed(1) ?? "-"} ({data.totalRatings ?? 0} total)
          </motion.p>
        )}

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="flex flex-wrap gap-3 justify-center items-center mb-8"
        >
          <select
            value={minRating}
            onChange={(e) => {
              setIndex(0)
              setMinRating(Number(e.target.value))
            }}
            className="px-4 py-2 rounded-full border border-slate-200 text-slate-700 bg-white"
          >
            <option value={0}>All ratings</option>
            <option value={5}>5★ only</option>
            <option value={4}>4★+</option>
            <option value={3}>3★+</option>
          </select>

          <select
            value={sortBy}
            onChange={(e) => {
              setIndex(0)
              setSortBy(e.target.value as any)
            }}
            className="px-4 py-2 rounded-full border border-slate-200 text-slate-700 bg-white"
          >
            <option value="newest">Newest</option>
            <option value="highest">Highest rating</option>
            <option value="lowest">Lowest rating</option>
          </select>

          <label className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white cursor-pointer">
            <input
              type="checkbox"
              checked={onlyWithText}
              onChange={(e) => {
                setIndex(0)
                setOnlyWithText(e.target.checked)
              }}
            />
            <span className="text-slate-700">Only with text</span>
          </label>
        </motion.div>

        {/* Content */}
        <div className="relative">
          {/* Loading / Error / Empty */}
          {loading && <div className="text-slate-500">Loading reviews…</div>}
          {error && <div className="text-red-500">Error: {error}</div>}
          {!loading && !error && filtered.length === 0 && (
            <div className="text-slate-500">No reviews match your filter.</div>
          )}

          {!loading && !error && current && (
            <motion.div
              key={`${current.author}-${current.time}`}
              initial={{ opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -8 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-lg max-w-3xl mx-auto mb-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-6 left-6 text-orange-200">
                <Quote className="w-8 h-8" />
              </div>

              <div className="flex justify-center mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < Math.round(current.rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-slate-300"
                    }`}
                  />
                ))}
              </div>

              {current.text && (
                <blockquote className="text-xl md:text-2xl text-slate-700 italic mb-8 leading-relaxed font-light">
                  “{current.text}”
                </blockquote>
              )}

              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-orange-200">
                  <Image
                    src={current.avatar || "/placeholder.svg"}
                    alt={current.author}
                    width={64}
                    height={64}
                    className="w-16 h-16 object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-slate-900 text-lg">{current.author}</div>
                  <div className="text-orange-500 text-sm font-medium">
                    {current.relativeTime || ""}
                  </div>
                  {current.authorUrl && (
                    <a
                      href={current.authorUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 text-sm underline hover:text-slate-700"
                    >
                      View on Google
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Navigation */}
        {!loading && !error && filtered.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="flex items-center justify-center gap-6"
          >
            <Button
              variant="outline"
              size="icon"
              onClick={goPrev}
              className="rounded-full border-slate-300 hover:bg-slate-50 text-slate-600 hover:text-orange-500 transition-all duration-300 w-12 h-12 bg-transparent"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex gap-2">
              {filtered.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === index
                      ? "bg-orange-500 shadow-md scale-125"
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={goNext}
              className="rounded-full border-slate-300 hover:bg-slate-50 text-slate-600 hover:text-orange-500 transition-all duration-300 w-12 h-12 bg-transparent"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
