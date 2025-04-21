// src/feature/profile/components/privacy/PrivacySections.tsx
import { VStack } from "@/src/components/ui/vstack";
import React from "react";
import { PrivacyAndLegalSectionsProps } from "../../types/privacy";
import PrivacySection from "./PrivacyAndLegalSection";

const PrivacyAndLegalSections = ({
  sections,
}: PrivacyAndLegalSectionsProps) => {
  return (
    <VStack className="mb-5">
      {sections.map((section) => (
        <PrivacySection key={section.id} section={section} />
      ))}
    </VStack>
  );
};

export default PrivacyAndLegalSections;
