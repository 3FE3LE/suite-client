import * as React from "react";
import { GestureResponderEvent, Pressable, Text } from "react-native";

export interface ButtonProps {
  text: string;
  onClick?: (event: GestureResponderEvent) => void;
}

export function Button({ text, onClick }: ButtonProps) {
  return (
    <Pressable className="max-w-xs rounded-lg bg-blue-500 p-4" onPress={onClick}>
      <Text className="text-center text-base text-white">{text}</Text>
    </Pressable>
  );
}

