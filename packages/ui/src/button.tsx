import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

export interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export function Button({ text, onClick }: ButtonProps) {
  return (
    <Pressable style={styles.button} onPress={onClick}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    maxWidth: 320,
    borderRadius: 8,
    backgroundColor: '#3b82f6',
    padding: 16,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    color: '#ffffff',
  },
});
