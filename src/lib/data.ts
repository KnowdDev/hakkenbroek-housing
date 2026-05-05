export interface Listing {
  id: number
  title: string
  description: string
  address: string
  city: string
  postalCode: string
  price: number
  propertyType: string
  listingType: 'sale' | 'rent' | 'lease'
  bedrooms: number
  bathrooms: number
  squareMeters: number
  images: string[]
  amenities: string[]
  featured: boolean
  status: string
  agentName: string
  agentEmail: string
  agentPhone: string
}

export const listings: Listing[] = [
  {
    id: 1,
    title: 'Herengracht Canal House',
    description: 'Magnificent 17th-century canal house on the iconic Herengracht. This fully renovated property features original beams, a private garden, and modern amenities throughout. Four floors of living space with views over the canal.',
    address: 'Herengracht 384',
    city: 'Amsterdam',
    postalCode: '1016 CJ',
    price: 2850000,
    propertyType: 'Canal House',
    listingType: 'sale',
    bedrooms: 5,
    bathrooms: 3,
    squareMeters: 320,
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    ],
    amenities: ['Canal View', 'Private Garden', 'Original Beams', 'Elevator', 'Fireplace', 'Wine Cellar'],
    featured: true,
    status: 'active',
    agentName: 'Pieter van Dijk',
    agentEmail: 'pieter@hakkenbroek.com',
    agentPhone: '+31 20 555 0101',
  },
  {
    id: 2,
    title: 'Jordaan Loft Apartment',
    description: 'Stunning industrial loft in the heart of Jordaan. Soaring ceilings, exposed brick walls, and floor-to-ceiling windows flood this space with natural light. Recently converted from a historic warehouse.',
    address: 'Bloemgracht 82',
    city: 'Amsterdam',
    postalCode: '1016 LJ',
    price: 1850000,
    propertyType: 'Loft',
    listingType: 'sale',
    bedrooms: 3,
    bathrooms: 2,
    squareMeters: 210,
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
    ],
    amenities: ['Exposed Brick', 'High Ceilings', 'Rooftop Terrace', 'Smart Home', 'Underfloor Heating'],
    featured: true,
    status: 'active',
    agentName: 'Sanne de Vries',
    agentEmail: 'sanne@hakkenbroek.com',
    agentPhone: '+31 20 555 0102',
  },
  {
    id: 3,
    title: 'Oud-Zuid Family Villa',
    description: 'Elegant family villa in prestigious Oud-Zuid neighbourhood. Classic Amsterdam School architecture with modern extensions. Large south-facing garden, separate guest house, and triple garage.',
    address: 'Apollolaan 115',
    city: 'Amsterdam',
    postalCode: '1077 AR',
    price: 4200000,
    propertyType: 'Villa',
    listingType: 'sale',
    bedrooms: 6,
    bathrooms: 4,
    squareMeters: 450,
    images: [
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80',
    ],
    amenities: ['South Garden', 'Guest House', 'Triple Garage', 'Pool House', 'Home Cinema', 'Wine Cellar', 'Smart Security'],
    featured: true,
    status: 'active',
    agentName: 'Pieter van Dijk',
    agentEmail: 'pieter@hakkenbroek.com',
    agentPhone: '+31 20 555 0101',
  },
  {
    id: 4,
    title: 'De Pijp Penthouse',
    description: 'Spectacular penthouse with 360-degree views over Amsterdam. Two private terraces, designer kitchen by Piet Boon, and a private elevator. Located in the vibrant De Pijp district.',
    address: 'Ferdinand Bolstraat 88',
    city: 'Amsterdam',
    postalCode: '1072 LJ',
    price: 1650000,
    propertyType: 'Penthouse',
    listingType: 'sale',
    bedrooms: 3,
    bathrooms: 2,
    squareMeters: 185,
    images: [
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800&q=80',
    ],
    amenities: ['360 Views', 'Private Terrace', 'Piet Boon Kitchen', 'Private Elevator', 'Concierge'],
    featured: false,
    status: 'active',
    agentName: 'Emma Bakker',
    agentEmail: 'emma@hakkenbroek.com',
    agentPhone: '+31 20 555 0103',
  },
  {
    id: 5,
    title: 'Grachtengordel Townhouse',
    description: 'Meticulously restored townhouse on a quiet canal in the Grachtengordel. Original stucco work, marble fireplaces, and a secluded courtyard garden. A piece of Amsterdam history.',
    address: 'Keizersgracht 521',
    city: 'Amsterdam',
    postalCode: '1017 DP',
    price: 3200000,
    propertyType: 'Townhouse',
    listingType: 'sale',
    bedrooms: 4,
    bathrooms: 3,
    squareMeters: 280,
    images: [
      'https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=800&q=80',
      'https://images.unsplash.com/photo-1600566752229-250ed79470f8?w=800&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
    ],
    amenities: ['Stucco Work', 'Marble Fireplaces', 'Courtyard Garden', 'Period Details', 'Library'],
    featured: false,
    status: 'active',
    agentName: 'Sanne de Vries',
    agentEmail: 'sanne@hakkenbroek.com',
    agentPhone: '+31 20 555 0102',
  },
  {
    id: 6,
    title: 'Zuidas Corporate Rental',
    description: 'Premium furnished apartment in the Zuidas business district. Perfect for expats and corporate relocations. Fully serviced with cleaning, concierge, and gym access included.',
    address: 'Gustav Mahlerlaan 1020',
    city: 'Amsterdam',
    postalCode: '1082 MA',
    price: 4500,
    propertyType: 'Apartment',
    listingType: 'rent',
    bedrooms: 2,
    bathrooms: 2,
    squareMeters: 120,
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    ],
    amenities: ['Furnished', 'Concierge', 'Gym Access', 'Parking', 'Cleaning Service', 'High Speed Internet'],
    featured: false,
    status: 'active',
    agentName: 'Emma Bakker',
    agentEmail: 'emma@hakkenbroek.com',
    agentPhone: '+31 20 555 0103',
  },
  {
    id: 7,
    title: 'Plantage Expat Residence',
    description: 'Beautifully appointed apartment in the green Plantage neighbourhood. Close to Artis Zoo and the Hortus Botanicus. Ideal for international families seeking a leafy Amsterdam experience.',
    address: 'Plantage Middenlaan 62',
    city: 'Amsterdam',
    postalCode: '1018 DH',
    price: 3800,
    propertyType: 'Apartment',
    listingType: 'rent',
    bedrooms: 3,
    bathrooms: 2,
    squareMeters: 145,
    images: [
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80',
      'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80',
    ],
    amenities: ['Furnished', 'Garden Access', 'Close to Parks', 'International School Zone', 'Parking'],
    featured: false,
    status: 'active',
    agentName: 'Pieter van Dijk',
    agentEmail: 'pieter@hakkenbroek.com',
    agentPhone: '+31 20 555 0101',
  },
  {
    id: 8,
    title: 'Watergraafsmeer Family Home',
    description: 'Spacious family home in Watergraafsmeer with a large garden. Recently renovated with an open-plan living area and a modern kitchen. Quiet residential street near parks and schools.',
    address: 'Middenweg 188',
    city: 'Amsterdam',
    postalCode: '1098 GR',
    price: 950000,
    propertyType: 'Family Home',
    listingType: 'sale',
    bedrooms: 4,
    bathrooms: 2,
    squareMeters: 195,
    images: [
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
    ],
    amenities: ['Large Garden', 'Open Plan Living', 'Modern Kitchen', 'Near Schools', 'Parking'],
    featured: false,
    status: 'active',
    agentName: 'Sanne de Vries',
    agentEmail: 'sanne@hakkenbroek.com',
    agentPhone: '+31 20 555 0102',
  },
]

export function getFeaturedListings() {
  return listings.filter((l) => l.featured)
}

export function getListingById(id: number) {
  return listings.find((l) => l.id === id)
}

export function getAllListings() {
  return listings
}

export function getListingsByType(type: string) {
  return listings.filter((l) => l.listingType === type)
}
