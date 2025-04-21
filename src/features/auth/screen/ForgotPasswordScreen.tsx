import { Box } from "@/src/components/ui/box";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import {
  ForgotPasswordFooter,
  ForgotPasswordForm,
  ForgotPasswordHeader,
} from "../components";
import { ForgotPasswordFormData } from "../schemas/forgot-password.schema";

const ForgotPasswordScreen = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = (data: ForgotPasswordFormData) => {
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      router.push("/(auth)/verification-code");
    }, 1000);
  };

  const handleBackToLogin = () => {
    router.push("/(auth)");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Box className="flex-1 p-6 justify-center">
        <ForgotPasswordHeader />

        <ForgotPasswordForm
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />

        <ForgotPasswordFooter onBackToLogin={handleBackToLogin} />
      </Box>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;
