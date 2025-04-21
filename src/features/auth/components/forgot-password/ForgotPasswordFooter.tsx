import { Box } from "@/src/components/ui/box";
import { Pressable } from "@/src/components/ui/pressable";
import { Text } from "@/src/components/ui/text";
import React from "react";

interface ForgotPasswordFooterProps {
  onBackToLogin: () => void;
}

const ForgotPasswordFooter = ({ onBackToLogin }: ForgotPasswordFooterProps) => {
  return (
    <Box className="mt-4 items-center">
      <Pressable onPress={onBackToLogin}>
        <Text className="text-sm text-blue-600 font-medium">
          Voltar para o login
        </Text>
      </Pressable>
    </Box>
  );
};

export default ForgotPasswordFooter;
