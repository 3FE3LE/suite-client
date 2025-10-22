# Repository Guidelines

## Project Structure & Module Organization

The monorepo mirrors Turbo workspaces. `apps/web/` hosts the Next.js React Native Web app; routes live under `apps/web/app/` with shared styles in `apps/web/styles/`. `apps/native/` holds the Expo client with screens in `apps/native/app/` and bundled assets in `apps/native/assets/`. Reusable UI primitives sit in `packages/ui/src/` with the compiled bundle emitted to `packages/ui/dist/` via `tsup`. Shared TypeScript baselines live in `packages/typescript-config/` (`base.json`, `nextjs.json`, `react-native-library.json`). Co-locate new assets, utilities, and styles alongside the feature they support.

## Build, Test, and Development Commands

Run `yarn dev` to launch the full Turbo pipeline (Next.js, Expo, UI watch). Target a single surface with `yarn workspace web dev` or `yarn workspace native dev`. Produce production bundles through `yarn build`. Lint the web app using `yarn workspace web lint`; treat it as the pre-commit smoke test. Reset caches with `yarn clean` before reinstalling dependencies. Use `rg` for repository searches instead of `grep`, and format staged changes with `yarn format`.

## Coding Style & Naming Conventions

TypeScript is strict, so explicitly type component props and exported helpers. Follow PascalCase for components and screens (e.g., `ProfileHeader.tsx`) and camelCase for hooks/utilities (e.g., `useAuth.ts`). Co-locate platform-specific styles via `StyleSheet.create`. Prettier enforces 2-space indentation and semicolons; run `yarn format` to normalize code, JSON, and Markdown. Keep contributions ASCII unless a file already uses Unicode. Export only stable tokens from `@repo/ui`.

## Testing Guidelines

Automated tests are not yet wired in; prefer linting and manual verification. After changes touching web surfaces, run `yarn workspace web lint` and `expo start --web` to validate rendering. When you add tests, place `*.test.ts` or `*.test.tsx` beside the implementation and document execution steps in the pull request.

## Commit & Pull Request Guidelines

Use Conventional Commits (e.g., `feat(web): add profile header`). Keep commits focused, and include generated artifacts such as `packages/ui/dist/` alongside source updates. Pull requests should summarize impacts across web/native surfaces, link relevant issues, and attach before/after screenshots for UI changes. List the commands you ran (`yarn workspace native dev`, `yarn workspace web lint`, etc.) so reviewers can reproduce validation.
