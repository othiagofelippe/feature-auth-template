// src/feature/profile/components/privacy/PrivacyFooter.tsx
import { Box } from "@/src/components/ui/box";
import { Text } from "@/src/components/ui/text";
import React from "react";
import { PrivacyAndLegalFooterProps } from "../../types/privacy";

const PrivacyAndLegalFooter = ({ text }: PrivacyAndLegalFooterProps) => {
  return (
    <Box className="mt-4">
      <Text className="text-base italic text-gray-600 text-center">{text}</Text>
    </Box>
  );
};

export default PrivacyAndLegalFooter;
