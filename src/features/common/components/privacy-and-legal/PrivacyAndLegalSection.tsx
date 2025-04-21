// src/feature/profile/components/privacy/PrivacySection.tsx
import { Box } from "@/src/components/ui/box";
import { Text } from "@/src/components/ui/text";
import { VStack } from "@/src/components/ui/vstack";
import React from "react";
import { PrivacyAndLegalSectionProps } from "../../types/privacy";

const PrivacyAndLegalSection = ({ section }: PrivacyAndLegalSectionProps) => {
  return (
    <Box className="mb-5">
      <VStack className="space-y-2.5">
        <Text className="text-lg font-bold text-gray-800">{section.title}</Text>

        <Text className="text-base leading-6 text-gray-700">
          {section.content}
        </Text>
      </VStack>
    </Box>
  );
};

export default PrivacyAndLegalSection;
