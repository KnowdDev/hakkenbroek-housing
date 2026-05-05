'use client'

import { useState } from 'react'
import ListingCard from './ListingCard'
import type { Listing } from '@/lib/data'

interface ListingGridProps {
  listings: Listing[]
  title?: string
  showFilters?: boolean
}

export default function ListingGrid({ listings, title, showFilters = true }: ListingGridProps) {
  const [filter, setFilter] = useState('all')

  const filteredListings = filter === 'all'
    ? listings
    : listings.filter((l) => l.listingType === filter)

  const counts = {
    all: listings.length,
    sale: listings.filter((l) => l.listingType === 'sale').length,
    rent: listings.filter((l) => l.listingType === 'rent').length,
    lease: listings.filter((l) => l.listingType === 'lease').length,
  }

  return (
    <section id="listings" className="py-16 md:py-20 bg-canvas">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        {title && (
          <div className="mb-10">
            <h2 className="text-2xl md:text-[28px] font-bold text-ink leading-tight">
              {title}
            </h2>
            <p className="text-muted mt-2 text-base">
              Discover exceptional properties across Amsterdam&apos;s finest neighbourhoods
            </p>
          </div>
        )}

        {showFilters && (
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
            {(['all', 'sale', 'rent', 'lease'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors border ${
                  filter === f
                    ? 'bg-ink text-white border-ink'
                    : 'bg-canvas text-ink border-hairline hover:border-ink'
                }`}
              >
                {f === 'all' ? 'All Properties' : f === 'sale' ? 'For Sale' : f === 'rent' ? 'For Rent' : 'For Lease'}
                <span className={`ml-1.5 text-xs ${filter === f ? 'text-white/70' : 'text-muted'}`}>
                  {counts[f]}
                </span>
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
          {filteredListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>

        {filteredListings.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted text-lg">No properties found matching your criteria.</p>
            <button
              onClick={() => setFilter('all')}
              className="mt-4 text-primary font-medium hover:underline"
            >
              View all properties
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
