# Selecting React as a Tool (Module 00)

This note is a rubric for choosing React: what it’s great at, the costs you pay, and when it’s a poor fit.

Course context:

- Public: https://www.pluralsight.com/courses/react-18-big-picture
- Player: https://app.pluralsight.com/ilx/video-courses/react-18-big-picture/course-overview

## Reasons to choose React

### Flexibility

- React is a library: you can adopt it incrementally and scale it up as requirements grow.
- The component model supports composition, reuse, and gradual refactors.

### Developer experience

- Strong tooling ecosystem (linting, formatting, TypeScript, testing, devtools).
- Component boundaries can make UI work easier to reason about and maintain.

### Corporate backing (benefits and risks)

- Benefits: long-term investment and maintenance; React is unlikely to disappear; strong momentum around the core library.
- Risks: strategic direction can be influenced by Meta-scale priorities; changes can ripple through the ecosystem; some orgs have policy/perception concerns.

### Community

- Large community and hiring pool.
- Many libraries and learning resources.

### Performance

- React can perform very well for interactive apps with frequent UI updates.
- There are multiple levers for performance work (render profiling, memoization, code splitting, SSR/SSG via frameworks).

### Testability

- Component-level testing maps well to UI behavior and user flows.
- A good ecosystem for unit/component/integration testing.

## Tradeoffs / costs

### Framework vs library

- Because React is not a full framework, you must choose and integrate:
  - routing
  - data fetching/caching
  - forms/validation
  - state management approach
  - build tooling and (often) SSR/SSG strategy

### Concise vs explicit

- Many patterns feel concise at first but can become subtle as apps grow (effects, derived state, memoization).
- Teams need conventions to keep “clever” abstractions from becoming fragile.

### Template-centric vs JavaScript-centric

- React is JavaScript/TypeScript-centric, which is powerful but shifts more responsibility into code.

### JavaScript/TypeScript-centric library (benefits and risks)

- Benefits (especially for web developers): builds directly on HTML/CSS/JS mental models; high flexibility; full language features for composition.
- Risks (especially for non-web backgrounds): the web platform surface area (DOM/events/CSS/layout/a11y) plus build tooling can be a steep ramp.

### Separate vs single file

- React supports multiple styles:
  - co-located UI + logic
  - separated concerns across files/folders
- Without team alignment, codebases can become inconsistent.

### Standard vs non-standard

- React has “React-native” conventions (JSX, hooks patterns) that don’t always match “plain web” expectations.
- This can be a learning and onboarding cost.

### Community vs corporate

- You can choose community-driven tools or more “blessed” solutions.
- Flexibility increases the risk of churn (re-platforming from one popular tool to another).

## Reasons not to choose React (or when it’s a poor fit)

### HTML vs JSX differences

- JSX is not HTML; attribute differences and JS-driven rendering patterns can confuse beginners.
- The “looks like HTML” aspect can create false confidence early on.

### Build steps

- Modern React typically implies a build step and toolchain.
- For small sites or minimal interactivity, the overhead may not be worth it.

### Version conflicts

- The ecosystem has many moving pieces; mismatched versions across core libraries and tooling can create friction.

### Outdated resources online

- Plenty of tutorials and snippets are stale; teams need discipline to filter recommendations and keep dependencies current.
