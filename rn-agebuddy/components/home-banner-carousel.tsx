import { View, Text, Image } from "react-native";
import { useState } from "react";

const HomeBannerCarousel = () => {
  // const [activeSlide, setActiveSlide] = useState(0);
  return (
    <View className="w-full h-40 bg-gray-500 my-3 px-4">
      <Image
        source={{ uri: "https://picsum.photos/200/300" }}
        className="w-full h-full rounded-lg"
        resizeMode="cover"
      />
    </View>
  );
};

export default HomeBannerCarousel;
