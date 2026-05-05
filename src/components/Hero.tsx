import SearchBar from './SearchBar'

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80"
          alt="Amsterdam canal houses"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 lg:px-10 py-20">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Find your place in Amsterdam
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Boutique real estate since 2003. Premium canal houses, penthouses, and family homes across Amsterdam.
          </p>
        </div>

        <SearchBar />

        <div className="flex items-center justify-center gap-6 mt-8 text-white/80 text-sm">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-primary rounded-full" />
            200+ Properties
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-primary rounded-full" />
            20+ Years Experience
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-primary rounded-full" />
            Expat Specialists
          </span>
        </div>
      </div>
    </section>
  )
}
