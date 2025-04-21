// src/feature/profile/screen/PrivacyPolicyScreen.tsx
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
import { privacyData } from "../data/privacy-data";

const PrivacyPolicyScreen = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <Box className="p-5">
        <PrivacyAndLegalContainer>
          <PrivacyAndLegalHeader
            title={privacyData.title}
            lastUpdated={privacyData.lastUpdated}
          />

          <PrivacyAndLegalIntro text={privacyData.introduction} />

          <PrivacyAndLegalSections sections={privacyData.sections} />

          <PrivacyAndLegalFooter text={privacyData.footer} />
        </PrivacyAndLegalContainer>
      </Box>
    </ScrollView>
  );
};

export default PrivacyPolicyScreen;
