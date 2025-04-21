// src/feature/profile/components/privacy/PrivacyHeader.tsx
import { Text } from "@/src/components/ui/text";
import { VStack } from "@/src/components/ui/vstack";
import React from "react";
import { PrivacyAndLegalHeaderProps } from "../../types/privacy";

const PrivacyAndLegalHeader = ({
  title,
  lastUpdated,
}: PrivacyAndLegalHeaderProps) => {
  return (
    <VStack className="items-center mb-5">
      <Text className="text-2xl font-bold text-gray-800 text-center mb-5">
        {title}
      </Text>

      <Text className="text-sm text-gray-500 mb-4">
        Última atualização: {lastUpdated}
      </Text>
    </VStack>
  );
};

export default PrivacyAndLegalHeader;
