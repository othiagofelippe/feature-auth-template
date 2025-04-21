import { Heading } from "@/src/components/ui/heading";
import { Text } from "@/src/components/ui/text";
import { VStack } from "@/src/components/ui/vstack";
import React from "react";

const VerificationCodeHeader = () => {
  return (
    <VStack className="space-lg items-center mb-10">
      <Heading className="text-2xl text-gray-800">
        Código de verificação
      </Heading>
      <Text className="text-sm text-gray-500 text-center px-4">
        Digite o código de verificação que enviamos para o seu email.
      </Text>
    </VStack>
  );
};

export default VerificationCodeHeader;
