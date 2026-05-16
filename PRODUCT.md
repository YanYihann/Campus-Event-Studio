# Campus Event Studio Website Product Context

## Product Name

Campus Event Studio Website

## Product Type

Bilingual one-page brand and booking website

## Register

Brand

## Product Purpose

Campus Event Studio Website introduces a campus event service start-up for the WKU community and converts interested visitors into booking or consultation requests. The site needs to make the service feel approachable, organized, affordable, and reliable while supporting both English and Simplified Chinese users.

## Target Users

- WKU students
- Student organizations
- Faculty
- Staff
- Campus departments

## Core User Needs

- Quickly understand what Campus Event Studio does
- Compare available event service packages
- View suitable campus event examples
- Submit a booking or consultation request
- Contact the team easily
- Switch between English and Chinese

## Business Goals

- Build trust for a new campus start-up
- Increase brand awareness in the WKU community
- Encourage first-time consultations
- Present affordable and flexible packages
- Support future customer acquisition and repeat use

## Core Services

- Event Planning
- Theme Decoration
- Party Supplies & Furniture Rental
- Venue Booking Assistance
- Promotional Support
- On-site Coordination
- Cleanup Support

## Required Website Sections

- Home
- Services
- Packages
- Booking
- Portfolio
- Contact

## Brand Values

- Creativity
- Convenience
- Affordability
- Reliability

## Tone

Friendly, professional, campus-focused, trustworthy, clear, and not overly promotional.

## Language Requirements

- English and Simplified Chinese
- Default language: English
- Language switcher visible in Navbar
- All user-facing copy should come from a translation dictionary or structured content configuration
- Form labels, placeholders, validation errors, success messages, FAQ, CTA, navigation, cards, and footer must support both languages

## Design Requirements

The website must strictly follow `DESIGN.md`.

- Use a warm cream canvas as the page foundation
- Use the coral accent carefully for primary CTAs and selected emphasis moments
- Use dark surfaces for contrast sections, featured packages, portfolio moments, footer, or booking emphasis
- Use editorial serif headings and humanist sans body text
- Keep the main content width near 1200px
- Use a 96px section rhythm on desktop with responsive reductions on smaller screens
- Use soft rounded corners based on the documented radius scale
- Use minimal shadows, relying on color blocks, hairline borders, spacing, and surface contrast for depth
- Avoid cold blue or purple technology styling
- Avoid a pure white page background

## Functional Requirements

- Responsive single-page layout
- Anchor navigation
- Mobile navigation
- Language switching with persistent state
- Booking form with validation
- Frontend-only simulated submit success
- Portfolio filter tabs
- FAQ section
- Accessible labels and focus states

## Non-goals

- No real backend integration
- No payment system
- No user login
- No external random images
- No large unnecessary dependencies

## Technical Direction

- Use Vite, React, TypeScript, and Tailwind CSS for implementation unless a later project constraint changes this direction
- Keep copy and structured content centralized so bilingual support is maintainable
- Avoid unnecessary state libraries for isolated UI state
- Verify package availability before importing any third-party dependency
- Keep implementation frontend-only for the first version
