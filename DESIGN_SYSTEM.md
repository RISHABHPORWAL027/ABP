# Global UI/UX Design System

> **Purpose:** This document defines the global visual, interaction, animation, typography, color, spacing, and component guidelines for the entire website.
>
> These rules should be treated as the **single source of truth** whenever creating or modifying pages, sections, components, cards, buttons, forms, navigation, footers, or other UI elements.

---

## 1. Core Design Philosophy

Build the website with a **modern, premium, clean, polished, and consistent visual language**.

The design should feel:

- Professional
- Modern
- Minimal but visually interesting
- Smooth and responsive
- Premium without being unnecessarily flashy
- Consistent across every page
- Reusable and scalable
- Accessible and easy to navigate
- Visually balanced on desktop, tablet, and mobile

Do not design every section independently.

Instead, establish a **global design system** and reuse the same:

- Color palette
- Typography
- Spacing system
- Border radius
- Shadows
- Button styles
- Animation principles
- Hover effects
- Card patterns
- Section patterns
- Heading hierarchy
- Responsive behavior

The website should look like **one coherent product**, not a collection of unrelated sections.

---

# 2. Visual Reference

Use the existing portfolio website as the primary visual reference:

**Reference:** https://dhaval-six.vercel.app/

When access to the reference website is available, inspect it before implementing the new website and identify:

- Primary brand color
- Secondary/accent color
- Background color
- Surface/card colors
- Text colors
- Heading colors
- Border colors
- Button colors
- Button hover behavior
- Border-radius style
- Shadow style
- Typography characteristics
- Navigation style
- Footer styling
- Card styling
- Hover interactions
- Scroll animations
- Page-transition behavior
- Overall spacing rhythm

The new website does **not** need to copy the reference website exactly.

Instead, preserve its **visual character and interaction language** while adapting it to the new website's content and requirements.

---

# 3. Global Color System

Always define colors centrally instead of hardcoding random colors throughout individual components.

Use a semantic color system such as:

```css
:root {
  --color-primary: ...;
  --color-primary-hover: ...;

  --color-secondary: ...;
  --color-accent: ...;

  --color-background: ...;
  --color-background-alt: ...;

  --color-surface: ...;
  --color-surface-hover: ...;

  --color-heading: ...;
  --color-text: ...;
  --color-text-muted: ...;

  --color-border: ...;
  --color-border-hover: ...;

  --color-success: ...;
  --color-warning: ...;
  --color-error: ...;
}
```

### Required palette structure

Every website should have at minimum:

1. **Primary color**
2. **Secondary color**
3. **Accent color**
4. **Main background color**
5. **Alternative background/surface color**
6. **Heading color**
7. **Body text color**
8. **Muted text color**
9. **Border color**

### Color rules

- Use the primary color consistently for important actions and brand elements.
- Use the secondary/accent color sparingly for visual emphasis.
- Maintain strong contrast between text and backgrounds.
- Do not introduce arbitrary colors into individual sections.
- Avoid excessive use of gradients.
- If gradients are used, they must belong to the established brand palette.
- Headings, buttons, links, icons, cards, and footer elements should visually belong to the same color system.
- Dark/light variations should be generated systematically from the core palette.

---

# 4. Typography System

Typography must have a clear hierarchy.

Use a consistent structure:

```
Display / Hero Heading
↓
H1
↓
H2
↓
H3
↓
H4
↓
Body
↓
Small / Caption
```

### Heading requirements

All headings should:

- Have a clear visual hierarchy.
- Use consistent font weights.
- Have appropriate line-height.
- Use the global heading color.
- Avoid excessive capitalization.
- Maintain consistent spacing above and below.
- Look good at every responsive breakpoint.

### Recommended semantic structure

```html
<h1>Main Page Heading</h1>
<h2>Major Section Heading</h2>
<h3>Component / Subsection Heading</h3>
<h4>Small Section Heading</h4>
<p>Supporting content...</p>
```

Do not use heading tags purely for visual sizing.
Heading hierarchy must remain semantically correct.

---

# 5. Hero Heading Typewriter Effect

For hero sections or designated headline text fields, use a **subtle automatic typewriter effect** where appropriate.

The typewriter animation should:

- Start automatically.
- Feel smooth and intentional.
- Use a natural typing speed.
- Avoid looking like a terminal or gimmicky developer effect.
- Work correctly on mobile.
- Not cause layout shifts.
- Respect reduced-motion accessibility preferences.
- Never make important content inaccessible.

