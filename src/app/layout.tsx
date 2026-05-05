import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hakkenbroek Housing Company | Amsterdam Real Estate',
  description: 'Boutique real estate agency in Amsterdam. Premium properties for sale, rent, and lease. Over 20 years of expertise in the Amsterdam housing market.',
  keywords: 'Amsterdam real estate, property for sale Amsterdam, rent Amsterdam, expat housing, canal house, luxury property',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-canvas text-ink antialiased">
        {children}
      </body>
    </html>
  )
}
