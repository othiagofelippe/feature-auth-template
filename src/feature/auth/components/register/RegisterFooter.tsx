import { Box } from "@/src/components/ui/box";
import { HStack } from "@/src/components/ui/hstack";
import { Pressable } from "@/src/components/ui/pressable";
import { Text } from "@/src/components/ui/text";
import React from "react";

interface RegisterFooterProps {
  onLogin: () => void;
}

const RegisterFooter = ({ onLogin }: RegisterFooterProps) => {
  return (
    <Box className="mt-4 items-center">
      <HStack className="space-x-1 items-center justify-center">
        <Text className="text-sm text-gray-500">Já possui uma conta? </Text>
        <Pressable onPress={onLogin}>
          <Text className="text-sm text-blue-600 font-medium">Fazer login</Text>
        </Pressable>
      </HStack>
    </Box>
  );
};

export default RegisterFooter;
