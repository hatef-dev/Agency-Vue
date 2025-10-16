# Agency-Vue

Agency-Vue is a modern, production-ready agency website template built with Vue 3 and Vite. It features a clean, component-driven architecture with reusable UI pieces for common agency sections such as Hero, Services, Portfolio/Case Studies, Testimonials, Team, and Contact. The template is ideal for agencies, freelancers, or studios looking to quickly launch a performant, SEO-friendly site with a straightforward developer experience.

## Key Features

- **Vue 3 + Vite**: Fast dev server, modern build pipeline, and first-class single-file components.
- **Component-Driven**: Clearly organized, reusable components for sections and UI elements.
- **Router-Ready**: Preconfigured `vue-router` with example pages (`Home`, `About`, `Case Studies`, `Contact`, etc.).
- **State via Stores**: Centralized data samples for services, projects, comments, and team members.
- **Responsive Design**: Mobile-first layout using CSS with utility classes and scoped styles.
- **Optimized Assets**: Uses WebP and modern image formats located under `public/`.

## Tech Stack and Rationale

- **Vue 3 (Composition API)**: Encourages modular, maintainable components with good type integration and reactivity model.
- **Vite**: Extremely fast HMR, optimized builds, and sensible defaults.
- **Vue Router**: Client-side routing for multi-page navigation and clean URLs.
- **ESLint**: Ensures consistent code quality and style during development.
- **Plain CSS**: Simple, framework-agnostic styling under `src/assets`. You can integrate Tailwind, UnoCSS, or a component library if preferred.

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
│  │  ├─ HomePage/        # Home sections (Hero, Services, Projects, Clients, About)
│  │  ├─ Links/           # Navigation-related components
│  │  ├─ Ui/              # Generic UI (countdown, transitions)
│  │  ├─ PepoleComments.vue # Testimonials/comments slider component
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
│  └─ main.js             # App entry, mounts Vue, installs router
├─ index.html             # Base HTML template
├─ vite.config.js         # Vite configuration
├─ eslint.config.js       # ESLint configuration
├─ package.json           # Scripts and dependencies
└─ README.md              # You are here
```

## Routes and Pages

- **Home (`/`)**: Aggregates hero/header, services, projects, clients, and about sections.
- **About (`/about`)**: Team, who-we-are, and mission sections.
- **Case Studies (`/case-studies`)**: Grid/list of projects with links to details.
- **Project (`/projects/:id`)**: Detail page for a single project.
- **Contact (`/contact`)**: Contact hero/intro and call-to-action with form placeholder.

## Core Components

- **Navigation (`components/Links/TheNavigation.vue`)**: Site-wide nav links; consumed by `TheHeader.vue`.
- **Header (`components/TheHeader.vue`)**: Global header including navigation and potentially logo.
- **Footer (`components/TheFooter.vue`)**: Global footer with contact info, links, and legal text.
- **Hero/Header Sections**:
  - `HomePage/HomePageHeader.vue`: Landing hero with primary messaging and CTA.
  - `ContactPage/ContactPageHeader.vue`: Contact page hero/intro section.
- **Content Sections**:
  - `HomePage/HomePageServices.vue`: Services overview using data from `stores/services.js`.
  - `HomePage/HomePageProjects.vue`: Featured projects from `stores/projects.js`.
  - `HomePage/HomePageClients.vue`: Client logos/testimonials section.
  - `HomePage/HomePageAboutUs.vue`: Brief about section linking to the About page.
  - `AboutPage/AboutPageWhoWeAre.vue`: Company overview/mission.
  - `AboutPage/AboutPageTeam.vue`: Team grid from `stores/Team.js`.
- **UI/Utilities**:
  - `Btn/TheButton.vue` and `Btn/TagButton.vue`: Reusable buttons.
  - `Ui/TheCountdown.vue`: Countdown/metrics UI.
  - `Ui/TransitionAnimation.vue`: Page/element transition effects.
  - `PepoleComments.vue`: Testimonials/comments carousel using `stores/comments.js`.

## Design and Architecture Notes

- **Why Vue 3 + Vite**: Rapid iteration with HMR, clean SFCs (script/setup), and excellent build performance. Vite provides sensible defaults and supports modern JS features and tree-shaking.
- **State/Data**: Lightweight stores in `src/stores/` centralize mock data and keep components focused on presentation. You can swap these with Pinia/Vuex or a backend API.
- **Styling**: Global CSS in `assets/main.css` plus component-scoped styles keeps styles close to the components that use them. Utility classes are used where pragmatic. No CSS framework is enforced to keep the template lean.
- **Images/Assets**: Use `public/` for static assets; prefer modern formats like WebP for performance.
- **Routing**: Route-driven views compose section-level components; easy to add new routes and pages.

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm 9+ (or pnpm/yarn, adapt commands accordingly)

### Installation

```sh
npm install
```

### Development

```sh
npm run dev
```

### Production Build

```sh
npm run build
```

### Linting

```sh
npm run lint
```

## Customization and Extension

### Add a New Section to Home

1. Create a component under `src/components/HomePage/`, e.g. `HomePageAwards.vue`.
2. Implement the section’s template and styles.
3. Import and insert it into `src/views/HomeView.vue`.

### Create a New Page

1. Add a view under `src/views/`, e.g. `CareersView.vue`.
2. Define its route in `src/router/index.js`.
3. Add a navigation link via `src/stores/navigations.js` and use `TheNavigation.vue` to render.

### Add a New Component

1. Place the component in a logical folder under `src/components/`.
2. Keep props minimal and well-named; emit events rather than mutating parent state.
3. Add styles scoped to the component to avoid global leakage.

### Update Data/Content

- Edit `src/stores/*.js` to change services, projects, comments, or team.
- Replace images in `public/` and update references as needed.

### Switch to a Store Library (Optional)

- Replace custom stores with **Pinia** if you need reactivity across components, SSR hydration, or devtools support.

## Performance and SEO Improvements (Ideas)

- **SEO**: Add meta tags per route (title, description, Open Graph). Consider `vue-router` navigation guards to set metadata or integrate a head manager (e.g., `@unhead/vue`).
- **Lazy Loading**: Code-split route views with dynamic imports in the router. Lazy load heavy components like carousels or sections below the fold.
- **Image Optimization**: Provide multiple resolutions and use `srcset`, `sizes`, and modern formats (WebP/AVIF). Consider a CDN.
- **Accessibility**: Audit with Lighthouse; ensure proper landmarks, alt text, focus states, and color contrast.
- **Testing**: Add unit tests with Vitest and component tests with Vue Test Utils; consider Playwright for E2E.
- **Analytics/Consent**: Integrate analytics with consent management for privacy compliance.
- **Internationalization**: Add `vue-i18n` if you need multilingual support.

## Contributing

Contributions are welcome! To propose a change:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feat/your-feature`.
3. Run the project locally and add tests if applicable.
4. Ensure lint passes: `npm run lint`.
5. Submit a pull request with a clear description and screenshots (if UI changes).

### Commit Style

- Use clear, descriptive commit messages (e.g., `feat(home): add awards section`).
- Keep PRs focused and small where possible.

## License

This project is provided under the MIT License. See the `LICENSE` file if present. If a license file is missing, the project is considered unlicensed; feel free to add `LICENSE` with MIT by default for open-source use.

## Acknowledgments

- Built with Vue 3 and Vite.
- Inspired by common agency website layouts and best practices.
- Image assets are placeholders; replace with your own or ensure you have rights to use them.

## Recommended IDE and Browser Setup

- **IDE**: [VS Code](https://code.visualstudio.com/) with [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (disable Vetur).
- **Browser**: Install Vue.js Devtools for Chrome/Edge/Brave or Firefox. Enable Custom Object Formatter in devtools for improved inspection.

## Configuration

See the [Vite Configuration Reference](https://vite.dev/config/) to customize build and dev server options.
