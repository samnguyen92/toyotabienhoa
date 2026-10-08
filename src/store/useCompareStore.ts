import { create } from "zustand";

interface CompareStore {
  selectedCarIds: string[];
  maxCars: number;
  addCar: (carId: string) => boolean;
  removeCar: (carId: string) => void;
  toggleCar: (carId: string) => boolean;
  clearCompare: () => void;
  isInCompare: (carId: string) => boolean;
}

export const useCompareStore = create<CompareStore>((set, get) => ({
  selectedCarIds: [],
  maxCars: 3,

  addCar: (carId: string) => {
    const current = get().selectedCarIds;
    if (current.includes(carId)) {
      return true;
    }
    if (current.length >= 3) {
      return false; // Exceeded limit
    }
    set({ selectedCarIds: [...current, carId] });
    return true;
  },

  removeCar: (carId: string) => {
    set({
      selectedCarIds: get().selectedCarIds.filter((id) => id !== carId),
    });
  },

  toggleCar: (carId: string) => {
    const current = get().selectedCarIds;
    if (current.includes(carId)) {
      set({ selectedCarIds: current.filter((id) => id !== carId) });
      return true;
    } else {
      if (current.length >= 3) {
        return false;
      }
      set({ selectedCarIds: [...current, carId] });
      return true;
    }
  },

  clearCompare: () => {
    set({ selectedCarIds: [] });
  },

  isInCompare: (carId: string) => {
    return get().selectedCarIds.includes(carId);
  },
}));
