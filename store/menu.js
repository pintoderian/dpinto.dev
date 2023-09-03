import { create } from 'zustand';

export const useMenuStore = create((set, get) => ({
  active: 'about',
  setActive: (value) => set((state) => ({ ...state, active: value }))
}));
