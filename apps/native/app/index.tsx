import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Button } from '@repo/ui';
import { baseStyles, colors, spacing, typography } from '@repo/tokens';

export default function Screen() {
  return (
    <View style={[baseStyles.centerContent, styles.container]}>
      <Text style={[baseStyles.text.h2, styles.heading]}>
        Lo logre, mi amor!!
      </Text>
      <Button
        text="Go to web"
        style={styles.button}
        textStyle={styles.buttonText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    paddingHorizontal: spacing[6],
  },
  heading: {
    fontFamily: typography.fontFamily.bold,
    textAlign: 'center',
    marginBottom: spacing[5],
  },
  button: {
    alignSelf: 'stretch',
  },
  buttonText: {
    letterSpacing: 0.3,
  },
});
