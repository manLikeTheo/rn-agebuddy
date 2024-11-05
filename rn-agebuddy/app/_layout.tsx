import { Stack } from "expo-router";
import "../global.css";
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false, title: "AgeBuddy Tab" }}
      />
      <Stack.Screen
        name="community"
        options={{ headerShown: true, title: "Community" }}
      />
      <Stack.Screen
        name="healthandwellness"
        options={{ headerShown: true, title: "Health & Wellness" }}
      />
      {/* <Stack.Screen
        name="modal"
        options={{ presentation: "modal", title: "Modal" }}
      /> */}
    </Stack>
  );
}
