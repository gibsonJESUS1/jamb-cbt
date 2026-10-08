# JAMB Practice Studio — Next.js

A Next.js App Router app with React client components and a responsive phone/tablet/desktop layout. JAMB is the first exam supported; WAEC can be added later.

## Quick start

Install Node.js 20.9 or newer (Node.js 22/24 recommended), extract the ZIP and open a terminal in the project folder:

```bash
npm ci
npm run dev
```

Open http://localhost:3000. To check a production build:

```bash
npm test
npm run build
npm start
```

No environment variables or database are required for this starter.

## GitHub and Vercel

Create an empty GitHub repository. From this project folder:

```bash
git init
git add .
git commit -m "Initial JAMB CBT Next.js app"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

In Vercel, choose Add New Project, import the GitHub repository and use the Next.js framework preset. Keep the default build settings and deploy. The repository root must contain package.json. Do not use the static/Other settings from the previous ZIP.

## Features

- Student registration and login using a username and 4–8 digit local PIN.
- Separate attempt history for each student in the same browser.
- 80 original syllabus-based questions, 20 per subject: Use of English, Biology, Chemistry and Physics.
- Subject or mixed practice, question count and time limit.
- Question navigator, flags and next/previous controls.
- Saved progress across refreshes and sign-out; the timer continues while away.
- Immediate marking and explanations at submission or timer expiry.
- Responsive layout and controls with at least 44px tap targets.

## Project structure

- src/app/layout.js — root layout and metadata
- src/app/page.js — home route
- src/app/globals.css — responsive styles
- src/components/PracticeApp.js — React profile, dashboard, exam and review interface
- src/lib/questions.js — question bank
- src/lib/practice.js — selection, marking, timer and local profile helpers
- tests/practice.test.mjs — core functional tests

## Data and security boundaries

Profiles, active attempts and history are stored in localStorage under jamb-studio-v1. Records stay in the same browser, device and origin. Clearing storage deletes them. Moving to a new Vercel domain starts with empty records; accounts do not sync across devices.

The PIN hash is a convenience lock, not secure server authentication. Local records and question answers can be inspected or modified. Use this starter for practice, not secure assessments. There is no backend, central student dashboard, online account recovery or shared question management yet.

These are original questions based on topics in the provided syllabus PDFs, not imported past questions. They do not cover the full syllabus, prescribed English reading text or a complete UTME exam format. Scores are practice accuracy percentages, not official JAMB scores out of 400.

## Extending it

Edit src/lib/questions.js to add reviewed questions with four options, a zero-based answer index and an explanation. The src/lib/practice.js module isolates the scoring and attempt logic to support future database integration. Add secure server authentication and a database when moving beyond local profiles.

Actual device visual testing is still needed before inviting a training group.
