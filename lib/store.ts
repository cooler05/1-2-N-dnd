import { create } from "zustand";
import { Ledger } from "@/types";

export type TDevicesContainer = {
  containers: Ledger[];
};

export type Actions = {
  addContainer: (device: Ledger) => void;
  removeContainer: (id: string) => void;
  updateContainers: (containers: Ledger[]) => void;
};

export const useContainerStore = create<TDevicesContainer & Actions>()(
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
    updateContainers: (newContainers: Ledger[]) =>
      set(() => ({
        containers: newContainers,
      })),
  })
);
