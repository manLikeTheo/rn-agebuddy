// components/ActionsGrid.tsx
import { View } from "react-native";
import ActionCard from "../components/actionCard";

const actions = [
  { title: "Events", icon: require("../assets/icons/events.png") },
  { title: "Khyaal Card", icon: require("../assets/icons/khyaal.png") },
  { title: "Rewards", icon: require("../assets/icons/rewards.png") },
  { title: "Jobs", icon: require("../assets/icons/jobs.png") },
  { title: "Offers", icon: require("../assets/icons/offers.png") },
  { title: "Pay Bills", icon: require("../assets/icons/paybills.png") },
  { title: "Travel", icon: require("../assets/icons/travel.png") },
  { title: "Assistance", icon: require("../assets/icons/assistance.png") },
  { title: "Referral", icon: require("../assets/icons/referral.png") },
];

const ActionsGrid = () => {
  return (
    <View className="flex flex-wrap flex-row">
      {actions.map((action, index) => (
        <ActionCard key={index} title={action.title} icon={action.icon} />
      ))}
    </View>
  );
};

export default ActionsGrid;
