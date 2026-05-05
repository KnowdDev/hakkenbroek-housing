'use client'

import { useState } from 'react'
import { Search, MapPin, Home, Tag } from 'lucide-react'

interface SearchFilters {
  location: string
  type: string
  priceRange: string
}

export default function SearchBar({ onSearch }: { onSearch?: (filters: SearchFilters) => void }) {
  const [location, setLocation] = useState('')
  const [type, setType] = useState('all')
  const [priceRange, setPriceRange] = useState('all')

  const handleSearch = () => {
    onSearch?.({ location, type, priceRange })
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-canvas rounded-full border border-hairline shadow-[rgba(0,0,0,0.02)_0_0_0_1px,rgba(0,0,0,0.04)_0_2px_6px_0,rgba(0,0,0,0.1)_0_4px_8px_0] flex items-center h-16 md:h-[72px] overflow-hidden">
        {/* Location */}
        <div className="flex-1 px-6 md:px-8 border-r border-hairline h-full flex flex-col justify-center cursor-pointer hover:bg-surface-soft transition-colors min-w-0">
          <label className="text-xs font-bold text-ink tracking-wide">Location</label>
          <div className="flex items-center gap-2 mt-0.5">
            <MapPin className="w-4 h-4 text-muted shrink-0" />
            <input
              type="text"
              placeholder="Amsterdam..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="bg-transparent text-sm text-ink placeholder:text-muted outline-none w-full"
            />
          </div>
        </div>

        {/* Type */}
        <div className="hidden md:flex flex-col justify-center px-6 border-r border-hairline h-full cursor-pointer hover:bg-surface-soft transition-colors min-w-[140px]">
          <label className="text-xs font-bold text-ink tracking-wide">Type</label>
          <div className="flex items-center gap-2 mt-0.5">
            <Home className="w-4 h-4 text-muted shrink-0" />
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="bg-transparent text-sm text-ink outline-none cursor-pointer"
            >
              <option value="all">All Types</option>
              <option value="sale">Buy</option>
              <option value="rent">Rent</option>
              <option value="lease">Lease</option>
            </select>
          </div>
        </div>

        {/* Price */}
        <div className="hidden md:flex flex-col justify-center px-6 h-full cursor-pointer hover:bg-surface-soft transition-colors min-w-[140px]">
          <label className="text-xs font-bold text-ink tracking-wide">Price</label>
          <div className="flex items-center gap-2 mt-0.5">
            <Tag className="w-4 h-4 text-muted shrink-0" />
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="bg-transparent text-sm text-ink outline-none cursor-pointer"
            >
              <option value="all">Any Price</option>
              <option value="0-1000000">Under €1M</option>
              <option value="1000000-2000000">€1M - €2M</option>
              <option value="2000000-5000000">€2M - €5M</option>
              <option value="5000000+">€5M+</option>
            </select>
          </div>
        </div>

        {/* Search Orb */}
        <div className="px-3 md:px-4">
          <button
            onClick={handleSearch}
            className="w-12 h-12 md:w-14 md:h-14 bg-primary hover:bg-primary-active rounded-full flex items-center justify-center transition-colors shrink-0"
          >
            <Search className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}
