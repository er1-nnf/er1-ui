# ER1 Website Development TODO

## Completed

### Phase 1: Project Setup & Foundation
- [x] Initialize Next.js 15 project with TypeScript, Tailwind, ESLint, App Router
- [x] Install dependencies (GSAP, Lenis)
- [x] Create project directory structure
- [x] Move assets (logos, mockups) to public/
- [x] Create App Store and Play Store badge SVGs

### Phase 2: Design System
- [x] Configure Tailwind v4 with brand tokens (colors, typography)
- [x] Set up DM Sans + DM Mono fonts
- [x] Create global CSS with gradient variables
- [x] Create brand tokens file (src/styles/brand.ts)

### Phase 3: Core Components
- [x] LenisProvider - Smooth scroll wrapper
- [x] Header - Sticky navigation with mobile menu
- [x] Footer - Links, social icons, store badges
- [x] CookieBanner - GDPR cookie consent
- [x] Button - Primary/Secondary/Outline/Ghost variants
- [x] Badge - Status indicators
- [x] Input/Textarea - Form fields with validation states
- [x] Card/FeatureCard/StepCard - Content cards
- [x] Accordion - FAQ accordion

### Phase 4: Animations
- [x] GSAP configuration (src/lib/gsap.ts)
- [x] Lenis smooth scroll setup (src/lib/lenis.ts)
- [x] useGSAP hook with ScrollTrigger
- [x] useLenis hook
- [x] ScrollReveal component
- [x] StaggerReveal component
- [x] BlindsGradient background effect

### Phase 5: Home Page Sections
- [x] Hero - Headline, CTAs, phone mockup, blinds background
- [x] HowItWorks - 3-step process with mockups
- [x] Features - 6 feature cards grid
- [x] ForBusiness - B2B benefits preview
- [x] Testimonials - Social proof (placeholder content)
- [x] FAQ - Accordion with common questions
- [x] Newsletter - Email signup form (UI only)
- [x] CTA - Download section with store badges

### Phase 6: Secondary Pages
- [x] /kako-funkcionira - Detailed walkthrough with mockups
- [x] /za-tvrtke - B2B page with contact form
- [x] /kontakt - Contact page with form

### Phase 7: Legal Pages
- [x] /pravila-privatnosti - Privacy policy (Croatian)
- [x] /uvjeti-koristenja - Terms of use (Croatian)
- [x] /kolacici - Cookie policy (Croatian)

### Phase 8: Design Polish & Refinements
- [x] Add proper diacritics (č, ć, š, ž, đ) to all Croatian text
- [x] Redesign Hero section with 2 floating cards and SVG connector lines
- [x] Add "Member of Paytent" logo and partner logos to TrustedBy section
- [x] Redesign HowItWorks with stacked person image + phone mockup layout
- [x] Redesign Features section with centered phone and 4 square cards with connector lines
- [x] Redesign CTA section with phone extending above the gradient card
- [x] Update Testimonials with real avatar images (using pravatar.cc)
- [x] Unify gradient backgrounds across Hero, CTA, and Testimonials (color2="#2341d6")
- [x] Style /kako-funkcionira page with gradient hero and badges
- [x] Style /za-tvrtke page with gradient hero and badges
- [x] Style /kontakt page with gradient hero and badges

---

## In Progress / To Do

### Design
- [ ] Redesign Footer (deferred for later)

### Content & Copy
- [ ] Review and refine Croatian copy on all pages
- [ ] Update testimonials with real content when available
- [ ] Add real App Store / Play Store URLs when available

### Assets
- [ ] Create favicon from logo
- [ ] Create Open Graph image (og-image.png)
- [ ] Create Apple touch icon
- [ ] Optimize mockup images (compress PNGs)
- [ ] Consider WebP format for images

### Functionality
- [ ] Implement newsletter form submission (connect to email service)
- [ ] Implement contact form submission (connect to backend/email)
- [ ] Add Google Analytics integration (with cookie consent)
- [ ] Add form validation feedback

### SEO & Performance
- [ ] Add metadataBase to layout.tsx for OG images
- [ ] Create sitemap.xml
- [ ] Create robots.txt
- [ ] Add structured data (JSON-LD) for organization
- [ ] Run Lighthouse audit and optimize
- [ ] Test Core Web Vitals

### Polish & QA
- [ ] Test on mobile devices (iOS Safari, Android Chrome)
- [ ] Test on desktop browsers (Chrome, Firefox, Safari, Edge)
- [ ] Fix any responsive design issues
- [ ] Test cookie banner flow
- [ ] Test all navigation links
- [ ] Test smooth scroll behavior
- [ ] Verify animations on slower devices

### Deployment
- [ ] Set up hosting (Vercel recommended)
- [ ] Configure custom domain (er1.hr)
- [ ] Set up SSL certificate
- [ ] Configure environment variables if needed
- [ ] Set up CI/CD pipeline

---

## Nice to Have (Future)
- [ ] Add video to "Kako funkcionira" page
- [ ] Add blog section for updates
- [ ] Add localization support (English version)
- [ ] Add dark mode support
- [ ] Add loading states/skeletons
- [ ] Add error boundaries
- [ ] Add 404 custom page
- [ ] Add accessibility improvements (ARIA labels)
- [ ] Add print styles for legal pages

---

## Notes
- Newsletter form is UI-only placeholder - integrate with email service when ready
- Contact forms are UI-only - need backend or email service integration
- Testimonials use placeholder content - replace with real testimonials when available
- App Store/Play Store links are placeholder URLs
- Footer redesign deferred for later iteration
