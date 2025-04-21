import NotFoundScreen from "@/src/features/common/screens/NotFoundScreen";
import { Stack } from "expo-router";

export default function NotFoundPage() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />

      <NotFoundScreen />
    </>
  );
}
