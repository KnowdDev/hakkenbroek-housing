'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import type { Listing } from '@/lib/data'
import ListingCard from './ListingCard'

interface FeaturedSectionProps {
  listings: Listing[]
}

export default function FeaturedSection({ listings }: FeaturedSectionProps) {
  return (
    <section className="py-16 md:py-20 bg-surface-soft">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-xs font-bold text-muted uppercase tracking-[0.32px]">
              Curated Selection
            </span>
            <h2 className="text-2xl md:text-[28px] font-bold text-ink leading-tight mt-2">
              Featured Properties
            </h2>
            <p className="text-muted mt-2 text-base max-w-lg">
              Our hand-picked collection of Amsterdam&apos;s most exceptional homes
            </p>
          </div>
          <Link
            href="/#listings"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-ink hover:text-primary transition-colors"
          >
            View all
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.slice(0, 3).map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>
    </section>
  )
}
