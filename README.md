# Coach Homes Redesign

Fresh Next.js redesign for `coachhomesltd.com` using:

- `Next.js`
- `Supabase/Postgres`
- `Prisma`
- `NextAuth`
- `shadcn/ui`
- `AOS`

## Included

- Public pages: home, about, services, properties, property detail, blog, contact, submit property
- Property cards with prefilled WhatsApp enquiry links
- Public property submission flow that writes into the listings table
- Hidden admin login at `/admin`
- Admin analytics dashboard at `/admin/dashboard`

## Setup

1. Copy `.env.example` to `.env`
2. Set your Postgres or Supabase connection string
3. Run `npm install`
4. Run `npx prisma generate`
5. Run `npx prisma db push`
6. Run `npm run db:seed`
7. Run `npm run dev`

## Seeded admin

- Email: `admin@coachhomesltd.com`
- Password: `coachhomes-admin-2026`

Change that immediately after first use.
