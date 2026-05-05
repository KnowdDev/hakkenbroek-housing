# Funda API Integration Requirements

## Overview
This document outlines what is required to set up a two-way API connection with **Funda** (funda.nl), the largest real estate platform in the Netherlands, so that listings from the Hakkenbroek website can be pushed directly to Funda and vice versa.

## What Funda Offers

### 1. Funda XML Feed (Push to Funda)
Funda accepts property listings via an **XML feed** that follows the Funda Aanbod (Offer) XML schema. This is the standard way real estate agencies syndicate listings to Funda.

### 2. Funda Partner API (Pull from Funda)
Funda provides a Partner API for agencies to retrieve listing data, analytics, and lead information.

---

## What We Need From You (Hakkenbroek)

### Required Credentials

| Item | Description | How to Obtain |
|------|-------------|---------------|
| **Funda Makelaar Account** | Active real estate agency account on Funda | Contact Funda via makelaars@funda.nl or your account manager |
| **XML Feed URL Access** | Permission to submit XML feed | Provided by Funda after account verification |
| **Relatie ID (Relation ID)** | Your unique agency identifier in Funda's system | Assigned by Funda upon registration |
| **Partner API Key** | For accessing Funda's REST API | Request via Funda Partner Portal |
| **OAuth / API Credentials** | Authentication tokens for API access | Generated in Funda Partner Dashboard |

### Technical Requirements

1. **Funda XML Schema Compliance**
   - Our system must generate XML feeds conforming to Funda's `Aanbod` schema
   - Fields required: `titel`, `beschrijving`, `straat`, `postcode`, `woonplaats`, `vraagprijs`, `woonoppervlakte`, `aantalkamers`, etc.
   - Image URLs must be publicly accessible
   - Feed must be updated at least every 24 hours

2. **Image Hosting**
   - Funda requires property images to be hosted on publicly accessible URLs
   - Recommend: Cloudflare R2 or similar CDN for image storage
   - Images should be high-resolution (min 1200px wide)

3. **NL-BRAIN / VBO / NVM Membership**
   - Funda typically requires agency membership in a Dutch real estate association
   - Verify Hakkenbroek is registered with NVM, VBO, or NL-BRAIN

### Data Mapping (Hakkenbroek → Funda)

| Hakkenbroek Field | Funda XML Field | Notes |
|-------------------|-----------------|-------|
| `title` | `titel` | Max 100 chars |
| `description` | `beschrijving` | Plain text |
| `address` | `straat` + `huisnummer` | Split if needed |
| `postalCode` | `postcode` | Dutch format |
| `city` | `woonplaats` | e.g. "Amsterdam" |
| `price` | `vraagprijs` | In euros |
| `squareMeters` | `woonoppervlakte` | In m² |
| `bedrooms` | `aantalslaapkamers` | Integer |
| `propertyType` | `soort_woning` | Map to Funda types |
| `images[]` | `media` | URLs to images |
| `listingType` | `aanbod_type` | "koop" or "huur" |

### Next Steps

1. **Apply for Funda Makelaar Account** (if not already registered)
   - Visit: https://www.funda.nl/makelaars/
   - Or email: makelaars@funda.nl

2. **Request XML Feed Setup**
   - Once approved, Funda will provide:
     - Relatie ID
     - Feed submission URL (typically FTP or HTTPS POST)
     - XML schema documentation

3. **Provide Credentials to Dev Team**
   - Share the Relatie ID and any API keys securely
   - We will build the automated XML feed generator

4. **Testing Phase**
   - Feed validation with Funda's test environment
   - Image URL verification
   - Listing sync testing

### Estimated Timeline

| Phase | Duration |
|-------|----------|
| Funda account setup / approval | 1-2 weeks |
| XML feed development | 3-5 days |
| Testing & validation | 2-3 days |
| Go live | 1 day |

### Cost Consideration

- Funda charges a monthly fee based on the number of listings
- Typical: €200-500/month depending on package
- API access may have additional fees

---

## Contact

For questions about this integration:
- **Funda Makelaar Support**: makelaars@funda.nl
- **Technical Lead**: Provide dev team contact once ready

---

*Document created: May 2026*
*Status: Awaiting Funda account credentials from Hakkenbroek*
