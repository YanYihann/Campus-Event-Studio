<div align="center">

# Campus Event Studio

A bilingual, campus-focused event-services website for the WKU community.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vite.dev/)

</div>

## Overview

Campus Event Studio is a responsive one-page brand and booking prototype for student organizations, faculty, staff, and campus departments. It presents event-planning services and packages in English and Simplified Chinese, then guides visitors toward a consultation request.

## Features

- English / Simplified Chinese language switcher with persistent preference
- Responsive anchor navigation and mobile menu
- Service groups for planning, decoration, rentals, venue support, promotion, coordination, and cleanup
- Comparable packages with a highlighted recommendation
- Filterable portfolio examples
- Booking form with client-side validation and simulated success state
- FAQ, contact, and accessible focus states

## Quick start

```bash
git clone https://github.com/YanYihann/Campus-Event-Studio.git
cd Campus-Event-Studio
npm ci
npm run dev
```

Use `npm run build` for a production build, `npm run build:pages` for GitHub Pages mode, and `npm run preview` to inspect the build locally.

## Technology

- React 19
- TypeScript
- Vite 7
- Tailwind CSS
- Native React state for language, navigation, filters, FAQ, and form behavior

## Project documentation

| File | Purpose |
| --- | --- |
| `PRODUCT.md` | Audience, goals, services, requirements, and non-goals |
| `SHAPE_BRIEF.md` | User journey, information architecture, interactions, and quality bar |
| `DESIGN.md` | Color, typography, spacing, component, and layout system |

## Project structure

```text
src/            React application and structured bilingual content
public/         Static assets
index.html      Vite entry page
PRODUCT.md      Product context
SHAPE_BRIEF.md  Experience brief
DESIGN.md       Design system
```

## Scope and limitations

The booking flow is frontend-only. The repository does not include a real backend, payment processing, authentication, or production scheduling. Replace placeholder contact, pricing, and portfolio content and connect an approved backend before launch.

## License

No license file is currently included.


