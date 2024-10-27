import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="homescreen"
        options={{
          tabBarShowLabel: false,
          tabBarBadge: 3,
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"} // Use different icons based on focus state
              size={size}
              color={focused ? "black" : color} // Change color when focused
            />
          ),
        }}
      />
      <Tabs.Screen
        name="fullread"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "reader" : "reader-outline"} // Change to outline when not focused
              size={size}
              color={focused ? "black" : color} // Change color when focused
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "settings" : "settings-outline"} // Change to outline when not focused
              size={size}
              color={focused ? "black" : color} // Change color when focused
            />
          ),
        }}
      />
    </Tabs>
  );
}
