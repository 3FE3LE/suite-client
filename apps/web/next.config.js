const path = require('path');

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  outputFileTracingRoot: path.join(__dirname, '../../'),

  // Transpila NativeWind y tus paquetes del monorepo
  transpilePackages: [
    'nativewind',
    'react-native-css',
    '@repo/ui',
    'react-native',
    'react-native-web',
    'react-native-safe-area-context',
    'react-native-reanimated',
  ],

  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      'react-native$': 'react-native-web',
      '@repo/ui': path.join(__dirname, '../../packages/ui/src'),
    };

    config.resolve.extensions = [
      '.web.js',
      '.web.jsx',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions,
    ];

    return config;
  },
};
