import { Box } from "@/src/components/ui/box";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import {
  VerificationCodeFooter,
  VerificationCodeForm,
  VerificationCodeHeader,
} from "../components";
import { VerificationCodeFormData } from "../schemas/verification-code.schema";

const VerificationCodeScreen = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = (data: VerificationCodeFormData) => {
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      router.push("/(auth)/reset-password");
    }, 1000);
  };

  const handleResendCode = () => {
    console.log("Reenviar código");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Box className="flex-1 p-6 justify-center">
        <VerificationCodeHeader />

        <VerificationCodeForm
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />

        <VerificationCodeFooter onResendCode={handleResendCode} />
      </Box>
    </SafeAreaView>
  );
};

export default VerificationCodeScreen;
