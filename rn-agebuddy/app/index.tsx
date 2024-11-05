import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-zinc-200">
      <View className="absolute top-0 left-0 flex flex-row w-full bg-cyan-200 justify-left items-center">
        <View className="top">
          <Ionicons name="person" size={32} color="#1BC466" />
        </View>
        <View className="flex border-4">
          <Text>Welcome</Text>
          <Text>User 101</Text>
        </View>

        <View>
          <Ionicons name="bulb" size={32} color="#F3E9C1" />
        </View>
      </View>
    </SafeAreaView>
  );
}
