import type {
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';
import type {
  Pressable,
  PressableProps as RNPressableProps,
  Text as RNText,
  TextProps as RNTextProps,
} from 'react-native';

type WithClassName<T> = T & { className?: string };

declare module 'react-native-css/components' {
  export const Pressable: ForwardRefExoticComponent<
    PropsWithoutRef<WithClassName<RNPressableProps>> & RefAttributes<Pressable>
  >;

  export const Text: ForwardRefExoticComponent<
    PropsWithoutRef<WithClassName<RNTextProps>> & RefAttributes<RNText>
  >;
}
