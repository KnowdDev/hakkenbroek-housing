'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'buy',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-16 md:py-20 bg-canvas">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Info */}
          <div>
            <span className="text-xs font-bold text-muted uppercase tracking-[0.32px]">
              Get in Touch
            </span>
            <h2 className="text-2xl md:text-[28px] font-bold text-ink leading-tight mt-2 mb-6">
              Let&apos;s find your dream home
            </h2>
            <p className="text-body text-base leading-relaxed mb-10">
              With over 20 years of experience in the Amsterdam real estate market, our team of
              dedicated agents is ready to guide you through every step of your property journey.
              Whether you are buying, selling, renting, or looking for a corporate lease, we have
              the expertise to make it happen.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-surface-strong rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-ink" />
                </div>
                <div>
                  <h3 className="font-semibold text-ink text-base">Visit Our Office</h3>
                  <p className="text-muted text-sm mt-0.5">
                    Keizersgracht 672<br />
                    1017 ET Amsterdam<br />
                    The Netherlands
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-surface-strong rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-ink" />
                </div>
                <div>
                  <h3 className="font-semibold text-ink text-base">Call Us</h3>
                  <p className="text-muted text-sm mt-0.5">
                    <a href="tel:+31205550101" className="hover:text-primary transition-colors">
                      +31 20 555 0101
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-surface-strong rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-ink" />
                </div>
                <div>
                  <h3 className="font-semibold text-ink text-base">Email Us</h3>
                  <p className="text-muted text-sm mt-0.5">
                    <a href="mailto:info@hakkenbroek.com" className="hover:text-primary transition-colors">
                      info@hakkenbroek.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-surface-soft rounded-md p-6 md:p-8">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <CheckCircle className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-ink mb-2">Message Sent!</h3>
                <p className="text-muted text-sm">
                  Thank you for reaching out. One of our agents will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-ink mb-1.5">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full h-14 px-4 bg-canvas border border-hairline rounded-sm text-ink placeholder:text-muted outline-none focus:border-ink focus:border-2 transition-colors"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-ink mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full h-14 px-4 bg-canvas border border-hairline rounded-sm text-ink placeholder:text-muted outline-none focus:border-ink focus:border-2 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-ink mb-1.5">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+31 6 1234 5678"
                      className="w-full h-14 px-4 bg-canvas border border-hairline rounded-sm text-ink placeholder:text-muted outline-none focus:border-ink focus:border-2 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-ink mb-1.5">I am interested in</label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full h-14 px-4 bg-canvas border border-hairline rounded-sm text-ink outline-none focus:border-ink focus:border-2 transition-colors appearance-none"
                  >
                    <option value="buy">Buying a property</option>
                    <option value="rent">Renting a property</option>
                    <option value="lease">Corporate lease</option>
                    <option value="sell">Selling my property</option>
                    <option value="other">Something else</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-ink mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your requirements..."
                    className="w-full px-4 py-3 bg-canvas border border-hairline rounded-sm text-ink placeholder:text-muted outline-none focus:border-ink focus:border-2 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-12 bg-primary hover:bg-primary-active text-white font-medium rounded-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
