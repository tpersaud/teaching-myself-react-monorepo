# Planning — Git chronology + module conventions (rules of engagement)

This rule file defines the rubric for keeping work ordered by module while learning React in this repo.

<goals>
- Keep learning work ordered and easy to navigate.
- Avoid direct commits to `main`.
- Prefer PRs and tags as durable checkpoints.
</goals>

<branch_naming>

- Use **global chronological branch IDs** that sort lexicographically.
- Default branch format:
  - `b###-m##-<short-slug>`
- `b###` is a zero-padded, monotonically increasing integer (e.g. `b001`, `b012`, `b120`).
- `m##` is a zero-padded module number (e.g. `m00`, `m01`).
- `<short-slug>` is kebab-case and describes the change.

<branch_description>

- In addition to the short slug, every branch should have a longer **intent/goal** description.
- Preferred storage: git branch description (`git branch --edit-description`).
- Include:
  - Module + goal
  - Success criteria / definition of done
  - Notes (optional): links, constraints, ideas to try
- If branch descriptions are not visible in your current UI, put the same text in the PR description.
  </branch_description>

Examples:

- `b001-m00-syllabus-initial`
- `b003-m00-capstone-react19-vite-init`
- `b010-m01-feature-controlled-form`
  </branch_naming>

<pull_requests>

- Do **not** commit directly to `main` unless explicitly instructed.
- Prefer PRs from `b###-m##-...` branches into `main`.
- Prefer **squash merge** to keep `main` readable.
- PR title format:
  - `B### M##: <short summary>`

<pr_body_formatting>

- PR descriptions should be real markdown (headings, lists, paragraphs).
- When creating PRs via `gh`, do **not** pass literal `\n` sequences in a single quoted `--body` string.
- Preferred:
  - `gh pr create --body-file <path>`
- Acceptable:
  - Create a file via heredoc and use `--body-file`.

<issue_linking>

- If a PR completes an issue, the PR body must include an `## Issues` section.
- Use GitHub auto-close keywords so issues close when the PR merges to `main`:
  - `Closes #123`
  - `Fixes #123`
  - `Resolves #123`
- If there is no issue for the work, explicitly state `## Issues\nNone`.
  </issue_linking>
  </pr_body_formatting>
  </pull_requests>

<issues_and_board_tracking>

- Use GitHub **Labels** as "tags" for issues.
- Use module labels for association:
  - `module:00`, `module:01`, ...
- Use type labels to distinguish work:
  - `type:docs`, `type:capstone`, `type:tooling`, `type:spike`, `type:bug`
- Prefer one GitHub Project board for the repo and track progress with columns (Backlog/Ready/Doing/Blocked/Review/Done).
- Prefer a Milestone per module (e.g. `Module 00 — Tooling & React baseline`).
  </issues_and_board_tracking>

<tagging>
- Use **annotated tags** for durable learning checkpoints.
- Tag format (recommended):
  - `m##-start`
  - `m##-cp01`, `m##-cp02`, ... (optional)
  - `m##-complete`
- Create tags on `main` (post-merge) unless explicitly instructed otherwise.
</tagging>

<repo_structure>

- Syllabus docs live under `syllabus/`.
- General learning notes live under `notes/`.
- Capstone projects live under `projects/` (one per module).
- Keep module-related docs and code grouped by module number.
- For what belongs where (README vs syllabus vs notes), follow:
  - `.windsurf/workflows/docs-organization-flow.md`
    </repo_structure>
