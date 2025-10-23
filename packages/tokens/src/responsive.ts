import { Dimensions } from 'react-native';

import { breakpoints } from './tokens';

export type ResponsiveValue<T> = Partial<
  Record<keyof typeof breakpoints, T>
> & {
  base: T;
};

export function getBreakpoint(width: number) {
  if (width >= breakpoints.wide) return 'wide' as const;
  if (width >= breakpoints.desktop) return 'desktop' as const;
  if (width >= breakpoints.tablet) return 'tablet' as const;
  return 'mobile' as const;
}

export function getResponsiveValue<T>(
  config: ResponsiveValue<T>,
  width?: number,
): T {
  const viewportWidth = width ?? Dimensions.get('window').width;
  const current = getBreakpoint(viewportWidth);

  if (config[current] !== undefined) {
    return config[current]!;
  }

  if (current === 'wide') {
    return config.desktop ?? config.tablet ?? config.base;
  }
  if (current === 'desktop') {
    return config.tablet ?? config.base;
  }
  if (current === 'tablet') {
    return config.base;
  }

  return config.base;
}
