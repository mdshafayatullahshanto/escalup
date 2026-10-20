# escalup — Offshore Engineering Services

A modern, high-converting, professional web application built for **escalup**, an offshore engineering services partner (CAD + Mechanical Design + MEP + BIM) based in Sector 3, Uttara, Dhaka, Bangladesh.

Engineered specifically to build immediate trust with foreign procurement managers, engineering directors, and contractors across Europe, the UK, North America, the Middle East, and Australia.

---

## 🚀 Quick Start Instructions

Make sure you have Node.js (v18+) installed.

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production (optimized output in /dist)
npm run build

# 4. Preview production build locally
npm run preview
```

The application runs on `http://localhost:5173/` by default.

---

## 🎨 Brand & Design Direction

- **Brand Name**: Always written in lowercase: `escalup`.
- **Primary Accent**: Exact extracted logo teal `#2E756E`.
- **Palette Tokens**:
  - Primary Accent: `#2E756E`
  - Dark Headings / Footer: `#142F2C` / `#14201D`
  - Soft Card Tints: `#E8F1EF` / `#F0F6F5`
  - Background: `#F4F6F5`
  - Subtle Borders: `#DBE3E0`
- **Typography**: Geometric sans-serif Poppins via Google Fonts (`300`, `400`, `500`, `600`, `700`, `800`).
- **Official Logo**: Uses the exact circular `e` mark with the horizontal slice (`/public/e-logo-2e756e.svg` and `/public/e-logo-white.svg` for dark footer backgrounds).

---

## 📂 Project Structure

```
escalup/
├── public/
│   ├── e-logo-2e756e.svg                 # Primary official brand logo (SVG)
│   ├── e-logo-white.svg                  # White brand logo for dark backgrounds
│   ├── e-logo-2e756e.png                 # High-resolution PNG logo
│   ├── escalup-capability-statement.pdf  # Downloadable PDF brochure
│   ├── robots.txt                        # Search crawler instructions
│   └── sitemap.xml                       # SEO sitemap with all service routes
├── src/
│   ├── assets/                           # Image assets & SVG icons
│   ├── components/
│   │   ├── AboutSection.jsx              # Company story, 4 pillars, quote & founder
│   │   ├── CADWireframeVisual.jsx        # Interactive technical CAD hero wireframe
│   │   ├── CalendlyModal.jsx             # 30-min intro call booking modal
│   │   ├── CapabilityModal.jsx           # Capability PDF download modal & capture
│   │   ├── ContactSection.jsx            # Validated quote form & Uttara Dhaka map
│   │   ├── FAQAccordion.jsx              # Accessible Framer Motion accordion
│   │   ├── FinalCTABand.jsx              # Full-width high-converting action band
│   │   ├── FloatingActions.jsx           # Floating scroll-to-top button (desktop)
│   │   ├── Footer.jsx                    # Comprehensive dark footer with service map
│   │   ├── Hero.jsx                      # Headline, dual CTAs, trust chips & CAD visual
│   │   ├── Icons.jsx                     # Custom SVG icons (LinkedIn)
│   │   ├── Logo.jsx                      # Reusable brand logo component
│   │   ├── Navbar.jsx                    # Sticky shrink navbar + mobile drawer
│   │   ├── OffshoreModel.jsx             # 6 value pillars, models table & world clock
│   │   ├── PilotProject.jsx              # Low-risk paid pilot project offer
│   │   ├── ProcessTimeline.jsx           # 6-step engineering workflow timeline
│   │   ├── SampleProjects.jsx            # Filterable projects with layout animation
│   │   ├── SectionHeading.jsx            # Reusable section title and badge
│   │   ├── StatsStrip.jsx                # Animated number counters
│   │   ├── StickyMobileCTA.jsx           # Mobile persistent action bar (Quote + Email)
│   │   ├── TestimonialsSection.jsx       # Client feedback (auto-hides when empty)
│   │   ├── ToolsSoftware.jsx             # Software text badges & compatibility note
│   │   ├── WhoWeWorkWith.jsx             # 4 persona cards (OEMs, Firms, MEP, Startups)
│   │   └── WorldClock.jsx                # Live multi-timezone coordination widget
│   ├── data/
│   │   ├── company.js                    # Address, email, and working hours
│   │   ├── faq.js                        # 9 international procurement FAQs
│   │   ├── projects.js                   # 6 sample projects across Mechanical, MEP, BIM, PLM
│   │   ├── services.js                   # 7 service categories, deliverables, and tools
│   │   ├── stats.js                      # 4 key performance metrics
│   │   ├── team.js                       # Founder / Lead engineer bio & social links
│   │   ├── testimonials.js               # Client reviews (add items anytime)
│   │   └── tools.js                      # Category-wise software platforms
│   ├── pages/
│   │   ├── HomePage.jsx                  # Complete one-page conversion journey
│   │   ├── NotFoundPage.jsx              # 404 handler
│   │   ├── ServiceDetailPage.jsx         # Dedicated /services/:slug SEO landing pages
│   │   └── ThankYouPage.jsx              # Conversion confirmation with confetti
│   ├── utils/
│   │   └── analytics.js                  # GA4, Plausible, and event tracking hooks
│   ├── App.css                           # Application style overrides
│   ├── App.jsx                           # Router, global modals, and code-split routes
│   ├── index.css                         # Tailwind directives & blueprint grid styles
│   └── main.jsx                          # React application root
├── .env                                  # Active environment keys & tracking IDs
├── .env.example                          # Sample environment keys
├── index.html                            # Master HTML with Poppins & JSON-LD SEO schema
├── package.json                          # Dependencies & scripts
├── postcss.config.js                     # PostCSS config
├── tailwind.config.js                    # Tailwind color tokens, font & shadow presets
└── vite.config.js                        # Vite configuration
```

