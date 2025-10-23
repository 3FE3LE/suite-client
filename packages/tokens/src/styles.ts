import { Platform, StyleSheet } from 'react-native';

import { borderRadius, colors, elevation, spacing, typography } from './tokens';

const getSpacing = (step: keyof typeof spacing) => spacing[step];
const sharedShadow = {
  shadowColor: 'rgba(15, 23, 42, 0.2)',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.12,
  shadowRadius: 10,
};

const layoutStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  centerContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
    alignItems: 'stretch',
  },
});

const textStyles = StyleSheet.create({
  h1: {
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize['3xl'],
    lineHeight: typography.lineHeight.loose,
    color: colors.text,
  },
  h2: {
    fontFamily: typography.fontFamily.bold,
    fontSize: typography.fontSize['2xl'],
    lineHeight: typography.lineHeight.relaxed,
    color: colors.text,
  },
  h3: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.xl,
    lineHeight: typography.lineHeight.relaxed,
    color: colors.text,
  },
  body: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.md,
    lineHeight: typography.lineHeight.normal,
    color: colors.text,
  },
  small: {
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.sm,
    lineHeight: typography.lineHeight.compact,
    color: colors.textMuted,
  },
});

const buttonStyles = StyleSheet.create({
  base: {
    minHeight: 48,
    borderRadius: borderRadius.md,
    paddingHorizontal: getSpacing(6),
    paddingVertical: getSpacing(3),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.secondary,
  },
  outline: {
    borderWidth: 1,
    borderColor: colors.borderStrong,
    backgroundColor: 'transparent',
  },
  text: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.md,
    lineHeight: typography.lineHeight.normal,
    color: colors.textOnPrimary,
  },
  textSecondary: {
    color: colors.textOnSecondary,
  },
});

const cardStyles = StyleSheet.create({
  base: {
    backgroundColor: colors.background,
    borderRadius: borderRadius.lg,
    padding: getSpacing(6),
    borderWidth: 1,
    borderColor: colors.border,
    ...(Platform.OS === 'web'
      ? { boxShadow: '0 12px 20px rgba(15, 23, 42, 0.08)' }
      : { ...sharedShadow, elevation: elevation.md }),
  },
});

const inputStyles = StyleSheet.create({
  container: {
    width: '100%',
  },
  field: {
    minHeight: 48,
    borderRadius: borderRadius.sm,
    paddingHorizontal: getSpacing(4),
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.background,
    fontFamily: typography.fontFamily.regular,
    fontSize: typography.fontSize.md,
    color: colors.text,
  },
  label: {
    fontFamily: typography.fontFamily.medium,
    fontSize: typography.fontSize.sm,
    color: colors.textMuted,
  },
});

export const baseStyles = {
  container: layoutStyles.container,
  centerContent: layoutStyles.centerContent,
  row: layoutStyles.row,
  column: layoutStyles.column,
  text: textStyles,
  button: buttonStyles,
  card: cardStyles,
  input: inputStyles,
};
