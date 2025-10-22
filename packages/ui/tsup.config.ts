import { defineConfig, Options } from 'tsup';

export default defineConfig((options: Options) => ({
  entry: {
    index: 'src/index.tsx',
  },
  banner: {
    js: "'use client'",
  },
  clean: true,
  format: ['cjs', 'esm'],
  external: ['react', 'react-native', 'nativewind'], // ← Agregar nativewind
  dts: {
    resolve: false, // ← Importante para resolver tipos externos
  },
  skipNodeModulesBundle: true, // ← Evita bundlear node_modules
  ...options,
}));
