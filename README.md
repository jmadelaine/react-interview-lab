# React Interview Lab

Five isolated React + TypeScript exercises designed to simulate a 30-minute live-coding interview.

## Quick start

```bash
npm install
npm run dev
```

Open the local URL shown by Vite. The home page links to every exercise. Run `npm run typecheck` at any time to check TypeScript and `npm run build` for a production build.

## How to practice

1. Choose one exercise and open its `README.md` without opening `SOLUTION.md`.
2. Set a 30-minute timer.
3. Read the existing code before editing. Say what you notice out loud.
4. Implement the required behavior and manually check the stated acceptance criteria.
5. Explain tradeoffs and what you would improve with more time.
6. Compare your work with the exercise's `SOLUTION.md` only after the timer ends.

The starter intentionally compiles while leaving the core behavior unfinished. Search for `TODO: Exercise` to find the expected edit points:

| Exercise | Focus | Candidate brief |
| --- | --- | --- |
| 01 · Create a teammate | async form submission | [`src/exercises/01-create-user/README.md`](src/exercises/01-create-user/README.md) |
| 02 · Find a contact | filtering and sorting | [`src/exercises/02-address-book/README.md`](src/exercises/02-address-book/README.md) |
| 03 · Build an expense report | `map`, `filter`, and `reduce` | [`src/exercises/03-expense-report/README.md`](src/exercises/03-expense-report/README.md) |
| 04 · Search support issues | effects, debounce, async cleanup | [`src/exercises/04-issue-search/README.md`](src/exercises/04-issue-search/README.md) |
| 05 · Repair a shopping cart | immutable state and derived values | [`src/exercises/05-shopping-cart/README.md`](src/exercises/05-shopping-cart/README.md) |

## Project structure

Each exercise owns its page, data or mock API, candidate brief, and solution guide. The shared app contains only the home page, exercise layout, and styles. No router package or backend service is required; navigation uses hash URLs and all mock APIs run in the browser.

## Interviewer mode

The briefs are written to be read directly to a candidate. A practical interview flow is:

- 3 minutes: candidate reads the task and inspects the code
- 22 minutes: implementation, with the candidate explaining decisions
- 5 minutes: manual verification, tradeoffs, and follow-up questions

Reasonable solutions do not need to match the examples exactly. Evaluate observable behavior, state modeling, TypeScript safety, edge-case awareness, and how clearly the candidate communicates.
