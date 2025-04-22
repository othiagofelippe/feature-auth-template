import { Box } from "@/src/components/ui/box";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { ResetPasswordForm, ResetPasswordHeader } from "../components";
import { ResetPasswordFormData } from "../schemas/reset-password.schema";

const ResetPasswordScreen = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleResetPassword = (data: ResetPasswordFormData) => {
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      router.push("/(auth)");
    }, 1000);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Box className="flex-1 p-6 justify-center">
        <ResetPasswordHeader />

        <ResetPasswordForm
          onSubmit={handleResetPassword}
          isSubmitting={isSubmitting}
        />
      </Box>
    </SafeAreaView>
  );
};

export default ResetPasswordScreen;
