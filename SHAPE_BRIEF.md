# Campus Event Studio Website Shape Brief

## 1. Project Intent

Build a trustworthy, warm, campus-focused bilingual website that introduces Campus Event Studio and converts WKU users into consultation requests. The site should make event planning feel easier and more organized without sounding corporate or overly promotional.

## 2. Primary Conversion

Booking form submission or free consultation request.

## 3. Secondary Conversions

- View packages
- Contact the team
- Browse service examples
- Understand the full event support workflow
- Switch comfortably between English and Simplified Chinese

## 4. Main User Journey

Visitor lands on Home, understands the value, views services, compares packages, checks sample cases, then submits the booking form or contacts the team.

## 5. Information Architecture

Home -> Services -> Packages -> Portfolio -> Booking -> Contact

The Navbar should expose all sections as anchor links. Booking should also appear as the primary CTA in the Navbar and hero area.

## 6. Visual Direction

Follow `DESIGN.md` strictly.

- Warm cream background as the default page canvas
- Coral CTA moments used with restraint
- Dark contrast moments for emphasis and pacing
- Editorial but approachable typography
- Structured layouts with deliberate asymmetry on desktop
- Refined cards only where they clarify content hierarchy
- Minimal shadows and careful hairline borders
- No cold blue or purple technology aesthetic
- No pure white page background

### Design-Taste Frontend Baseline

- `DESIGN_VARIANCE`: 8, use asymmetric desktop layouts, bento-like groupings, and non-centered hero composition
- `MOTION_INTENSITY`: 6, use smooth CSS transitions and tasteful reveal patterns, only animating transform and opacity
- `VISUAL_DENSITY`: 4, keep the site spacious, readable, and suitable for first-time visitors

### Theme Scene

A WKU student organization lead or department coordinator reviews options on a laptop in a bright campus lounge between classes, looking for a reliable team that can make an event happen without adding planning stress.

### Color Strategy

Restrained with strong brand moments. The page should mostly live on cream and warm ink, with coral reserved for primary actions and dark surfaces used to create rhythm and trust.

## 7. Interaction Direction

- Smooth anchor navigation
- Clear hover and focus states
- Language switcher with immediate content update
- Language preference persisted locally
- Form validation with helpful inline error messages
- Frontend-only simulated successful submission state
- Portfolio filters
- Mobile menu
- FAQ interaction if appropriate
- Button active states should feel tactile through subtle transform feedback

## 8. Layout Strategy

The page should avoid a generic centered landing page pattern. The hero should use a left-aligned message and a right-side campus event planning artifact, such as an abstract planning board, rental checklist, or event setup preview built with native UI elements rather than external random imagery.

Services should be grouped by workflow instead of presented as identical cards. Packages should be easy to compare, with one recommended package visually distinguished through a dark surface. Portfolio should use filterable examples tied to realistic WKU campus event contexts. Booking should feel like a guided consultation request rather than a long administrative form.

Mobile layout must collapse aggressively to a clean single-column flow with stable spacing, clear touch targets, and no horizontal scrolling.

## 9. Component Strategy

- App shell
- Navbar
- Footer
- LanguageSwitcher
- SectionShell
- HeroSection
- ServicesSection
- PackagesSection
- PortfolioSection
- BookingSection
- ContactSection
- FAQSection
- Reusable UI primitives such as Button, Badge, Input, Select, Textarea, Card, FieldGroup, and FilterTabs

Components should be small enough to test and maintain. Data-driven sections should receive structured content rather than embedding copy directly in JSX.

## 10. Data Strategy

- Use a structured translation dictionary
- Keep service, package, portfolio, FAQ, navigation, CTA, footer, and form field copy in centralized data files
- Avoid scattered hardcoded copy
- Use stable IDs for service items, package tiers, portfolio cases, FAQ entries, and form fields
- Keep prices and numeric package details as shared structured values where possible
- Support English as the default language and Simplified Chinese as the alternate language

## 11. Key States

- Default: visitor can browse sections, switch language, view packages, filter portfolio, and complete the booking form
- Mobile menu open: navigation links and language switcher are accessible without layout shift
- Portfolio empty filter result: show a calm message and a way to view all cases
- Form validation error: show inline field-specific guidance below the field
- Form submitting: use layout-matched pending feedback, not a generic spinner
- Form success: show a clear confirmation that the request was received in the simulated frontend flow
- Form reset or follow-up: allow the visitor to submit another request or return to packages
- FAQ open and closed: content expands inline without using a modal

## 12. Content Requirements

The translation dictionary should cover:

- Navigation labels
- Hero title, subtitle, CTA labels, and supporting trust copy
- Service names and descriptions
- Package names, prices, included services, and recommendation labels
- Portfolio filter labels and case content
- Booking form labels, placeholders, helper text, validation errors, and success messages
- Contact details and response expectations
- FAQ questions and answers
- Footer copy

Copy should be direct, concrete, and campus-focused. Avoid generic promotional language such as "elevate", "unleash", or "next-gen".

## 13. Recommended Implementation Structure

```text
src/
  App.tsx
  main.tsx
  styles/
    globals.css
  data/
    translations.ts
    siteContent.ts
  components/
    layout/
      Navbar.tsx
      Footer.tsx
      SectionShell.tsx
      LanguageSwitcher.tsx
    sections/
      HeroSection.tsx
      ServicesSection.tsx
      PackagesSection.tsx
      PortfolioSection.tsx
      BookingSection.tsx
      ContactSection.tsx
      FAQSection.tsx
    ui/
      Button.tsx
      Badge.tsx
      Input.tsx
      Select.tsx
      Textarea.tsx
      Card.tsx
      FilterTabs.tsx
```

## 14. Quality Bar

- TypeScript strict enough for maintainability
- Semantic HTML
- Responsive layout
- Accessible form controls
- Accessible focus states
- No console or debug code
- No unused files
- Build should pass
- No unnecessary dependencies
- No emoji in code, visible copy, alt text, or labels
- No hardcoded bilingual copy scattered across components

## 15. Open Questions For Step 2

- Confirm whether contact details should use placeholders or real WKU-facing contact information
- Confirm package names and price ranges before final copy is locked
- Confirm whether the booking form should collect phone, WeChat, email, or all three
- Confirm whether the first version should use local illustrative UI elements only, or whether later approved brand photography can be added

## 16. Image Gate

Skipped for this documentation step because the user requested product and shape documents, not visual probes or implementation. Visual exploration can be added before final polish if the design direction needs comparison.
