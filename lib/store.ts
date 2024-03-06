import { create } from "zustand";
import { Ledger } from "@/types";

export type DevicesContainer = {
  containers: Ledger[];
};

export type Actions = {
  addDevice: (device: Ledger) => void;
  removeDevice: (id: string) => void;
  updateDevice: (device: Ledger) => void;
};

export const useContainerStore = create<DevicesContainer & Actions>()(
  (set) => ({
    containers: [],
    addDevice: (device: Ledger) =>
      set((state) => ({
        containers: [...state.containers, device],
      })),
    removeDevice: (id: string) =>
      set((state) => ({
        containers: state.containers.filter((device) => device.id !== id),
      })),
    updateDevice: (updatedDevice: Ledger) =>
      set((state) => ({
        containers: state.containers.map((device) =>
          device.id === updatedDevice.id ? updatedDevice : device
        ),
      })),
  })
);
