import React, { type ComponentType } from 'react';
import { Pressable, Text } from 'react-native-css/components';
import {
  type PressableProps,
  type StyleProp,
  type TextProps,
  type TextStyle,
} from 'react-native';

const BUTTON_BASE_CLASSES = 'max-w-80 rounded-lg bg-blue-900 p-4';
const TEXT_BASE_CLASSES = 'text-center text-base text-white';

type PressableWithClassName = ComponentType<
  PressableProps & { className?: string }
>;
type TextWithClassName = ComponentType<TextProps & { className?: string }>;

export interface ButtonProps extends Omit<PressableProps, 'children'> {
  text: string;
  onPress?: () => void;
  onClick?: () => void;
  className?: string;
  textClassName?: string;
  style?: PressableProps['style'];
  textStyle?: StyleProp<TextStyle>;
}

export function Button({
  text,
  onPress,
  onClick,
  className,
  textClassName,
  style,
  textStyle,
  ...pressableProps
}: ButtonProps) {
  const handlePress = onPress ?? onClick;
  const buttonClasses = [BUTTON_BASE_CLASSES, className]
    .filter(Boolean)
    .join(' ');
  const labelClasses = [TEXT_BASE_CLASSES, textClassName]
    .filter(Boolean)
    .join(' ');

  const PressableComponent = Pressable as PressableWithClassName;
  const TextComponent = Text as TextWithClassName;

  return (
    <PressableComponent
      {...pressableProps}
      className={buttonClasses}
      onPress={handlePress}
      style={style}
    >
      <TextComponent className={labelClasses} style={textStyle}>
        {text}
      </TextComponent>
    </PressableComponent>
  );
}
