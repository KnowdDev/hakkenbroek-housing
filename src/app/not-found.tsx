import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-canvas">
      <Navbar />
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-32 text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-ink mb-4">404</h1>
        <p className="text-lg text-muted mb-8">This property has already been sold.</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-active text-white font-medium px-6 py-3 rounded-sm transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Listings
        </Link>
      </div>
      <Footer />
    </main>
  )
}
