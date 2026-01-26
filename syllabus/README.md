# React Fast-Track Syllabus

This repo is organized as:

- `syllabus/` — learning path, lesson notes, exercises, checkpoints.
- `projects/` — hands-on projects, one folder per project.

## Plan of attack (fast + secure)

### Fast ramp principles

- Build small projects in increasing complexity; each one introduces 1-3 new concepts.
- Prefer React + TypeScript + Vite early to align with modern tooling.
- Learn React mental models (rendering, state, effects) before advanced architecture.
- Treat each lesson as pair-programming: implement, refactor, add tests, ship.

### Secure / reliable workflow

- Keep secrets out of git (`.env*` ignored); document required env vars.
- Use npm.
- Watch dependencies: minimal packages, avoid abandoned libs, audit regularly.
- Tooling (lint/format/test/typecheck) is set up per-project to keep modules focused.
- For API-driven modules, use `json-server` as the default mock API (fast CRUD, minimal setup).

### Testing (cross-cutting)

- Each module includes unit/component tests using Vitest (BDD-style: "given/when/then").
- Prefer testing behavior over implementation details.
- Keep a small set of happy-path and edge-case tests per feature.
- Add E2E smoke tests only once the app has routing and critical flows.

## Modules

### Module 0 — Tooling & React baseline (0.5–1 day)

- Repo structure and conventions
- Vite + React + TS
- React DevTools
- Package scripts and basic troubleshooting

Capstone project:

- Create a minimal React + TS app with 2 components and one reusable hook.

### Module 1 — React fundamentals (1–2 days)

- Components, props, JSX
- Rendering model: re-rendering, reconciliation basics
- State with `useState`
- Events, forms, controlled components

Capstone project:

- A small "UI widgets" app (counter, toggle, controlled form) with clean component boundaries.

### Module 2 — Effects & data flow (1–2 days)

- `useEffect` mental model (sync vs async work)
- Fetching data; aborting; race conditions
- Derived state vs source of truth
- Lifting state up

Capstone project:

- Tic-tac-toe with derived state (winner), move history, and optional time-travel.

### Module 3 — Composition & reuse (1–2 days)

- Component composition patterns
- Custom hooks
- `useMemo`/`useCallback` correctly (and when not to)
- Context API for app-level state

Capstone project:

- Build a reusable modal + toast system using composition and custom hooks.

### Module 4 — Routing & app structure (1–2 days)

- React Router
- Layout routes, loaders (or equivalents)
- Error boundaries and error UI
- Feature-folder organization

Capstone project:

- A small multi-page app with nested routes, a not-found page, and an error boundary.

### Module 5 — Server interactions (2–3 days)

- API clients, caching strategies
- React Query (TanStack Query) mental model
- Optimistic updates
- Authentication basics (token handling, storage pitfalls)

Capstone project:

- CRUD app with caching and an optimistic update flow (backed by a mock API).

### Module 6 — Forms & validation (1–2 days)

- Complex forms patterns
- React Hook Form + Zod
- Accessibility and UX

Capstone project:

- A multi-step form with validation, error summary, and accessibility checks.

### Module 7 — Redux state management (1–2 days)

- Redux Toolkit (slices, reducers, actions)
- Async flows with RTK thunks
- Selectors and memoization
- Testing reducers and connected components
- Optional: Redux-Saga overview (when it is useful)

Capstone project:

- Add Redux Toolkit to an existing capstone and move a complex UI state slice into Redux.

### Module 8 — Testing deep dive & automation (1–2 days)

- Testing strategy: unit vs component vs integration vs E2E
- Vitest + Testing Library patterns and pitfalls
- Mocking fetch and network boundaries
- E2E smoke tests (Playwright)

Capstone project:

- Harden a previous capstone test suite: stable selectors, fixtures, mocks, and one E2E smoke flow.

### Module 9 — Performance & advanced patterns (2–4 days)

- Rendering performance debugging
- Code splitting, lazy routes
- Suspense (practical usage)
- State management tradeoffs (Context vs Zustand vs Redux)

Capstone project:

- Performance audit and optimization pass on an existing capstone.

### Module 10 — SSR & production deployment concerns (2–4 days)

- SSR vs CSR vs SSG and tradeoffs
- Next.js fundamentals (routing, data fetching, server/client boundaries)
- Runtime vs build-time configuration (env vars, secrets)
- Deployment shape: static assets vs Node server/serverless
- SSR-focused CI/CD considerations (build artifacts, caching, smoke checks)

Capstone project:

- Convert an existing capstone to SSR (or add an SSR surface) and document the production deploy shape.

### Module 11 — Capstone (3–7 days)

- A production-style app with routing, auth, caching, forms, tests, SSR, deployment

Capstone project:

- Full production-style build: end-to-end feature delivery, tests, SSR deploy notes, and a deployment checklist.

## Resources

- https://app.pluralsight.com/paths/skill/react-18
- https://www.youtube.com/watch?v=H6QAY_VqvUc&list=PLC3y8-rFHvwg9D7EOSEBabuutIdKZN5V3 (supplemental concept reinforcement)
- https://www.udemy.com/course/react-the-complete-guide-incl-redux/

## Pair-programming loop (how we’ll work)

For each lesson/project:

- Define the goal and acceptance criteria.
- Implement the smallest working slice.
- Refactor for clarity.
- Add types + tests.
- Add a short retrospective: what you learned, what was confusing, what’s next.
