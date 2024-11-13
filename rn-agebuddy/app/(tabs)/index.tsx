import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import BannerCarousel from "@/components/bannerCarousel";
import { Link } from "expo-router";
import Community from "../community/[slug]";

const { width } = Dimensions.get("window");

const Home = () => {
  const features = [
    {
      id: "1",
      title: "Events",
      image: require("../../assets/images/emoji1.png"),
    },
    {
      id: "2",
      title: "AgeBuddy Card",
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

  const renderFeature = ({ item }: any) => {
    return (
      <Link href={`/community/index`}>
        <TouchableOpacity
          className="items-center flex shadow-sm rounded-sm w-1/3  p-2 gap-4 "
          style={{
            width: width / 3 - 20,
            height: width / 3 - 20,
            backgroundColor: "lightgray",
          }}
        >
          <View className="w-full  aspect-square">
            <Image
              source={item.image}
              className="w-full h-full rounded-md"
              style={{
                resizeMode: "cover",
              }}
            />
          </View>
          <Text className="text-lg font-bold text-center ">{item.title}</Text>
        </TouchableOpacity>
      </Link>
    );
  };
  return (
    <SafeAreaView className="flex-1 bg-slate-300 ">
      <View className="w-full rounded-lg flex-row items-center justify-center bg-white px-8 py-3 mb-0">
        {/* Header Section */}
        <View className="w-full flex-row items-center justify-left gap-2">
          <Ionicons name="person" size={40} color="gray" />
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
      <View
        className="bg-white rounded-sm overflow-hidden"
        style={{ width: width, height: 150, marginVertical: 5 }}
      >
        <BannerCarousel banners={features} />
      </View>

      {/* Features or Action Grid */}
      <View className="bg-white mb-0 py-2 flex-1">
        <FlatList
          data={features}
          numColumns={3}
          renderItem={renderFeature}
          keyExtractor={(item) => item.id}
          columnWrapperStyle={{ justifyContent: "space-around" }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