---

# 6. Scroll Reveal Animations

Whenever the user scrolls to a new section, content should reveal itself with a **smooth, subtle entrance animation**.

Preferred behavior:

```css
Initial:
opacity: 0
transform: translateY(20px)

Visible:
opacity: 1
transform: translateY(0)
```

Use a smooth easing curve and moderate duration.

---

# 7. Global Motion System

Define animation tokens globally.

```css
:root {
  --duration-fast: 180ms;
  --duration-normal: 350ms;
  --duration-slow: 600ms;

  --ease-standard: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-smooth: cubic-bezier(0.16, 1, 0.3, 1);
}
```

---

# 8. Buttons

Buttons are important visual elements and should feel **smooth, modern, responsive, and slightly "poppy"**.

Every button should have:

- Clear hierarchy
- Comfortable padding
- Appropriate border radius
- Strong contrast
- Smooth hover transition
- Visible focus state
- Pressed state
- Consistent typography

---

# 9. Cards

Cards should use a consistent global component pattern.

Cards use:
- Consistent padding
- Consistent border radius
- Subtle border
- Controlled shadow
- Brand-compatible surface color
- Smooth hover interaction

---

# 10. Border Radius

Use a consistent radius system.

```css
:root {
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 18px;
  --radius-xl: 24px;
  --radius-pill: 999px;
}
```

---

# 11. Shadows

Shadows should be subtle and premium.

---

# 12. Navigation

Navigation should be clean, minimal, responsive, and smooth.

---

# 13. Sections

Divide every page into visually clear sections with consistent spacing and vertical rhythm.

---

# 14. Spacing System

Use a consistent spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 80px, 120px).

---

# 15. Responsive Design

Ensure mobile, tablet, laptop, desktop compatibility.

---

# 16. Images and Media

Consistent aspect ratios, radius, object-fit, and lazy loading.

---

# 17. Icons

Use one consistent icon family (e.g., Lucide React).

---

# 18. Footer

Footer with consistent palette, typography, navigation, social links, and copyright.

---

# 19. Hover Interactions

Consistent lift, shadow, and color transitions across interactive elements.

---

# 20. Focus and Accessibility

Visible focus states, ARIA, contrast, and `@media (prefers-reduced-motion: reduce)`.

---

# 21. Microinteractions

Button feedback, card lifts, form input focus, copy feedback.

---

# 22. Loading and Empty States

Brand skeletons and meaningful empty states.

---

# 23. Forms and Inputs

Consistent inputs with clear states: Default, Focused, Filled, Disabled, Error, Success.

---

# 24. Component Reusability

Create modular, reusable UI components.

---

# 25. Global Animation Utilities

`fade-up`, `fade-down`, `fade-left`, `fade-right`, `scale-in`, `stagger`, `typewriter`, `hover-lift`, `button-pop`.

---

# 26. Animation Timing Rules

150–250ms for UI micro-interactions, 250–450ms for component transitions, 400–700ms for scroll reveal.

---

# 27. Avoid These Design Problems

Avoid hardcoded random colors, inconsistent fonts, or excessive jarring animations.

---

# 28. Modern Design Pattern

Large editorial typography, clean grids, soft surfaces, scroll reveal, floating CTAs.

---

# 29. Content Hierarchy

Label → Heading → Description → Primary Content → Secondary Content → CTA.

---

# 30. Design Token Architecture

Centralized CSS variables / Tailwind v4 `@theme` configuration.

---

# 31. Implementation Priority

1. Establish System (Tokens, CSS)
2. Build Reusable Primitives (Button, Card, Badge, Container, Section, Input)
3. Build Global Components (Navbar, Footer, ScrollReveal, TypewriterText)
4. Build Page Sections
5. Refine Motion & Micro-interactions
6. Responsive Refinement
7. Final Visual Consistency Check

---

# 32. Reference Website Matching Rule

Primary visual reference: https://dhaval-six.vercel.app/
Preserve its visual character, dark/light theme tone, typography, card style, navigation, and hover behavior.

---

# 33. Global Quality Standard

All visual, animation, responsive, accessibility, and code quality criteria must pass before completion.

---

# 34. Final Instruction

Follow this design system as the single source of truth across the entire codebase.
