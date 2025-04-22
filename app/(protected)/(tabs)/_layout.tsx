import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#007BFF",
        tabBarInactiveTintColor: "#8E8E93",
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { paddingBottom: 5, height: 60 },
        headerStyle: { backgroundColor: "#f5f5f5" },
        headerTitleStyle: { fontWeight: "bold" },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
