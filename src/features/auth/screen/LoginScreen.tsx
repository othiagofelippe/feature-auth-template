import { Box } from "@/src/components/ui/box";
import { LoadingOverlay } from "@/src/components/ui/loading-overlay";
import { useStore } from "@/src/stores/root.store";
import { router } from "expo-router";
import React, { useEffect } from "react";
import { Alert, SafeAreaView } from "react-native";
import { LoginFooter, LoginForm, LoginHeader } from "../components";
import { LoginFormData } from "../schemas/login.schema";

export default function LoginScreen() {
  const login = useStore((state) => state.login);
  const status = useStore((state) => state.status);
  const error = useStore((state) => state.error);
  const setError = useStore((state) => state.setError);

  useEffect(() => {
    if (error) {
      Alert.alert("Erro", error);
      setError(null);
    }
  }, [error]);

  const handleLogin = async (data: LoginFormData) => {
    try {
      await login(data);
    } catch (err) {}
  };

  const handleForgotPassword = () => {
    router.push("/(auth)/forgot-password");
  };

  const handleRegister = () => {
    router.push("/(auth)/register");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Box className="flex-1 p-6 justify-center">
        <LoginHeader />

        <LoginForm
          onSubmit={handleLogin}
          isSubmitting={status === "loading"}
          onForgotPassword={handleForgotPassword}
        />

        <LoginFooter onRegister={handleRegister} />
      </Box>
      <LoadingOverlay visible={status === "loading"} message="Entrando..." />
    </SafeAreaView>
  );
}
