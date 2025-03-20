import { create } from "zustand"

interface NavState {
  isMenuOpen: boolean
  toggleMenu: () => void
  closeMenu: () => void
}

export const useNavStore = create<NavState>((set) => ({
  isMenuOpen: false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  closeMenu: () => set({ isMenuOpen: false }),
}))

