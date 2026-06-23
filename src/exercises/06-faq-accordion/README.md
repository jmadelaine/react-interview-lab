# Exercise 06: Build an FAQ accordion

**Suggested time:** 30 minutes

**File to edit:** `FaqAccordionExercise.tsx`

**Do not edit:** `data.ts`

## Interviewer brief

> The help-centre page already displays a list of FAQ questions. The state and markup are present, but clicking a question does nothing. Complete the toggle behavior so customers can reveal and hide answers. Please talk through your approach while you work.

## Requirements

Complete `toggleItem` so that:

1. Clicking a closed question opens its answer.
2. Clicking the open question closes it.
3. Opening a different question closes the currently open answer.
4. The existing `aria-expanded` value and plus/minus icon update correctly.
5. The FAQ data is not changed or copied into state.

## Acceptance checks

- All answers are closed when the page first loads.
- Clicking “How do I change my account email?” displays its answer.
- Clicking the same question again hides its answer.
- Opening the invoice question while another answer is open leaves only the invoice answer visible.
- The browser console contains no React key warnings.

## Out of scope

Do not add animation, search, category filtering, or an accordion library. Only the toggle behavior is required.

## If you finish early

Explain how the implementation would change if product wanted multiple answers to remain open.
