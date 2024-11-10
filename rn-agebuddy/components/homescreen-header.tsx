import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, Pressable } from "react-native";

const HomeScreenHeader = ({
  userName = "Anonymous user",
  greeting = "Welcome",
}) => {
  return (
    <View className="w-full flex-row gap-4 items-center justify-between px-4 py-4 bg-white border-b border-gray-200">
      <View className="flex-row items-center">
        <TouchableOpacity>
          <View className="w-10 h-10 rounded-full bg-gray-400 flex overflow-hidden border-2 items-center justify-center mr-4">
            <Ionicons name="person" size={44} color="#1BC466" />
          </View>
        </TouchableOpacity>
        <Text className="ml-3 text-lg text-gray-800">
          {greeting}, {userName} →
        </Text>
      </View>

      <TouchableOpacity className="flex items-center justify-center">
        <Ionicons name="wallet" size={32} color="green" />
        <Text className="text-xs text-gray-500">0</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreenHeader;
