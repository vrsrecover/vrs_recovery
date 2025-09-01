import { NextResponse } from "next/server"

type GoogleReview = {
  author_name: string
  author_url?: string
  language?: string
  profile_photo_url?: string
  rating: number
  relative_time_description?: string
  text?: string
  time?: number
}

type GoogleDetailsResponse = {
  result?: {
    name?: string
    rating?: number
    user_ratings_total?: number
    reviews?: GoogleReview[]
  }
  status: string
  error_message?: string
}

export const revalidate = 3600 

export async function GET() {
  const key = process.env.GOOGLE_MAPS_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID

  if (!key || !placeId) {
    return NextResponse.json(
      { error: "Missing GOOGLE_MAPS_API_KEY or GOOGLE_PLACE_ID" },
      { status: 500 }
    )
  }

  const fields = encodeURIComponent("name,rating,user_ratings_total,reviews")
  const url =
    `https://maps.googleapis.com/maps/api/place/details/json` +
    `?place_id=${placeId}` +
    `&fields=${fields}` +
    `&language=en` + 
    `&reviews_sort=newest` + 
    `&key=${key}`

  try {
    const res = await fetch(url, { next: { revalidate } })
    const data: GoogleDetailsResponse = await res.json()

    if (data.status !== "OK") {
      return NextResponse.json(
        { error: data.error_message || data.status || "Failed to fetch" },
        { status: 500 }
      )
    }

    const placeName = data.result?.name ?? ""
    const avgRating = data.result?.rating ?? 0
    const totalRatings = data.result?.user_ratings_total ?? 0
    const reviews = (data.result?.reviews ?? []).map((r) => ({
      author: r.author_name,
      authorUrl: r.author_url,
      avatar: r.profile_photo_url,
      rating: r.rating,
      text: r.text,
      time: r.time,
      relativeTime: r.relative_time_description,
      language: r.language,
    }))

    return NextResponse.json({
      placeName,
      avgRating,
      totalRatings,
      reviews,
      source: "google",
    })
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Unknown error" }, { status: 500 })
  }
}
