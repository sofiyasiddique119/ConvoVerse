import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("ConvoVerse-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("ConvoVerse-theme", theme);
    set({ theme });
  },
}));
