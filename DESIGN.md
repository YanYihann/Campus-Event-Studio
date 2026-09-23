# Campus Event Studio Design System

This document defines the visual and interaction language for the Campus Event Studio website. The system should feel warm, organized, approachable, and trustworthy for a campus audience.

## Principles

1. **Warm, not corporate.** Use cream surfaces and warm ink instead of a cold SaaS palette.
2. **Clear before decorative.** Visitors should understand services, packages, and the booking path quickly.
3. **Campus-specific.** Copy and examples should reflect student organizations, departments, and WKU events.
4. **Bilingual by design.** English and Simplified Chinese content must receive equal layout and readability support.
5. **Accessible interaction.** Keyboard focus, labels, contrast, reduced motion, and responsive behavior are baseline requirements.

## Color tokens

| Token | Value | Use |
| --- | --- | --- |
| `canvas` | `#FAF9F5` | Page background |
| `surface-soft` | `#F5F0E8` | Quiet section background |
| `surface-card` | `#EFE9DE` | Cards and grouped content |
| `ink` | `#141413` | Primary text |
| `body` | `#3D3D3A` | Body copy |
| `muted` | `#6C6A64` | Supporting copy |
| `hairline` | `#E6DFD8` | Borders and separators |
| `coral` | `#CC785C` | Primary actions and selected emphasis |
| `coral-active` | `#A9583E` | Hover and active actions |
| `dark` | `#181715` | Featured package, booking emphasis, footer |
| `success` | `#5DB872` | Successful form state |
| `error` | `#C64545` | Validation errors |

Coral is an accent, not a page background default. Do not introduce cold blue or purple as a competing brand color.

## Typography

- Display headings: an editorial serif stack such as `Georgia, 'Times New Roman', serif`.
- Body and controls: a humanist sans stack such as `Inter, system-ui, sans-serif`.
- Desktop hero: up to 64 px with tight line height.
- Section heading: 36–48 px on desktop.
- Body: 16 px minimum with approximately 1.55 line height.
- Small supporting text: 13–14 px; never use tiny text for essential information.

Chinese text must use a system CJK fallback and should not depend on an unavailable Latin display face.

## Layout and spacing

- Main content width: approximately 1200 px.
- Desktop section rhythm: 96 px; reduce progressively on tablet and mobile.
- Prefer left-aligned editorial layouts and deliberate asymmetry over repeated centered cards.
- Use 8, 12, and 16 px corner radii according to component size.
- Rely on surface contrast and hairline borders; keep shadows subtle.

## Components

### Navigation

- Sticky or consistently reachable.
- Expose Home, Services, Packages, Portfolio, Booking, and Contact.
- Keep the language switcher visible.
- Booking is the primary action.

### Buttons

- Primary: coral background, white text, 40–44 px minimum height.
- Secondary: cream background, ink text, visible border.
- Animate only `transform`, `opacity`, or color; respect `prefers-reduced-motion`.

### Cards

- Use cards only when they clarify grouping or comparison.
- A featured package may use the dark surface.
- Keep package differences scannable and avoid hidden conditions.

### Forms

- Every input needs a persistent label.
- Show errors next to the relevant field and summarize submit failure when needed.
- Use clear focus rings and do not rely on color alone.
- The current submit is simulated; copy must not imply a real booking was created.

## Content rules

- Keep all user-facing copy in structured bilingual content.
- Avoid generic claims such as “next-gen,” “revolutionary,” or “best-in-class.”
- Do not use fake customer counts, testimonials, guarantees, or partner logos.
- Mark example portfolio work and placeholder prices clearly until real data is approved.
- Prefer concrete response-time and service-scope language once operational details are confirmed.

## Motion

- Use restrained reveal and hover motion.
- Typical duration: 160–280 ms for controls, up to 500 ms for section reveals.
- Avoid parallax or continuous animation that distracts from booking information.
- Provide a reduced-motion path.

## Responsive behavior

- Mobile navigation must be keyboard accessible and dismissible.
- Service and package layouts collapse without changing reading order.
- Booking fields remain at least 44 px high.
- No horizontal scrolling at 320 px viewport width.
- Both languages must be tested because Chinese and English copy wrap differently.

## Quality checklist

- Semantic landmarks and heading order
- Keyboard-only navigation
- Visible focus states
- Form labels and helpful validation
- WCAG AA contrast for text and controls
- Reduced-motion support
- English and Simplified Chinese parity
- No placeholder contact details presented as real
- No external random imagery without approval and attribution
- `npm run typecheck` and `npm run build` pass


