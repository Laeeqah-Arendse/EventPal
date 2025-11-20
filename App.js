import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./screens/HomeScreen";
import TeamsScreen from "./screens/TeamsScreen";
import CalendarScreen from "./screens/CalendarScreen";
import FeaturesScreen from "./screens/FeaturesScreen";
import ContactScreen from "./screens/ContactScreen";
import AboutScreen from "./screens/AboutScreen";
import { COLORS } from "./constants/colors";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: COLORS.orange,
          tabBarInactiveTintColor: COLORS.midText,
          tabBarStyle: {
            backgroundColor: "#fff",
            height: 65,
            borderTopWidth: 0.6,
            borderTopColor: COLORS.gray,
          },
          tabBarIcon: ({ color, size }) => {
            let icon;
            switch (route.name) {
              case "Home": icon = "home-outline"; break;
              case "Teams": icon = "people-outline"; break;
              case "Calendar": icon = "calendar-outline"; break;
              case "Features": icon = "star-outline"; break;
              case "Contact": icon = "mail-outline"; break;
              case "About": icon = "information-circle-outline"; break;
            }
            return <Ionicons name={icon} size={22} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="Features" component={FeaturesScreen} />
        <Tab.Screen name="Contact" component={ContactScreen} />
        <Tab.Screen name="Teams" component={TeamsScreen} />
        <Tab.Screen name="Calendar" component={CalendarScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
