import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from '@repo/ui';
import { baseStyles, colors, spacing, typography } from '@repo/tokens';

export default function Page() {
  return (
    <View style={[baseStyles.centerContent, styles.container]}>
      <Text style={[baseStyles.text.h1, styles.title]}>Web</Text>
      <Button
        text="Go to native"
        variant="primary"
        style={styles.button}
        textStyle={styles.buttonText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    paddingHorizontal: spacing[12],
    paddingVertical: spacing[12],
  },
  title: {
    fontFamily: typography.fontFamily.bold,
    marginBottom: spacing[6],
    textAlign: 'center',
  },
  button: {
    marginTop: spacing[4],
  },
  buttonText: {
    letterSpacing: 0.3,
  },
});
