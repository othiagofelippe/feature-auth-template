import { Heading } from "@/src/components/ui/heading";
import { Text } from "@/src/components/ui/text";
import { VStack } from "@/src/components/ui/vstack";
import React from "react";

const LoginHeader = () => {
  return (
    <VStack className="space-lg items-center mb-10">
      <Heading className="text-2xl text-gray-800">Entrar</Heading>
      <Text className="text-sm text-gray-500">
        Entre com suas credenciais para continuar
      </Text>
    </VStack>
  );
};

export default LoginHeader;
