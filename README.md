# portfolio2

THPS2-styled personal portfolio built with React 19, Vite and Tailwind CSS v3.

## Scripts

- `pnpm dev` — start the dev server
- `pnpm build` — type-check and build for production
- `pnpm preview` — preview the production build

## Structure

- `src/App.tsx` — page shell, owns the active-menu state
- `src/data/menu.ts` — menu keys, wheel rotations and labels
- `src/hooks/useRetroSfx.ts` — Web Audio click sounds + SFX toggle
- `src/components/` — TopBar, HeaderBanner, WheelMenu, QuickNav, Footer and the six content panels under `panels/`
