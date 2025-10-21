import { StyleSheet, Text, View } from 'react-native';

import { Button } from '@repo/ui';

export default function Screen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Lo logre mi amor!!</Text>
      <Button text="Go to web" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    marginBottom: 20,
    fontSize: 36,
    fontWeight: 'bold',
  },
});
