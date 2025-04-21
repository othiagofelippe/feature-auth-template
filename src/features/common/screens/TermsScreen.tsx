// src/feature/profile/screen/TermsScreen.tsx
import { Box } from "@/src/components/ui/box";
import React from "react";
import { ScrollView } from "react-native";
import {
  PrivacyAndLegalContainer,
  PrivacyAndLegalFooter,
  PrivacyAndLegalHeader,
  PrivacyAndLegalIntro,
  PrivacyAndLegalSections,
} from "../components/privacy-and-legal";
import { termsData } from "../data/terms-data";

const TermsScreen = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <Box className="p-5">
        <PrivacyAndLegalContainer>
          <PrivacyAndLegalHeader
            title={termsData.title}
            lastUpdated={termsData.lastUpdated}
          />

          <PrivacyAndLegalIntro text={termsData.introduction} />

          <PrivacyAndLegalSections sections={termsData.sections} />

          <PrivacyAndLegalFooter text={termsData.footer} />
        </PrivacyAndLegalContainer>
      </Box>
    </ScrollView>
  );
};

export default TermsScreen;
