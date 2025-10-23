export const colors = {
  primary: '#1d4ed8',
  primaryDark: '#1e3a8a',
  primaryLight: '#60a5fa',
  secondary: '#9333ea',
  secondaryDark: '#7e22ce',
  secondaryLight: '#c084fc',
  accent: '#f97316',
  success: '#16a34a',
  warning: '#f59e0b',
  danger: '#dc2626',
  background: '#ffffff',
  backgroundMuted: '#f4f4f5',
  surface: '#0f172a',
  surfaceMuted: '#1f2937',
  border: '#e2e8f0',
  borderStrong: '#94a3b8',
  text: '#0f172a',
  textMuted: '#475569',
  textOnPrimary: '#ffffff',
  textOnSecondary: '#ffffff',
  overlay: 'rgba(15, 23, 42, 0.6)',
} as const;

export type ColorTokens = typeof colors;

export const spacing = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 36,
  10: 40,
  11: 44,
  12: 48,
  13: 52,
  14: 56,
  15: 60,
  16: 64,
  17: 68,
  18: 72,
  19: 76,
  20: 80,
  21: 84,
  22: 88,
  23: 92,
  24: 96,
} as const;

export type SpacingScale = keyof typeof spacing;

export const borderRadius = {
  none: 0,
  xs: 4,
  sm: 6,
  md: 8,
  lg: 12,
  xl: 16,
  pill: 999,
} as const;

export const typography = {
  fontFamily: {
    regular: 'System',
    medium: 'System',
    bold: 'System',
    monospace:
      'Menlo, Consolas, Monaco, Liberation Mono, Courier New, monospace',
  },
  fontWeight: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 22,
    '2xl': 26,
    '3xl': 32,
  },
  lineHeight: {
    compact: 16,
    normal: 20,
    relaxed: 24,
    loose: 28,
  },
} as const;

export const shadows = {
  none: 'none',
  xs: '0 1px 2px rgba(15, 23, 42, 0.08)',
  sm: '0 1px 3px rgba(15, 23, 42, 0.1), 0 1px 2px rgba(15, 23, 42, 0.06)',
  md: '0 4px 6px rgba(15, 23, 42, 0.1), 0 2px 4px rgba(15, 23, 42, 0.06)',
  lg: '0 10px 15px rgba(15, 23, 42, 0.1), 0 4px 6px rgba(15, 23, 42, 0.05)',
} as const;

export const elevation = {
  none: 0,
  sm: 2,
  md: 4,
  lg: 8,
} as const;

export const duration = {
  instant: 75,
  fast: 150,
  normal: 200,
  slow: 300,
  deliberate: 500,
} as const;

export const breakpoints = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
  wide: 1440,
} as const;

export type Breakpoint = keyof typeof breakpoints;

export const zIndex = {
  base: 0,
  floating: 10,
  modal: 100,
  toast: 1000,
} as const;

export type ElevationLevel = keyof typeof elevation;
export type ShadowLevel = keyof typeof shadows;
