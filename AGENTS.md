# Repository Guidelines

## Project Structure & Module Organization

The monorepo mirrors the Turbo workspaces. `apps/web/` hosts the Next.js React Native Web app with routes in `app/` and shared styles under `styles/`. `apps/native/` contains the Expo client; screens live in `app/` and assets in `assets/`. Shared design system code sits in `packages/ui/src/` and ships compiled output in `packages/ui/dist/` via `tsup`. TypeScript baselines are centralized inside `packages/typescript-config/` (`base.json`, `nextjs.json`, `react-native-library.json`). Keep new assets and utilities colocated with the feature they serve.

## Build, Test, and Development Commands

Run `yarn dev` for the full Turbo pipeline (Next, Expo, UI watch). Target a single surface with `yarn workspace web dev` or `yarn workspace native dev`. Produce production artifacts with `yarn build`. Lint the web app through `yarn workspace web lint`; rely on it as the pre-commit smoke check. Use `yarn clean` before reinstalling dependencies to clear the Turbo cache. Prefer `rg` for repository searches and `yarn format` to enforce Prettier across code, JSON, and Markdown.

## Coding Style & Naming Conventions

TypeScript is strict; explicitly type component props and exported utilities. Follow the existing naming scheme: components and screens in PascalCase (`Button.tsx`), hooks and helpers in camelCase (`useAuth.ts`). Keep Expo route folders consistent with `apps/native/app`. Respect Prettier defaults (2-space indent, semicolons, double quotes in JSON) and stick to ASCII unless the file already uses Unicode. Co-locate styles via `StyleSheet.create` and export only stable tokens from `@repo/ui`.

## Testing Guidelines

No automated tests ship yet. Add `*.test.ts` or `*.test.tsx` beside the implementation once you introduce a runner. Until then, run `yarn workspace web lint` and `expo start --web` to smoke-check changes, and record manual verification steps in pull requests. Mock native modules only when integration tests are impractical.

## Commit & Pull Request Guidelines

Use Conventional Commits, e.g., `feat(web): add profile header`. Keep commits focused and include generated artifacts (`packages/ui/dist/`) alongside source edits. Pull requests should summarize the impact across web and native apps, reference issues, and attach before/after screenshots where UI shifts. Document the commands you ran (for example, `yarn workspace native dev`) so reviewers can reproduce the validation.
