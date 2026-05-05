import Link from 'next/link'
import { Home } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-canvas border-t border-hairline">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Home className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-semibold text-ink">Hakkenbroek</span>
            </Link>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              Boutique real estate agency serving Amsterdam for over 20 years. Specialists in
              premium properties, expat rentals, and corporate leasing.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-medium text-ink mb-4">Services</h3>
            <ul className="space-y-3">
              {['Buy a Home', 'Rent a Property', 'Corporate Leasing', 'Property Management', 'Expat Services', 'Valuations'].map((item) => (
                <li key={item}>
                  <Link href="/#contact" className="text-sm text-muted hover:text-ink transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-base font-medium text-ink mb-4">Company</h3>
            <ul className="space-y-3">
              {['About Us', 'Our Team', 'Careers', 'Press', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <Link href="/" className="text-sm text-muted hover:text-ink transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-hairline flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-muted">
            &copy; {new Date().getFullYear()} Hakkenbroek Housing Company. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[13px] text-muted">
            <span>Amsterdam, Netherlands</span>
            <span>EN</span>
            <span>EUR</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
