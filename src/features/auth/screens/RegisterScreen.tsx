import { Box } from "@/src/components/ui/box";
import { useStore } from "@/src/stores/root.store";

import { LoadingOverlay } from "@/src/components/ui/loading-overlay";
import { router } from "expo-router";
import React, { useEffect } from "react";
import { Alert, SafeAreaView, ScrollView } from "react-native";
import { RegisterFooter, RegisterForm, RegisterHeader } from "../components";
import { RegisterFormData } from "../schemas/register.schema";

export default function RegisterScreen() {
  const register = useStore((state) => state.register);
  const status = useStore((state) => state.status);
  const error = useStore((state) => state.error);
  const setError = useStore((state) => state.setError);

  useEffect(() => {
    if (error) {
      Alert.alert("Erro", error);
      setError(null);
    }
  }, [error]);

  const handleRegister = async (data: RegisterFormData) => {
    try {
      await register(data);
    } catch (err) {}
  };

  const handleLogin = () => {
    router.push("/(auth)");
  };

  const handleTermsPress = () => {
    router.push("/terms");
  };

  const handlePrivacyPress = () => {
    router.push("/privacy-policy");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView
        className="flex-1"
        contentContainerClassName="flex-grow justify-center"
      >
        <Box className="p-6">
          <RegisterHeader />

          <RegisterForm
            onSubmit={handleRegister}
            isSubmitting={status === "loading"}
            onTermsPress={handleTermsPress}
            onPrivacyPress={handlePrivacyPress}
          />
          <RegisterFooter onLogin={handleLogin} />
        </Box>
      </ScrollView>

      <LoadingOverlay
        visible={status === "loading"}
        message="Criando conta..."
      />
    </SafeAreaView>
  );
}
