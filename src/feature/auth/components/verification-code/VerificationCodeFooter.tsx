import { Box } from "@/src/components/ui/box";
import { HStack } from "@/src/components/ui/hstack";
import { Pressable } from "@/src/components/ui/pressable";
import { Text } from "@/src/components/ui/text";
import React from "react";

interface VerificationCodeFooterProps {
  onResendCode: () => void;
}

const VerificationCodeFooter = ({
  onResendCode,
}: VerificationCodeFooterProps) => {
  return (
    <Box className="mt-4 items-center">
      <HStack className="space-x-1 items-center justify-center">
        <Text className="text-sm text-gray-500">Não recebeu o código?</Text>
        <Pressable onPress={onResendCode}>
          <Text className="text-sm text-blue-600 font-medium">Reenviar</Text>
        </Pressable>
      </HStack>
    </Box>
  );
};

export default VerificationCodeFooter;
