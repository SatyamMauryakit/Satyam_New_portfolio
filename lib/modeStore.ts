import { create } from "zustand";

export type RoleMode = "developer" | "devops";

interface ModeState {
  mode: RoleMode;
  setMode: (m: RoleMode) => void;
  toggle: () => void;
}

export const useModeStore = create<ModeState>((set, get) => ({
  mode: "developer",
  setMode: (m) => set({ mode: m }),
  toggle: () => set({ mode: get().mode === "developer" ? "devops" : "developer" })
}));
