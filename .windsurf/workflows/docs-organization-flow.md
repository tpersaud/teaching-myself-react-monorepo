---
description: Planning: docs organization flow (README vs syllabus vs notes)
---

# Planning — Docs Organization Flow

A lightweight workflow for keeping documentation consistent across:

- `README.md` (GitHub-facing overview)
- `syllabus/` (rubric, learning plan, module structure)
- `notes/` (learning process notes and durable insights)

## What goes where

### `README.md`

Purpose:

- Public, GitHub-friendly description of the repo.
- Explains the intent, standards at a high level, and how to navigate.

Put in `README.md`:

- Course goals and what you’re building
- Repo structure overview
- High-level standards (not the detailed rubric)
- Git workflow summary (branch/PR/tag conventions)
- Links to `syllabus/README.md` and `notes/README.md`

Avoid in `README.md`:

- Long, evolving module-by-module notes
- Detailed checklists that change frequently (keep those in `syllabus/` or `notes/`)

### `syllabus/`

Purpose:

- The authoritative learning path.
- Rubric-related content and module expectations.

Put in `syllabus/`:

- Syllabus outline and module list
- Capstone descriptions per module
- Rubric and definition-of-done per module
- Learning checkpoints and tags
- Tooling decisions that affect many modules (e.g., default mock API)

Recommended structure (as it grows):

- `syllabus/README.md` (index)
- `syllabus/modules/m01.md`, `syllabus/modules/m02.md`, ... (optional)

### `notes/`

Purpose:

- Documents about the learning process as a whole.
- Durable notes that aren’t the syllabus/rubric.

Put in `notes/`:

- Glossary and mental models
- Debugging playbook / common gotchas
- Architectural decision notes (why we picked a pattern/tool)
- Retrospectives (what worked, what didn’t)
- Code review checklists and personal heuristics

## When to update what

- Update `syllabus/` when:

  - a module’s scope changes
  - a capstone changes
  - the rubric/standards change
  - you adopt a default tool/process used across multiple projects

- Update `notes/` when:

  - you learn a durable lesson you’ll reuse
  - you hit a repeated bug/pitfall worth documenting
  - you decide a rule-of-thumb you want to keep

- Update `README.md` when:
  - the repo’s public narrative changes
  - navigation changes (new major folders)
  - you want to improve clarity for future readers

## Commit/PR hygiene (docs changes)

- If a change is mostly docs-only, keep it docs-only.
- Prefer small commits and keep changes scoped.
- Use the same branch naming and PR title conventions as code changes.
