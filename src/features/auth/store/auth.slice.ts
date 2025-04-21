// src/feature/auth/store/auth.slice.ts
import { BaseState } from "@/src/core/types/store";

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthState extends BaseState {
  user: User | null;
  token: string | null;

  // Métodos
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
  setStatus: (status: BaseState["status"]) => void;
  setError: (error: string | null) => void;
  reset: () => void;
}

// Estado inicial
const initialState = {
  user: null,
  token: null,
  status: "idle" as const,
  error: null,
};

// Modificando a assinatura para receber apenas os parâmetros necessários
export const createAuthSlice = (
  set: (partial: Partial<AuthState>) => void,
  get: () => AuthState
) => ({
  ...initialState,

  // Setters
  setUser: (user: User | null) => set({ user }),
  setToken: (token: string | null) => set({ token }),
  setStatus: (status: BaseState["status"]) => set({ status }),
  setError: (error: string | null) => set({ error }),

  // Reset
  reset: () => set(initialState),
});
