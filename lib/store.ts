import { create } from "zustand";
import { Ledger } from "@/types";

export type TDevice = {
  props: Ledger;
  containerId: string;
};
export type TContainer = {
  props: Ledger;
  childIds: string[];
};
interface DeviceState {
  devices: TDevice[];
  containers: TContainer[];
  addDevice: (device: TDevice) => void;
  updateDevices: (devices: TDevice[]) => void;
  removeDevice: (id: string) => void;
  addContainer: (container: TContainer) => void;
  changeContainerName: (id: string, name: string) => void;
  removeContainer: (id: string) => void;
  updateContainers: (containers: TContainer[]) => void;
}

export const useDeviceStore = create<DeviceState>()((set) => ({
  devices: [],
  containers: [],
  addDevice: (newDevice) =>
    set((state) => ({
      devices: [...state.devices, newDevice],
    })),
  updateDevices: (newDevices) =>
    set(() => ({
      devices: newDevices,
    })),
  removeDevice: (id) =>
    set((state) => ({
      devices: state.devices.filter((device) => device.props.id !== id),
    })),
  changeContainerName: (id, name) =>
    set((state) => {
      const newContainers = state.containers.map((container) => {
        if (container.props.id === id) {
          return {
            ...container,
            props: { ...container.props, deviceName: name },
          };
        }
        return container;
      });
      return { containers: newContainers };
    }),
  addContainer: (newContainer) =>
    set((state) => ({
      containers: [...state.containers, newContainer],
    })),
  removeContainer: (id) =>
    set((state) => ({
      containers: state.containers.filter(
        (container) => container.props.id !== id
      ),
    })),
  updateContainers: (newContainers) =>
    set(() => ({
      containers: newContainers,
    })),
}));
