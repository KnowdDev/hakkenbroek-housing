'use client'

import { useState } from 'react'
import { Heart, Bed, Bath, Maximize } from 'lucide-react'
import Link from 'next/link'
import type { Listing } from '@/lib/data'

export default function ListingCard({ listing }: { listing: Listing }) {
  const [saved, setSaved] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const formatPrice = (price: number, type: string) => {
    if (type === 'rent' || type === 'lease') {
      return `€${price.toLocaleString()}/mo`
    }
    return `€${(price / 1000000).toFixed(2)}M`
  }

  return (
    <Link href={`/listings/${listing.id}`} className="group block">
      <div className="relative">
        {/* Image Container */}
        <div className="relative aspect-square rounded-md overflow-hidden bg-surface-soft">
          <img
            src={listing.images?.[currentImage] || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80'}
            alt={listing.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {listing.featured && (
              <span className="bg-canvas text-ink text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-[rgba(0,0,0,0.02)_0_0_0_1px,rgba(0,0,0,0.04)_0_2px_6px_0,rgba(0,0,0,0.1)_0_4px_8px_0]">
                Featured
              </span>
            )}
            <span className="bg-canvas text-ink text-[11px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide shadow-[rgba(0,0,0,0.02)_0_0_0_1px,rgba(0,0,0,0.04)_0_2px_6px_0,rgba(0,0,0,0.1)_0_4px_8px_0]">
              {listing.listingType === 'sale' ? 'For Sale' : listing.listingType === 'rent' ? 'For Rent' : 'For Lease'}
            </span>
          </div>

          {/* Heart */}
          <button
            onClick={(e) => {
              e.preventDefault()
              setSaved(!saved)
            }}
            className="absolute top-3 right-3 w-8 h-8 bg-surface-strong hover:bg-canvas rounded-full flex items-center justify-center transition-colors"
          >
            <Heart
              className={`w-4 h-4 transition-colors ${saved ? 'fill-primary text-primary' : 'text-ink'}`}
            />
          </button>

          {/* Image Dots */}
          {listing.images && listing.images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {listing.images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.preventDefault()
                    setCurrentImage(i)
                  }}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${i === currentImage ? 'bg-canvas' : 'bg-canvas/50'}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Meta */}
        <div className="mt-3 space-y-1">
          <div className="flex items-start justify-between">
            <h3 className="font-semibold text-ink text-base leading-tight line-clamp-1">
              {listing.title}
            </h3>
            <div className="flex items-center gap-1 shrink-0 ml-2">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm text-ink">4.9</span>
            </div>
          </div>

          <p className="text-sm text-muted">{listing.address}, {listing.city}</p>

          <div className="flex items-center gap-3 text-sm text-muted pt-1">
            {listing.bedrooms && (
              <span className="flex items-center gap-1">
                <Bed className="w-3.5 h-3.5" />
                {listing.bedrooms}
              </span>
            )}
            {listing.bathrooms && (
              <span className="flex items-center gap-1">
                <Bath className="w-3.5 h-3.5" />
                {listing.bathrooms}
              </span>
            )}
            {listing.squareMeters && (
              <span className="flex items-center gap-1">
                <Maximize className="w-3.5 h-3.5" />
                {listing.squareMeters}m²
              </span>
            )}
          </div>

          <div className="flex items-baseline gap-1 pt-1">
            <span className="font-semibold text-ink text-base">
              {formatPrice(listing.price, listing.listingType)}
            </span>
            {listing.listingType === 'sale' && (
              <span className="text-sm text-muted">total</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
