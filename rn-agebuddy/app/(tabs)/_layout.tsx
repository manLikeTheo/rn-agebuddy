import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={24} style={{ marginBottom: -3 }} {...props} />;
}
const TabsLayout = () => {
  return (
    <SafeAreaView edges={["top"]} className="flex-1">
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#1BC464",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingTop: 10,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon(props) {
              return <TabBarIcon {...props} name="home" />;
            },
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon(props) {
              return <TabBarIcon {...props} name="user" />;
            },
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
};
export default TabsLayout;
