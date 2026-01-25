# Teaching Myself React (Project-Based)

A project-driven React learning repo built via pair programming.

The goal is to ramp from fundamentals to senior/architect-level greenfield patterns through a sequence of module capstones, with tests and professional standards applied throughout.

## Course goals

- Become productive with modern React + TypeScript quickly.
- Learn React mental models (rendering, state, effects, composition) rather than memorizing APIs.
- Build a portfolio of small capstone projects that increase in complexity.
- Practice BDD-style development with Vitest across modules.
- Keep work organized and reviewable using PRs + tags.

## Repo structure

- `syllabus/`
  - The learning path, module outlines, and checkpoints.
- `projects/`
  - Capstone projects (one per module).

Start here:

- `syllabus/README.md`

## Standards (rubric)

Each module/capstone should aim to meet these “professional baseline” standards:

- **Correctness**
  - Features behave as specified by acceptance criteria.
  - Edge cases are handled intentionally.
- **Clarity**
  - Components and hooks have clear responsibilities.
  - State is placed intentionally (local first; shared only when necessary).
- **Testing**
  - Unit/component tests are added as we build (BDD-style: given/when/then).
  - Prefer behavior tests over implementation details.
- **Security & hygiene**
  - Secrets are not committed (env files are ignored).
  - Dependencies are kept minimal and intentional.
- **Maintainability**
  - Small, reviewable changes.
  - Consistent naming and folder organization.

Tooling (lint/format/test/typecheck) is applied **per-project** to keep modules focused.

## Git workflow (chronological branches + module tags)

Work is organized using a global chronological branch ID plus module number.

- **No direct commits to `main`** (unless explicitly intended)
- **Branch format**
  - `b###-m##-<short-slug>`
  - Example: `b004-m02-tictactoe-history`
- **Commit / PR title format**
  - `B### M##: <short summary>`
- **Merge strategy**
  - Prefer squash merge to keep `main` readable
- **Tagging (durable checkpoints on `main`)**
  - `m##-start`
  - `m##-cp01`, `m##-cp02`, ...
  - `m##-complete`

Details live in:

- `.windsurf/rules/git-chronological-branches-and-tags.md`
- `.windsurf/workflows/react-learning-git-flow.md`

## Resources

Tracked course resources are listed in `syllabus/README.md`.
