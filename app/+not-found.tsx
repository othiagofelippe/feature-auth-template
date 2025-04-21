import NotFoundScreen from "@/src/features/not-found/screen/NotFoundScreen";
import { Stack } from "expo-router";

export default function NotFoundPage() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />

      <NotFoundScreen />
    </>
  );
}
