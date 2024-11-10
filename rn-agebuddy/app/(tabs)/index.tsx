import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import BannerCarousel from "@/components/bannerCarousel";

const Home = () => {
  const features = [
    {
      id: "1",
      title: "Events",
      image: require("../../assets/images/emoji1.png"),
    },
    {
      id: "2",
      title: "Khyaal Card",
      image: require("../../assets/images/emoji2.png"),
    },
    {
      id: "3",
      title: "Rewards",
      image: require("../../assets/images/emoji3.png"),
    },
    {
      id: "4",
      title: "Jobs",
      image: require("../../assets/images/emoji4.png"),
    },
    {
      id: "5",
      title: "Offers",
      image: require("../../assets/images/emoji5.png"),
    },
    {
      id: "6",
      title: "Pay Bills",
      image: require("../../assets/images/emoji6.png"),
    },
  ];

  // const renderFeature = ({ item }: any) => {
  //   return (
  //     <TouchableOpacity>
  //       <Image source={item.image} className="w-20 h-20" />
  //       <Text className="text-sm">{item.title}</Text>
  //     </TouchableOpacity>
  //   );
  // };
  return (
    <SafeAreaView className="flex-1 container items-center justify-center bg-zinc-100 py-4">
      <View className="w-full border-2 flex-row items-center justify-center bg-cyan-300 px-8">
        {/* Header Section */}
        <View className="header-container w-full  flex-row items-center ">
          <Ionicons name="person" size={24} color="gray" />
          <View>
            <Text className="text-lg font-semibold">Hello,</Text>
            <Text>UserName</Text>
          </View>
        </View>
        <View className=" flex-row items-center">
          <Ionicons name="bulb" size={24} color="green" />
          <Text className="text-3xl font-semibold">0</Text>
        </View>
      </View>
      {/* Banner Carousel */}
      <View className="border-4 border-red-500">
        <BannerCarousel banners={features} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
