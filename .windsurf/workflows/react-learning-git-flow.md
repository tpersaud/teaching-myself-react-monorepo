---
description: Planning: React learning git flow (branches, PRs, tags)
---

# Planning — React Learning Git Flow

A guided workflow for working in this repo while keeping changes ordered by a chronological branch ID (`b###`) and module (`m##`), using PRs and tags as durable checkpoints.

## Steps

1. Identify scope

   - Decide: is this **syllabus/docs** or **capstone code**?
   - Pick the module number: `m00`, `m01`, ...

2. Choose the next branch number

   - Find the last used `b###` in your branch list.
   - Increment by 1 (keep it zero-padded).

3. Create branch

   - Create a new branch using:
     - `b###-m##-<short-slug>`
   - Example:
     - `b004-m00-docs-add-module-00-folder-structure`

4. Add branch description (intent)

   - Add a longer goal/intent description so you remember what this branch is for.
   - Preferred storage: git branch description:
     - `git branch --edit-description`
   - Suggested format:
     - Goal:
     - Definition of done:
     - Notes/links:
   - Copy the same text into the PR description as a fallback.

5. Make changes

   - Prefer small commits.
   - Keep changes focused to the branch intent.

6. Commit

   - Commit message format:
     - `B### M##: <short summary>`

7. Push + PR

   - Open a PR into `main`.
   - PR title format:
     - `B### M##: <short summary>`
   - When creating the PR via `gh`, prefer a body file so markdown renders correctly:
     - `gh pr create --base main --head <branch> --title "..." --body-file <path>`
   - Avoid embedding literal `\n` sequences in a single quoted `--body` string.
   - Prefer squash merge.

8. Tag checkpoint (optional)

   - After merge to `main`, add an annotated tag if this is a milestone.
   - Recommended tags:
     - `m##-start`
     - `m##-cp01`, `m##-cp02`, ...
     - `m##-complete`

9. Cleanup
   - Delete merged branches after PR merge.
   - Rely on PR history and tags for navigation.
