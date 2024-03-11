import { create } from "zustand";
import { Ledger } from "@/types";

export type TDevice = Ledger;
export type TContainer = {
  props: TDevice;
  childIds: string[];
};
interface DeviceState {
  devices: TDevice[];
  containers: TContainer[];
  addDevice: (device: TDevice) => void;
  addDeviceToContainer: (containerId: string, deviceId: string) => void;
  addContainer: (container: TContainer) => void;
  removeContainer: (id: string) => void;
  updateContainers: (containers: TContainer[]) => void;
}

export const useDeviceStore = create<DeviceState>()((set) => ({
  devices: [],
  containers: [],
  addDevice: (newDevice: TDevice) =>
    set((state) => ({
      devices: [...state.devices, newDevice],
    })),
  addDeviceToContainer: (containerId: string, deviceId: string) =>
    set((state) => {
      const addedContainer = state.containers.map((container) =>
        container.props.id === containerId
          ? { ...container, childIds: [...container.childIds, deviceId] }
          : container
      );
      return { containers: addedContainer };
    }),
  addContainer: (container: TContainer) =>
    set((state) => ({
      containers: [...state.containers, container],
    })),
  removeContainer: (id: string) =>
    set((state) => ({
      containers: state.containers.filter(
        (container) => container.props.id !== id
      ),
    })),
  updateContainers: (newContainers: TContainer[]) =>
    set(() => ({
      containers: newContainers,
    })),
}));
