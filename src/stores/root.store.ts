import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import {
  AuthActions,
  createAuthActions,
} from "../features/auth/store/auth.actions";
import { AuthState, createAuthSlice } from "../features/auth/store/auth.slice";

export type RootStore = AuthState & AuthActions;

export const useStore = create<RootStore>()(
  persist(
    (set, get, store) => ({
      ...createAuthSlice(set, get),
      ...createAuthActions(set, get),
    }),
    {
      name: "app-storage",
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        user: state.user,
        token: state.token,
      }),
    }
  )
);
