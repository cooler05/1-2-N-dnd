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
  updateDevices: (newDevices: TDevice[]) =>
    set(() => ({
      devices: newDevices,
    })),
  removeDevice: (id: string) =>
    set((state) => ({
      devices: state.devices.filter((device) => device.props.id !== id),
    })),
  addContainer: (newContainer: TContainer) =>
    set((state) => ({
      containers: [...state.containers, newContainer],
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
