import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import FeaturedSection from '@/components/FeaturedSection'
import ListingGrid from '@/components/ListingGrid'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import { getFeaturedListings, getAllListings } from '@/lib/data'

export default function Home() {
  const featured = getFeaturedListings()
  const allListings = getAllListings()

  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedSection listings={featured} />
      <ListingGrid listings={allListings} title="Explore All Properties" />
      <ContactSection />
      <Footer />
    </main>
  )
}
