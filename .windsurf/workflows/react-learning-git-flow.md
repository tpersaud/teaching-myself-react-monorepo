---
description: Planning: React learning git flow (branches, PRs, tags)
---

# Planning — React Learning Git Flow

A guided workflow for working in this repo while keeping changes ordered by a chronological branch ID (`b###`) and module (`m##`), using PRs and tags as durable checkpoints.

## Steps

1. Create/select the Issue (required)

   - Before starting any work (videos, planning, docs, code), ensure there is a GitHub Issue.
   - Add it to the Project board.
   - Apply required labels:
     - `module:##` (e.g. `module:00`)
     - `type:*` (e.g. `type:docs`, `type:capstone`, `type:tooling`, `type:spike`)
   - Assign it to the module milestone:
     - `Module 00 — Tooling & React baseline` (for module 00)
   - Put the issue number somewhere convenient (you will reference it in the PR body).
   - Guidance lives in:
     - `.windsurf/workflows/github-issues-board-flow.md`

2. Identify scope

   - Decide: is this **syllabus/docs** or **capstone code**?
   - Pick the module number: `m00`, `m01`, ...

3. Choose the next branch number

   - Find the last used `b###` in your branch list.
   - Increment by 1 (keep it zero-padded).

4. Create branch

   - Create a new branch using:
     - `b###-m##-<short-slug>`
   - Example:
     - `b004-m00-docs-add-module-00-folder-structure`

5. Add branch description (intent)

   - Add a longer goal/intent description so you remember what this branch is for.
   - Preferred storage: git branch description:
     - `git branch --edit-description`
   - Suggested format:
     - Goal:
     - Definition of done:
     - Notes/links:
   - Copy the same text into the PR description as a fallback.

6. Make changes

   - Prefer small commits.
   - Keep changes focused to the branch intent.

7. Commit

   - Commit message format:
     - `B### M##: <short summary>`

8. Push + PR

   - Open a PR into `main`.
   - PR title format:
     - `B### M##: <short summary>`
   - When creating the PR via `gh`, prefer a body file so markdown renders correctly:
     - `gh pr create --base main --head <branch> --title "..." --body-file <path>`
   - Avoid embedding literal `\n` sequences in a single quoted `--body` string.
   - PR body should follow this structure:
     - `## Summary`
     - `## Included`
     - `## Issues`
       - `Closes #123` (or `Fixes #123` / `Resolves #123`)
       - If none: `None`
   - GitHub auto-close keywords are interpreted only when the PR targets the default branch (`main`).
   - Prefer squash merge.

9. Tag checkpoint (optional)

   - After merge to `main`, add an annotated tag if this is a milestone.
   - Recommended tags:
     - `m##-start`
     - `m##-cp01`, `m##-cp02`, ...
     - `m##-complete`

10. Cleanup

- Delete merged branches after PR merge.
- Rely on PR history and tags for navigation.
