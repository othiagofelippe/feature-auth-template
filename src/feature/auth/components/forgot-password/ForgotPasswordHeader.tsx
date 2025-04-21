import { Heading } from "@/src/components/ui/heading";
import { Text } from "@/src/components/ui/text";
import { VStack } from "@/src/components/ui/vstack";
import React from "react";

const ForgotPasswordHeader = () => {
  return (
    <VStack className="space-lg items-center mb-10">
      <Heading className="text-2xl text-gray-800">Esqueceu sua senha?</Heading>
      <Text className="text-sm text-gray-500 text-center px-4">
        Informe seu email para receber um código de verificação.
      </Text>
    </VStack>
  );
};

export default ForgotPasswordHeader;
