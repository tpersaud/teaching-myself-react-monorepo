---
description: Planning: GitHub Issues + Project board workflow (labels, milestones, kanban)
---

# Planning — GitHub Issues + Project Board Flow

A lightweight workflow for tracking this repo’s learning work using GitHub Issues + a Project board.

## Rule of engagement

- Every unit of work gets an Issue first:
  - watching a video
  - reading a chapter
  - writing notes
  - planning a capstone
  - implementing a feature
  - fixing a bug
  - refactoring

## Principles

- The syllabus is the authoritative "what" and "order" (waterfall-ish learning path).
- The Project board is the execution tracker (kanban) for "what I'm doing now".
- Use labels and milestones so work stays associated to a module.

## Standard flow (Issue -> Board -> PR -> Close)

1. Create/select the Issue

   - Title it as a single objective.
   - Include a definition of done.

2. Label it

   - `module:##`
   - `type:*`
   - Optional: `prio:*`, `blocked`

3. Assign a milestone

   - e.g. `Module 00 — Tooling & React baseline`

4. Add it to the Project board

   - Move it to `Ready` when it has a clear definition of done.

5. Do the work in a branch + PR

   - Follow `/react-learning-git-flow`.
   - In the PR body, include:
     - `## Issues`
     - `Closes #123`

6. Merge the PR
   - The Issue should auto-close on merge.

## Labels (issue "tags")

Use labels to classify issues:

- Module labels:
  - `module:00`, `module:01`, ...
- Type labels:
  - `type:docs`
  - `type:capstone`
  - `type:tooling`
  - `type:spike`
  - `type:bug`
- Optional:
  - `blocked`
  - `prio:high`, `prio:med`, `prio:low`

## Milestones (waterfall control)

- Create one milestone per module:
  - `Module 00 — Tooling & React baseline`

## Project board (kanban execution)

Recommended columns:

- Backlog
- Ready
- Doing
- Blocked
- Review/PR
- Done

Suggested views:

- Module 00 view (filter by `module:00`)
- Spikes view (filter by `type:spike`)

## What an issue should contain

### Tasks (Clear/Complicated)

- Goal
- Definition of done
- Notes/links (optional)

### Spikes (Complex)

- Question / hypothesis
- Timebox (e.g. 60–120 minutes)
- What you will produce (notes, decision, tiny prototype)
- Exit criteria (when to stop)

## Linking PRs to issues (auto-close)

- Every PR should include an `## Issues` section.
- If it completes an issue, use an auto-close keyword:
  - `Closes #123`
  - `Fixes #123`
  - `Resolves #123`
- If none:
  - `## Issues`
  - `None`

This ensures issues close automatically when PRs merge into `main`.
