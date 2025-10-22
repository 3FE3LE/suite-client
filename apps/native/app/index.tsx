import { Text as RNText, View as RNView } from 'react-native';
import { styled } from 'nativewind';
import { Button } from '@repo/ui';

const View = styled(RNView);
const Text = styled(RNText);

export default function Screen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="mb-5 text-2xl font-bold">Lo logre mi amor!!</Text>
      <Button text="Go to web" />
    </View>
  );
}
