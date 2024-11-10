// components/ActionCard.tsx
import { Text, TouchableOpacity, Image } from "react-native";

const ActionCard = ({ title, icon }: any) => {
  return (
    <TouchableOpacity className="flex-1 bg-white items-center justify-center p-4 rounded-lg m-2 border border-gray-200 shadow-sm">
      <Image source={icon} className="w-12 h-12 mb-2" resizeMode="contain" />
      <Text className="text-sm text-gray-700">{title}</Text>
    </TouchableOpacity>
  );
};

export default ActionCard;
