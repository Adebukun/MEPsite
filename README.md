# MEP SitePulse — Phase 1

This phase turns the static MVP into a working **Site Visit Capture** prototype.

## Included
- Overview dashboard
- Site visit list/search
- New site visit workflow
- Draft and submit states
- Progress, manpower, materials and activity capture
- Issue/blocker capture with priority
- Evidence photo count field (actual image upload comes with backend/storage phase)
- Auto-generated report preview
- Print / PDF browser action
- LocalStorage persistence
- Responsive layout

## Run locally
```bash
npm install
npm run dev
```

## Important
This phase is intentionally frontend-only. Data is stored in the browser. The next engineering phase should connect Supabase/PostgreSQL, authentication and Supabase Storage so records are shared across users/devices.