---

## ✏️ How to Edit Content & Information Anytime

All content is decoupled from components into clean, plain JavaScript files in `/src/data/`:

| What you want to update | Edit this file |
|---|---|
| **Contact info, Address, Email (`contact.escalup@gmail.com`)** | [`src/data/company.js`](src/data/company.js) |
| **Services, Deliverables, Descriptions** | [`src/data/services.js`](src/data/services.js) |
| **Sample Projects, Scope, Categories** | [`src/data/projects.js`](src/data/projects.js) |
| **FAQ Questions & Answers** | [`src/data/faq.js`](src/data/faq.js) |
| **Founder / Lead Engineer details** | [`src/data/team.js`](src/data/team.js) |
| **Stats Strip numbers & suffixes** | [`src/data/stats.js`](src/data/stats.js) |
| **Software platforms & versions** | [`src/data/tools.js`](src/data/tools.js) |
| **Client Testimonials** | [`src/data/testimonials.js`](src/data/testimonials.js) (automatically appears when items exist) |

---

## 🔗 Connecting the Quote Form to Formspree or EmailJS

The contact form in [`src/components/ContactSection.jsx`](src/components/ContactSection.jsx) is already wired with a submission hook:

1. Create a free form at [Formspree](https://formspree.io/) (or [Web3Forms](https://web3forms.com/)).
2. Copy your form ID / URL (e.g., `https://formspree.io/f/xvgowpqr`).
3. Open [`.env`](.env) and set:
   ```env
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
   ```
4. Restart or rebuild the application. Submissions will now be emailed directly to your inbox and redirect users seamlessly to `/thank-you`!

---

## 📅 Setting Up Your Cal.com / Booking Link

To change the booking URL for intro calls:
1. Open [`.env`](.env) and edit:
   ```env
   VITE_BOOKING_URL=https://cal.com/escalup/book-a-call
   ```
2. Or change it globally in [`src/data/company.js`](src/data/company.js) under `contact.bookingUrl` / `contact.calendlyUrl`.

---

## 📊 Analytics & Event Tracking (GA4 / Plausible)

Pre-configured tracking hooks dispatch events for all critical conversion milestones:
- `quote_form_submit`: Dispatched when a quote request is sent.
- `call_booking_click`: Dispatched when any "Book a Call" button is clicked.
- `capability_statement_download`: Dispatched when the PDF dossier is downloaded.

To enable **Google Analytics 4**:
1. Add your Measurement ID in [`.env`](.env):
   ```env
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
2. Add the Google Analytics snippet into [`index.html`](index.html).

---

## 🌐 Deploying to Production

### Vercel
```bash
npx vercel
```
Or connect your GitHub repository to Vercel. Framework preset: **Vite**.

### Netlify
Build command: `npm run build`
Publish directory: `dist`

### Self-Hosted / Nginx
Build the distribution bundle using `npm run build` and point your web server root to `/dist`.

---

© escalup. Built for international engineering excellence.
