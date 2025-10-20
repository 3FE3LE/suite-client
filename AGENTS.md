# Repository Guidelines

## Project Structure & Module Organization

- `apps/web/` is the Next.js React Native Web app; routes live in `app/`, shared styles in `styles/`.
- `apps/native/` contains the Expo app; screens live in `app/` and assets in `assets/`.
- `packages/ui/` ships shared components; edit `src/` and bundle with `tsup` into `dist/`.
- `packages/typescript-config/` centralizes TS configs (`base.json`, `nextjs.json`, `react-native-library.json`) consumed across workspaces.

## Build, Test, and Development Commands

- `yarn dev` runs `turbo run dev`, starting Next, Expo, and UI watch modes together.
- `yarn workspace web dev` or `yarn workspace native dev` target one app during iteration.
- `yarn build` executes `turbo run build` across all workspaces for production artifacts.
- `yarn workspace web lint` invokes Next lint; run before committing UI or API changes.
- `yarn format` applies Prettier to code, JSON, and Markdown.
- `yarn clean` clears Turbo caches and root `node_modules` for a clean reinstall.

## Coding Style & Naming Conventions

- Shared code compiles with strict TypeScript; type public APIs and component props explicitly.
- Respect Prettier defaults (2-space indent, semicolons, double quotes in JSON); rely on `yarn format`.
- Components/screens use `PascalCase` filenames, hooks/functions use `camelCase`, and Expo routes follow the existing folder structure in `apps/native/app`.
- Keep styles (`StyleSheet.create`) colocated and export only stable, themed entries from `@repo/ui`.

## Testing Guidelines

- No automated test runner is bundled; when adding one, expose a `test` script per workspace so `turbo run test` can orchestrate it.
- Co-locate tests beside source using `*.test.ts` or `*.test.tsx`; mock native modules only when integration tests are impractical.
- Until formal tests exist, rely on `yarn workspace web lint` and `expo start --web` for smoke checks and record manual results in PRs.

## Commit & Pull Request Guidelines

- History follows Conventional Commits (`feat(scope): message`); continue the pattern with scopes such as `web`, `native`, or `ui`.
- Keep commits focused and include generated artifacts (e.g., updated `dist/`) alongside the source change.
- Pull requests should summarise the change, note impacts on both apps, link issues, and attach before/after screenshots plus the commands you ran (e.g., `yarn workspace native dev`).
