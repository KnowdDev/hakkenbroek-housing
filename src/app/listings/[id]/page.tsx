import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  Heart,
  Share2,
  Bed,
  Bath,
  Maximize,
  MapPin,
  Check,
  Mail,
  Phone,
  Send,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getListingById, getAllListings, type Listing } from '@/lib/data'

interface Props {
  params: { id: string }
}

export function generateStaticParams() {
  const listings = getAllListings()
  return listings.map((l) => ({ id: String(l.id) }))
}

export function generateMetadata({ params }: Props) {
  const listing = getListingById(Number(params.id))
  if (!listing) return { title: 'Not Found' }
  return {
    title: `${listing.title} | Hakkenbroek Housing`,
    description: listing.description,
  }
}

function formatPrice(listing: Listing) {
  if (listing.listingType === 'rent' || listing.listingType === 'lease') {
    return `€${listing.price.toLocaleString()}/month`
  }
  return `€${(listing.price / 1000000).toFixed(2)} million`
}

export default function ListingPage({ params }: Props) {
  const listing = getListingById(Number(params.id))
  if (!listing) return notFound()

  return (
    <main className="min-h-screen bg-canvas">
      <Navbar />

      {/* Top bar */}
      <div className="max-w-[1128px] mx-auto px-6 lg:px-10 pt-6">
        <div className="flex items-center justify-between mb-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-ink hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to listings
          </Link>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 rounded-sm border border-hairline text-sm font-medium text-ink hover:bg-surface-soft transition-colors">
              <Share2 className="w-4 h-4" />
              Share
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-sm border border-hairline text-sm font-medium text-ink hover:bg-surface-soft transition-colors">
              <Heart className="w-4 h-4" />
              Save
            </button>
          </div>
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="max-w-[1128px] mx-auto px-6 lg:px-10 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 rounded-md overflow-hidden">
          <div className="aspect-[4/3] md:aspect-auto">
            <img
              src={listing.images?.[0]}
              alt={listing.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden md:grid grid-cols-2 gap-2">
            {listing.images?.slice(1, 3).map((img, i) => (
              <div key={i} className="aspect-square">
                <img
                  src={img}
                  alt={`${listing.title} ${i + 2}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1128px] mx-auto px-6 lg:px-10 pb-20">
        <div className="grid lg:grid-cols-[1fr_380px] gap-12">
          {/* Left Column */}
          <div>
            {/* Header */}
            <div className="border-b border-hairline pb-6 mb-6">
              <h1 className="text-[22px] md:text-[26px] font-semibold text-ink leading-tight mb-2">
                {listing.title}
              </h1>
              <div className="flex items-center gap-2 text-muted text-sm">
                <MapPin className="w-4 h-4" />
                {listing.address}, {listing.city} {listing.postalCode}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center gap-6 pb-6 mb-6 border-b border-hairline">
              {listing.bedrooms && (
                <div className="flex items-center gap-2 text-sm text-ink">
                  <Bed className="w-5 h-5 text-muted" />
                  <span className="font-medium">{listing.bedrooms}</span> bedrooms
                </div>
              )}
              {listing.bathrooms && (
                <div className="flex items-center gap-2 text-sm text-ink">
                  <Bath className="w-5 h-5 text-muted" />
                  <span className="font-medium">{listing.bathrooms}</span> bathrooms
                </div>
              )}
              {listing.squareMeters && (
                <div className="flex items-center gap-2 text-sm text-ink">
                  <Maximize className="w-5 h-5 text-muted" />
                  <span className="font-medium">{listing.squareMeters}</span> m²
                </div>
              )}
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-ink mb-4">About this property</h2>
              <p className="text-body text-base leading-relaxed">{listing.description}</p>
            </div>

            {/* Amenities */}
            {listing.amenities && listing.amenities.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-ink mb-4">What this place offers</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {listing.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-3 py-2">
                      <Check className="w-5 h-5 text-ink" />
                      <span className="text-base text-ink">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Agent Card */}
            <div className="bg-surface-soft rounded-md p-6">
              <h2 className="text-xl font-semibold text-ink mb-4">Your agent</h2>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-lg shrink-0">
                  {listing.agentName?.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-ink text-base">{listing.agentName}</h3>
                  <p className="text-muted text-sm mt-0.5">Property Consultant</p>
                  <div className="flex items-center gap-4 mt-3">
                    <a
                      href={`mailto:${listing.agentEmail}`}
                      className="flex items-center gap-1.5 text-sm text-ink hover:text-primary transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      Email
                    </a>
                    <a
                      href={`tel:${listing.agentPhone}`}
                      className="flex items-center gap-1.5 text-sm text-ink hover:text-primary transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      Call
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Inquiry Card */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="bg-canvas rounded-md border border-hairline shadow-[rgba(0,0,0,0.02)_0_0_0_1px,rgba(0,0,0,0.04)_0_2px_6px_0,rgba(0,0,0,0.1)_0_4px_8px_0] p-6">
              <div className="mb-6">
                <div className="text-2xl font-bold text-ink">{formatPrice(listing)}</div>
                <p className="text-sm text-muted mt-1">
                  {listing.listingType === 'sale' ? 'Asking price' : 'Per month excl. utilities'}
                </p>
              </div>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full h-12 px-4 border border-hairline rounded-sm text-ink placeholder:text-muted outline-none focus:border-ink focus:border-2 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full h-12 px-4 border border-hairline rounded-sm text-ink placeholder:text-muted outline-none focus:border-ink focus:border-2 transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full h-12 px-4 border border-hairline rounded-sm text-ink placeholder:text-muted outline-none focus:border-ink focus:border-2 transition-colors"
                />
                <textarea
                  rows={3}
                  placeholder="I am interested in this property..."
                  className="w-full px-4 py-3 border border-hairline rounded-sm text-ink placeholder:text-muted outline-none focus:border-ink focus:border-2 transition-colors resize-none"
                />
                <button
                  type="button"
                  className="w-full h-12 bg-primary hover:bg-primary-active text-white font-medium rounded-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Request Viewing
                </button>
              </form>

              <p className="text-xs text-muted text-center mt-4">
                We typically respond within 2 hours during business hours.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
