// import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import ActionCard from "../components/actionCard";
import HomeScreenHeader from "./homescreen-header";
// import HomeBannerCarousel from "@/components/home-banner-carousel";
export default function Index() {
  const actions = [
    { title: "Events", icon: require("../assets/images/emoji1.png") },
    { title: "Khyaal Card", icon: require("../assets/images/emoji1.png") },
    { title: "Rewards", icon: require("../assets/images/emoji1.png") },
    { title: "Jobs", icon: require("../assets/images/emoji1.png") },
    { title: "Offers", icon: require("../assets/images/emoji1.png") },
    { title: "Pay Bills", icon: require("../assets/images/emoji1.png") },
    { title: "Travel", icon: require("../assets/images/emoji1.png") },
    { title: "Assistance", icon: require("../assets/images/emoji1.png") },
    { title: "Referral", icon: require("../assets/images/emoji1.png") },
  ];
  return (
    <SafeAreaView className="flex-1 bg-slate-200 ">
      <Text>Home</Text>
      <FlatList
        data={actions}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
          </View>
          // <ActionCard title={item.title} icon={item.icon} />
        )}
        keyExtractor={(item) => item.title}
        numColumns={2}
        ListHeaderComponent={<Text className="text-center">Actions</Text>}
        contentContainerStyle={{ flexGrow: 1 }}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        style={{ flex: 1, padding: 10 }}
      />
      {/* <View>
        <HomeScreenHeader />
      </View> */}
      {/* <ScrollView className="flex-1" contentContainerStyle={{ flexGrow: 1 }}>
        <HomeBannerCarousel />
      </ScrollView> */}
    </SafeAreaView>
  );
}
