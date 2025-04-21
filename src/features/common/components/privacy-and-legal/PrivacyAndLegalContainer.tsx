// src/feature/profile/components/privacy/PrivacyContainer.tsx
import { Box } from "@/src/components/ui/box";
import React, { ReactNode } from "react";

interface PrivacyAndLegalontainerProps {
  children: ReactNode;
}

const PrivacyAndLegalContainer = ({
  children,
}: PrivacyAndLegalontainerProps) => {
  return (
    <Box className="bg-white rounded-xl p-5 mb-8 shadow-sm">{children}</Box>
  );
};

export default PrivacyAndLegalContainer;
