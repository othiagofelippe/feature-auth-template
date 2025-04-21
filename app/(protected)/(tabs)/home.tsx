import React from "react";
import { Stack } from "expo-router";
import HomeScreen from "@/src/features/home/screens/HomeScreen";

export default function HomePage() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Home",
          headerShown: false,
          headerStyle: { backgroundColor: "#f5f5f5" },
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
      <HomeScreen />
    </>
  );
}
