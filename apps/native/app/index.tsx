import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

import { Button } from "@repo/ui";

export default function Native() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="mb-5 text-4xl font-bold">Lo logre mi amor!! </Text>
      <Button
        onClick={() => {
          console.log("Pressed!");
          alert("Pressed!");
        }}
        text="Boop"
      />
      <StatusBar style="auto" />
    </View>
  );
}
