# Hakkenbroek Housing Company

A premium real estate engine for Hakkenbroek Housing Company, a boutique real estate agency in Amsterdam.

## Features

- **Property Listings**: Browse buy, rent, and lease properties across Amsterdam
- **Responsive Design**: Beautiful Airbnb-inspired UI, fully responsive
- **Property Detail Pages**: Full gallery, amenities, agent info, and inquiry forms
- **Contact Form**: Lead capture for prospective buyers, renters, and sellers
- **Funda Integration Ready**: See `FUNDA_INTEGRATION.md` for setup requirements
- **Neon DB Schema**: Drizzle ORM with PostgreSQL (Neon) ready for production data

## Tech Stack

- Next.js 14 (App Router, Static Export)
- TypeScript
- Tailwind CSS
- Drizzle ORM + Neon PostgreSQL
- Lucide React (icons)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Database

Set up your Neon database and add the connection string to `.env.local`:

```
DATABASE_URL=postgresql://...
```

Run migrations:
```bash
npm run db:push
```

## Deployment

Build for static export:
```bash
npm run build
```

The `out/` folder contains the static site ready for deployment.

## Funda Integration

See [FUNDA_INTEGRATION.md](./FUNDA_INTEGRATION.md) for requirements to connect with Funda (Netherlands real estate platform).

## License

Private - Hakkenbroek Housing Company
