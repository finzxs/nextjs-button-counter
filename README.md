# Next.js Button Counter

A tiny Next.js app with a reusable, accessible Counter component.

## Run locally
npm install
npm run dev
# open http://localhost:3000

## Build & start
npm run build
npm start

## Features (MVP)
- Counter with aria-live updates
- Increment / Decrement by step
- Reset to 0
- Step input (min 1)
- Disables decrement if going below 0
- Props: initialCount, initialStep
- Two instances on `/`

## Known limits
- No persistence; refresh resets state
