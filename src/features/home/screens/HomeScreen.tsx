import { Box } from "@/src/components/ui/box";
import { Center } from "@/src/components/ui/center";
import { Heading } from "@/src/components/ui/heading";
import { Text } from "@/src/components/ui/text";
import { VStack } from "@/src/components/ui/vstack";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1">
      <Box className="flex-1 bg-white dark:bg-gray-900">
        <Center className="flex-1">
          <VStack className="items-center space-y-4">
            <Heading className="text-2xl text-blue-500">Bem-vindo!</Heading>
            <Text className="text-lg text-gray-800 dark:text-gray-200">
              Olá! Você está na home.
            </Text>
          </VStack>
        </Center>
      </Box>
    </SafeAreaView>
  );
}
