## Agency-Vue

Modern, production-grade agency website template built with Vue 3 and Vite. It ships with a clean, component-driven architecture, ready-to-use sections (Hero, Services, Projects/Case Studies, Testimonials, Team, Contact), and sensible defaults for performance, SEO, and maintainability. Ideal for agencies, freelancers, and studios who want to launch quickly without sacrificing quality.

### Highlights

- **Component-driven UI** with reusable sections and UI primitives
- **Fast DX** via Vite (instant HMR) and Vue SFCs
- **Router-ready** with prebuilt views and example routes
- **Lean styling** with plain CSS and scoped component styles
- **Mock data stores** to centralize content samples (swap with API or Pinia)
- **Optimized assets** under `public/` with modern formats (WebP)

---

## Tech Stack

- **Vue 3 (Composition API)**: Modular, maintainable SFCs, solid reactivity model
- **Vite**: Lightning-fast dev server and optimized builds by default
- **Vue Router**: Clean URLs and route-based code organization
- **ESLint**: Consistent code quality and style enforcement
- **Plain CSS**: Framework-agnostic styling via `src/assets`; easy to adopt Tailwind/UnoCSS later

Why this stack?

- Prioritizes developer ergonomics and performance
- Keeps the template unopinionated about CSS frameworks while remaining extensible
- Aligns with modern Vue best practices and straightforward deployment targets

---

## Installation

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm 9+ (or pnpm/yarn; adapt commands accordingly)

### Setup

```sh
npm install
```

### Development

```sh
npm run dev
```

Visit the local URL printed in the terminal (typically `http://localhost:5173`).

### Production Build

```sh
npm run build
```

The build output is generated under `dist/`. You can preview it locally:

```sh
npm run preview
```

### Linting

```sh
npm run lint
```

---

## Usage Guide

Common tasks:

- Edit content lists under `src/stores/*.js`
- Replace images in `public/` and update paths in components where needed
- Add or remove sections by modifying the relevant view files in `src/views/`
- Tweak global styles in `src/assets/main.css`

To add a new Home section:

1. Create `src/components/HomePage/HomePageAwards.vue`
2. Implement the template and styles
3. Import and add it in `src/views/HomeView.vue`

To add a new route/page:

1. Create `src/views/CareersView.vue`
2. Register it in `src/router/index.js`
3. Add a nav link via `src/stores/navigations.js` (rendered by `components/Links/TheNavigation.vue`)

---

## Project Structure

```
.
├─ public/                 # Static assets served as-is (images, icons, WebP)
├─ src/
│  ├─ assets/             # Global styles and asset-level CSS
│  │  ├─ main.css         # Base styles, variables, resets
│  │  └─ swiperComment.css# Styles for comments swiper/carousel
│  ├─ components/         # Reusable UI and section components
│  │  ├─ AboutPage/       # About page-specific sections
│  │  ├─ Btn/             # Button components (tags, primary buttons)
│  │  ├─ ContactPage/     # Contact page header/sections
│  │  ├─ HomePage/        # Home: Hero, Services, Projects, Clients, About
│  │  ├─ Links/           # Navigation-related components
│  │  ├─ Ui/              # Generic UI (countdown, transitions)
│  │  ├─ PepoleComments.vue # Testimonials/comments slider
│  │  ├─ TheFooter.vue    # Global footer
│  │  └─ TheHeader.vue    # Global header (wraps navigation)
│  ├─ router/
│  │  └─ index.js         # Vue Router configuration and routes
│  ├─ stores/             # Simple data stores (mock data / global state)
│  │  ├─ comments.js      # Testimonials/comments data and helpers
│  │  ├─ navigations.js   # Navigation links
│  │  ├─ projects.js      # Portfolio/case study items
│  │  ├─ services.js      # Services listing
│  │  └─ Team.js          # Team members
│  ├─ views/              # Route-level views (pages)
│  │  ├─ AboutView.vue    # About page composed of AboutPage components
│  │  ├─ CaseStudiesView.vue # Case studies/portfolio page
│  │  ├─ ContactView.vue  # Contact page
│  │  ├─ HomeView.vue     # Landing page
│  │  └─ ProjectView.vue  # Individual project page
│  ├─ App.vue             # Root app component, layout shell
│  └─ main.js             # App entry: createApp, install router, mount
├─ index.html             # Base HTML template
├─ vite.config.js         # Vite configuration
├─ eslint.config.js       # ESLint configuration
├─ package.json           # Scripts and dependencies
└─ README.md              # Project documentation
```

