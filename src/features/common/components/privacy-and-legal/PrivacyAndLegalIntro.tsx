// src/feature/profile/components/privacy/PrivacyIntro.tsx
import { Box } from "@/src/components/ui/box";
import { Text } from "@/src/components/ui/text";
import React from "react";
import { PrivacyAndLegalIntroProps } from "../../types/privacy";

const PrivacyAndLegalIntro = ({ text }: PrivacyAndLegalIntroProps) => {
  return (
    <Box className="mb-5">
      <Text className="text-base leading-6 text-gray-800">{text}</Text>
    </Box>
  );
};

export default PrivacyAndLegalIntro;
