import { create } from "zustand";
import { Ledger } from "@/types";

export type DevicesContainer = {
  containers: Ledger[];
};

export type Actions = {
  addContainer: (device: Ledger) => void;
  removeContainer: (id: string) => void;
  updateContainer: (device: Ledger) => void;
};

export const useContainerStore = create<DevicesContainer & Actions>()(
  (set) => ({
    containers: [],
    addContainer: (container: Ledger) =>
      set((state) => ({
        containers: [...state.containers, container],
      })),
    removeContainer: (id: string) =>
      set((state) => ({
        containers: state.containers.filter((device) => device.id !== id),
      })),
    updateContainer: (updatedContainer: Ledger) =>
      set((state) => ({
        containers: state.containers.map((device) =>
          device.id === updatedContainer.id ? updatedContainer : device
        ),
      })),
  })
);
