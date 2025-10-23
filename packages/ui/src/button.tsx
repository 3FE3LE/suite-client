'use client';

import React from 'react';
import {
  GestureResponderEvent,
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';

import { baseStyles, colors } from '@repo/tokens';

export type ButtonVariant = 'primary' | 'secondary' | 'outline';

export interface ButtonProps
  extends Omit<PressableProps, 'style' | 'children'> {
  text: string;
  variant?: ButtonVariant;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  onPress?: PressableProps['onPress'];
  onClick?: () => void;
}

export function Button(props: ButtonProps) {
  const {
    text,
    variant = 'primary',
    style,
    textStyle,
    onPress,
    onClick,
    disabled,
    ...pressableProps
  } = props;

  const handlePress = (event: GestureResponderEvent) => {
    if (disabled) {
      return;
    }
    onPress?.(event);
    onClick?.();
  };

  const variantStyle = getVariantStyle(variant);
  const variantTextStyle = getVariantTextStyle(variant);

  return (
    <Pressable
      {...pressableProps}
      accessibilityRole="button"
      accessibilityState={{ disabled: Boolean(disabled) }}
      disabled={disabled}
      style={StyleSheet.flatten([
        baseStyles.button.base,
        variantStyle,
        disabled && styles.disabled,
        style,
      ])}
      onPress={handlePress}
    >
      <Text
        style={StyleSheet.flatten([
          baseStyles.button.text,
          variantTextStyle,
          disabled && styles.disabledText,
          textStyle,
        ])}
      >
        {text}
      </Text>
    </Pressable>
  );
}

function getVariantStyle(variant: ButtonVariant) {
  switch (variant) {
    case 'secondary':
      return baseStyles.button.secondary;
    case 'outline':
      return styles.outline;
    case 'primary':
    default:
      return baseStyles.button.primary;
  }
}

function getVariantTextStyle(variant: ButtonVariant) {
  switch (variant) {
    case 'secondary':
      return baseStyles.button.textSecondary;
    case 'outline':
      return styles.outlineText;
    case 'primary':
    default:
      return null;
  }
}

const styles = StyleSheet.create({
  disabled: {
    opacity: 0.6,
  },
  disabledText: {
    color: colors.textMuted,
  },
  outline: {
    borderWidth: 1,
    borderColor: colors.borderStrong,
    backgroundColor: 'transparent',
  },
  outlineText: {
    color: colors.text,
  },
});
