"use client";
import DevicesContainer from "./DevicesContainer";
import CreateContainerButton from "./CreateContainerButton";
import { TContainer, TDevice, useDeviceStore } from "@/lib/store";
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { useState } from "react";
import { areas, locations } from "@/app/resources/ledger/page";
import { useSearchParams } from "next/navigation";
import Device from "./Device";

function KanbanBoard() {
  const { devices, containers, updateContainers, updateDevices } =
    useDeviceStore((state) => state);
  const containerIds = containers.map((container) => container.props.id);
  const [activeContainer, setActiveContainer] = useState<TContainer>();
  const [activeDevice, setActiveDevice] = useState<TDevice>();

  const handleDragStart = (e: DragStartEvent) => {
    if (e.active.data.current?.type === "Container") {
      setActiveDevice(undefined);
      setActiveContainer(e.active.data.current?.container);
    } else {
      setActiveContainer(undefined);
      setActiveDevice(e.active.data.current?.device);
    }
  };

  const handleDragEnd = (e: DragEndEvent) => {
    setActiveDevice(undefined);
    setActiveContainer(undefined);
    const { active, over } = e;
    if (!over) return;
    if (active.id === over.id) return;
    const isActiveContainer = active.data.current?.type === "Container";
    const isOverContainer = over.data.current?.type === "Container";
    if (isActiveContainer && isOverContainer) {
      const activeContainerIdx = containers.findIndex(
        (container) => container.props.id === active.id
      );
      const overContainerIdx = containers.findIndex(
        (container) => container.props.id === over.id
      );
      updateContainers(
        arrayMove(containers, activeContainerIdx, overContainerIdx)
      );
    }
  };

  const handleDragOver = (e: DragOverEvent) => {
    const { active, over } = e;
    if (!over || active.id === over.id) return;
    const isActiveDevice = active.data.current?.type === "Device";
    const isOverDevice = over.data.current?.type === "Device";
    const isOverContainer = over.data.current?.type === "Container";
    if (!isActiveDevice) return;
    if (isActiveDevice && isOverDevice) {
      const activeIdx = devices.findIndex(
        (device) => device.props.id === active.id
      );
      const overIdx = devices.findIndex(
        (device) => device.props.id === over.id
      );
      devices[activeIdx].containerId = devices[overIdx].containerId;
      updateDevices(arrayMove(devices, activeIdx, overIdx));
    }
    if (isActiveDevice && isOverContainer) {
      const activeIdx = devices.findIndex(
        (device) => device.props.id === active.id
      );
      // const overIdx = containers.findIndex(
      //   (container) => container.props.id === over.id
      // );
      devices[activeIdx].containerId = over.id as string;

      updateDevices(arrayMove(devices, activeIdx, activeIdx));
    }
    // } else {
    //   const activeDevice = active.data.current?.device;
    //   const overContainerId = over.data.current?.device?.containerId ?? over.id;
    //   if (
    //     activeDevice &&
    //     overContainerId &&
    //     activeDevice.containerId !== overContainerId
    //   ) {
    //     const newDevices = devices.map((device) =>
    //       device.props.id === activeDevice.props.id
    //         ? { ...device, containerId: overContainerId ?? device.containerId }
    //         : device
    //     );
    //     updateDevices(newDevices);
    //   }
    // }
  };
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 3,
      },
    })
  );
  const searchParams = useSearchParams();
  const areaName = areas.filter(
    (area) => area.searchParam === searchParams.get("area")
  )[0]?.label;
  const locationName = locations.filter(
    (location) => location.searchParam === searchParams.get("location")
  )[0]?.label;

  return (
    <div className="relative h-full flex flex-col gap-2 px-3">
      <h2 className="absolute top-1 left-1/2 -translate-x-1/2">
        {areaName && locationName
          ? `${areaName}--${locationName}`
          : "未选定位置"}
      </h2>
      <div className="flex justify-start items-center">
        <CreateContainerButton />
      </div>
      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragOver={handleDragOver}
      >
        <div className="flex justify-start items-center h-full gap-3 overflow-x-scroll overflow-y-hidden">
          <SortableContext items={containerIds}>
            {containers.map((container) => (
              <DevicesContainer
                key={container.props.id}
                container={container}
              />
            ))}
          </SortableContext>
        </div>
        <DragOverlay>
          {!!activeContainer && (
            <DevicesContainer container={activeContainer} />
          )}
          {!!activeDevice && <Device device={activeDevice} />}
        </DragOverlay>
      </DndContext>
    </div>
  );
}

export default KanbanBoard;
