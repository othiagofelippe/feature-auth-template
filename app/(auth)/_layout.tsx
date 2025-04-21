import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="index"
        options={{ title: "Login", headerShown: false }}
      />
      <Stack.Screen
        name="forgot-password"
        options={{ title: "Recuperar Senha", headerShown: false }}
      />
      <Stack.Screen
        name="register"
        options={{ title: "Registrar", headerShown: false }}
      />
      <Stack.Screen
        name="reset-password"
        options={{ title: "Redefinir Senha", headerShown: false }}
      />
      <Stack.Screen
        name="verification-code"
        options={{ title: "Código de Verificação", headerShown: false }}
      />
    </Stack>
  );
}
