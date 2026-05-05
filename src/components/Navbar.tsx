'use client'

import { useState } from 'react'
import { Menu, X, Home, Building2, KeyRound, Phone } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navItems = [
    { label: 'Buy', href: '/#listings', icon: Home },
    { label: 'Rent', href: '/#listings', icon: Building2 },
    { label: 'Lease', href: '/#listings', icon: KeyRound },
    { label: 'Contact', href: '/#contact', icon: Phone },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-canvas border-b border-hairline">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Home className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-semibold text-ink tracking-tight">
              Hakkenbroek
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-ink font-semibold text-base hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+31205550101"
              className="text-sm font-medium text-muted hover:text-ink transition-colors"
            >
              +31 20 555 0101
            </a>
            <Link
              href="/#contact"
              className="bg-primary hover:bg-primary-active text-white font-medium text-sm px-5 py-2.5 rounded-sm transition-colors"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-surface-soft transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-hairline bg-canvas px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 py-2 text-ink font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              <item.icon className="w-5 h-5 text-muted" />
              {item.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-hairline">
            <Link
              href="/#contact"
              className="block w-full text-center bg-primary text-white font-medium py-3 rounded-sm"
              onClick={() => setMobileOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