### Directory/Component Roles

- **public/**: Static assets available at root paths (e.g., `/favicon.ico`, `/background.webp`).
- **src/assets/**: Global CSS and shared asset styles; keep base tokens and resets here.
- **src/components/**: Presentation components. Prefer small, focused SFCs with minimal props.
- **src/views/**: Route-level containers that compose sections into full pages.
- **src/router/**: Route map and feature-level code splitting opportunities.
- **src/stores/**: Centralized, lightweight data sources for the demo; easy to swap for API/Pinia.
- **App.vue**: Shell layout; header/footer composition.
- **main.js**: App bootstrap.

---

## Architecture & Design Philosophy

### Component-Driven, Presentational-First

Components are designed to be presentation-focused with clear inputs and minimal side effects. Data is read from simple stores to keep UI code easy to reason about.

### Lightweight State via Stores

This starter centralizes mock data under `src/stores/` to avoid prop-drilling and duplicate constants. For production, replace with:

- **Pinia** for reactive stores and devtools support
- API calls (REST/GraphQL) with proper loading/error states

### Styling Strategy

Lean CSS using global base styles and component-scoped styles. This keeps bundle size small and avoids lock-in. You can adopt Tailwind/UnoCSS or a component library later if preferred.

### Routing & Navigation

Route-level views compose section components. Navigation data comes from `stores/navigations.js` and is rendered by `components/Links/TheNavigation.vue`.

### Performance Considerations

- Modern image formats (`.webp`) in `public/`
- Vite-optimized builds and tree-shaking
- Simple DOM structure to keep runtime light

---

## Best Practices & Conventions

- **Naming**: Descriptive, intention-revealing names for components, props, and variables
- **Props & Emits**: Keep props minimal; emit events instead of mutating parent state
- **Separation of Concerns**: Views compose sections; sections remain stateless where possible
- **Scoped Styles**: Prefer scoped component styles; reserve global CSS for tokens/base
- **Accessibility**: Provide `alt` text for images; use semantic HTML; ensure focus states
- **Linting**: Keep code passing ESLint; avoid disabling rules unless justified
- **Imports**: Prefer absolute or well-structured relative imports; keep import order consistent

---

## Routes

- **Home (`/`)**: Hero/header, services, projects, clients, about teaser
- **About (`/about`)**: Team, who-we-are, mission
- **Case Studies (`/case-studies`)**: Project grid/list with links to details
- **Project (`/projects/:id`)**: Single project detail page
- **Contact (`/contact`)**: Contact hero/intro and CTA

---

## Possible Use Cases

- Agency/Studio marketing websites
- Freelancer portfolios with case studies
- Productized service landing pages
- Starter for custom Vue marketing sites

---

## Roadmap & Future Improvements

- SEO meta management per-route (e.g., integrate `@unhead/vue`)
- Route-level code splitting and lazy loading of heavy sections
- Image `srcset/sizes` and responsive variants; optional CDN integration
- Replace demo stores with Pinia or remote APIs
- Unit tests (Vitest + Vue Test Utils) and E2E (Playwright)
- i18n via `vue-i18n`
- Analytics + consent management

---

## Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Run locally; add tests if applicable
4. Ensure lint passes: `npm run lint`
5. Open a PR with a clear description and screenshots for UI changes

Commit style suggestions:

- `feat(home): add awards section`
- `fix(footer): correct social links aria-labels`
- `chore(ci): run lint on pull_request`

---

## License

MIT License. See `LICENSE` if present. If missing, you may add one with standard MIT text for open-source use.

---

## Acknowledgments

- Built with Vue 3 and Vite
- Inspired by common agency site patterns and best practices
- Placeholder images in `public/` — replace with your own or ensure usage rights

---

## Configuration & References

- Vite configuration reference: `https://vite.dev/config/`
- Recommended IDE: VS Code with the official Vue extension (disable Vetur)
- Browser: Vue.js Devtools enabled
