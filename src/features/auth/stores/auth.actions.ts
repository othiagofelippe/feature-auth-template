// src/features/auth/store/auth.actions.ts
import { router } from "expo-router";
import { LoginFormData } from "../schemas/login.schema";
import { RegisterFormData } from "../schemas/register.schema";
import { ResetPasswordFormData } from "../schemas/reset-password.schema";
import { AuthState } from "./auth.slice";

// Simula delay de rede
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Mock de usuários
const mockUsers = [
  {
    id: "1",
    name: "Usuário Teste",
    email: "teste@exemplo.com",
    password: "Senha@12345678",
  },
];

export interface AuthActions {
  login: (data: LoginFormData) => Promise<void>;
  register: (data: RegisterFormData) => Promise<void>;
  logout: () => void;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (data: ResetPasswordFormData) => Promise<void>;
  verifyCode: (code: string) => Promise<boolean>;
  checkAuth: () => Promise<void>;
}

export const createAuthActions = (
  set: (partial: Partial<AuthState>) => void,
  get: () => AuthState
): AuthActions => ({
  login: async (data) => {
    const { setUser, setToken, setStatus, setError } = get();

    try {
      setStatus("loading");
      setError(null);

      await delay(1500); // Simula requisição

      const user = mockUsers.find((u) => u.email === data.email);
      if (!user || user.password !== data.password) {
        throw new Error("Email ou senha incorretos");
      }

      // Login bem-sucedido
      const { password, ...userData } = user;
      setUser(userData);
      setToken("mock-jwt-token-" + Math.random().toString(36).substring(2));
      setStatus("success");
      router.replace("/(protected)/(tabs)/home");
    } catch (error) {
      setStatus("error");
      setError(error instanceof Error ? error.message : "Erro ao fazer login");
      throw error; // Re-throw para tratamento no componente
    }
  },

  register: async (data) => {
    const { setUser, setToken, setStatus, setError } = get();

    try {
      setStatus("loading");
      setError(null);

      await delay(2000);

      const exists = mockUsers.find((u) => u.email === data.email);
      if (exists) {
        throw new Error("Este email já está cadastrado");
      }

      // Cria novo usuário
      const newUser = {
        id: Date.now().toString(),
        name: data.name,
        email: data.email,
        password: data.password,
      };

      mockUsers.push(newUser);

      // Auto-login
      const { password, ...userData } = newUser;
      setUser(userData);
      setToken("mock-jwt-token-" + Math.random().toString(36).substring(2));
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setError(error instanceof Error ? error.message : "Erro ao criar conta");
      throw error;
    }
  },

  logout: () => {
    const { reset } = get();
    reset();
  },

  forgotPassword: async (email) => {
    const { setStatus, setError } = get();

    try {
      setStatus("loading");
      setError(null);

      await delay(1500);

      const user = mockUsers.find((u) => u.email === email);
      if (!user) {
        throw new Error("Email não encontrado");
      }

      // Simula envio de código
      console.log(`Código enviado para ${email}: 123456`);

      setStatus("success");
    } catch (error) {
      setStatus("error");
      setError(
        error instanceof Error ? error.message : "Erro ao enviar código"
      );
      throw error;
    }
  },

  verifyCode: async (code) => {
    const { setStatus, setError } = get();

    try {
      setStatus("loading");
      setError(null);

      await delay(1200);

      // Simula verificação
      if (code !== "123456") {
        throw new Error("Código inválido");
      }

      setStatus("success");
      return true;
    } catch (error) {
      setStatus("error");
      setError(error instanceof Error ? error.message : "Código inválido");
      throw error;
    }
  },

  resetPassword: async (data) => {
    const { setStatus, setError } = get();

    try {
      setStatus("loading");
      setError(null);

      await delay(1700);

      // Simulação de redefinição
      console.log("Senha redefinida com sucesso");

      setStatus("success");
    } catch (error) {
      setStatus("error");
      setError(
        error instanceof Error ? error.message : "Erro ao redefinir senha"
      );
      throw error;
    }
  },

  checkAuth: async () => {
    const { setStatus, setUser, setToken, setError } = get();

    try {
      setStatus("loading");

      await delay(800);

      // Simulação de verificação de token
      // Em um app real, você verificaria o token no AsyncStorage
      // e faria uma chamada para verificar sua validade no servidor

      setStatus("idle");
    } catch (error) {
      setStatus("error");
      setError("Sessão expirada");
      setUser(null);
      setToken(null);
    }
  },
});
