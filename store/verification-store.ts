import { create } from "zustand";

type Emailverifystoreprops = {
  email: string;
  tokenType: string;
  setEmail: (email: string) => void;
  setTokenType: (tokentype: string) => void;
};

export const useEmailVerificationStore = create<Emailverifystoreprops>(
  (set) => ({
    email: "",
    tokenType: "",
    setEmail: (email) => set((state) => ({ ...state, email })),
    setTokenType: (tokenType) => set((state) => ({ ...state, tokenType })),
  })
);
