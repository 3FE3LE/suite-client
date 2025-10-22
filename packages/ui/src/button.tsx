import React from 'react';
import { Pressable, Text, type PressableProps } from 'react-native';

const BUTTON_BASE_CLASSES = 'max-w-80 rounded-lg bg-blue-500 p-4';
const TEXT_BASE_CLASSES = 'text-center text-base text-white';

export interface ButtonProps extends Omit<PressableProps, 'children'> {
  text: string;
  onPress?: () => void;
  onClick?: () => void;
  className?: string;
  textClassName?: string;
}

export function Button({
  text,
  onPress,
  onClick,
  className,
  textClassName,
  ...pressableProps
}: ButtonProps) {
  const handlePress = onPress ?? onClick;
  const buttonClasses = [BUTTON_BASE_CLASSES, className]
    .filter(Boolean)
    .join(' ');
  const labelClasses = [TEXT_BASE_CLASSES, textClassName]
    .filter(Boolean)
    .join(' ');

  return (
    <Pressable
      {...pressableProps}
      className={buttonClasses}
      onPress={handlePress}
    >
      <Text className={labelClasses}>{text}</Text>
    </Pressable>
  );
}
