# Enventiva – Music Artist Explorer

A React application for searching music artists and viewing their details.

## Mission

- Search music artists by name
- Fetch results from TheAudioDB API
- Display artist cards (name + image)
- Navigate to artist details page (name, image, biography, top 3 songs)
- Handle loading, empty, and error states

## Tech Stack

- React (functional components) + TypeScript (strict)
- Vite
- TanStack Router
- TanStack Query
- Tailwind CSS

## API

TheAudioDB public API — https://www.theaudiodb.com/api_guide.php

- Search: `/search.php?s={name}`
- Artist by id: `/artist.php?i={id}`
- Top tracks: `/track-top10.php?s={artist}` (take first 3)

## Setup

```bash
cp .env.example .env   # API key defaults to "2" (TheAudioDB free tier)
npm install
npm run dev
```

## Scripts

| Script              | Purpose                          |
| ------------------- | -------------------------------- |
| `npm run dev`       | Start dev server                 |
| `npm run build`     | Production build                 |
| `npm run preview`   | Preview production build locally |
| `npm run typecheck` | Type-check without emitting      |
| `npm run lint`      | ESLint (v9 flat config)          |
| `npm run format`    | Prettier                         |

## Architecture

Feature-based folder structure under `src/features/`. Server state via TanStack Query. URL-driven search (`?q=...`). UI state local only.

`src/routeTree.gen.ts` is **auto-generated** by the TanStack Router Vite plugin on every `dev`/`build`. Committed so IDE support and type-checking work without running the dev server first.

Pre-commit hook (Husky + lint-staged) runs lint → format → typecheck on every commit.
