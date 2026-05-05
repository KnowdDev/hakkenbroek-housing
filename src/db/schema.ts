import { pgTable, serial, varchar, text, integer, decimal, timestamp, boolean, jsonb } from 'drizzle-orm/pg-core'

export const listings = pgTable('listings', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  description: text('description'),
  address: varchar('address', { length: 255 }).notNull(),
  city: varchar('city', { length: 100 }).notNull(),
  postalCode: varchar('postal_code', { length: 20 }),
  price: decimal('price', { precision: 12, scale: 2 }).notNull(),
  propertyType: varchar('property_type', { length: 50 }).notNull(),
  listingType: varchar('listing_type', { length: 20 }).notNull(), // sale, rent, lease
  bedrooms: integer('bedrooms'),
  bathrooms: integer('bathrooms'),
  squareMeters: decimal('square_meters', { precision: 8, scale: 2 }),
  images: jsonb('images').$type<string[]>(),
  amenities: jsonb('amenities').$type<string[]>(),
  featured: boolean('featured').default(false),
  status: varchar('status', { length: 20 }).default('active'),
  agentName: varchar('agent_name', { length: 100 }),
  agentEmail: varchar('agent_email', { length: 255 }),
  agentPhone: varchar('agent_phone', { length: 50 }),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
})

export const inquiries = pgTable('inquiries', {
  id: serial('id').primaryKey(),
  listingId: integer('listing_id').references(() => listings.id),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 50 }),
  message: text('message'),
  status: varchar('status', { length: 20 }).default('new'),
  createdAt: timestamp('created_at').defaultNow(),
})
