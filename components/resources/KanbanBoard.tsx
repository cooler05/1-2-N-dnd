"use client";
import DevicesContainer from "./DevicesContainer";
import CreateContainerButton from "./CreateContainerButton";
import { useContainerStore } from "@/lib/store";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { useState } from "react";
import { Ledger } from "@/types";
import { areas, locations } from "@/app/resources/ledger/page";
import { useSearchParams } from "next/navigation";

function KanbanBoard() {
  const { containers, updateContainers } = useContainerStore((state) => state);
  const containerIds = containers.map((container) => container.id);
  const [activeContainer, setActiveContainer] = useState<Ledger>(containers[0]);
  const handleDragStart = (e: DragStartEvent) => {
    setActiveContainer(e.active.data.current?.container);
  };
  const handleDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;
    if (!over) return;
    if (active.id === over.id) return;
    const activeIdx = containers.findIndex(
      (container) => container.id === active.id
    );
    const overIdx = containers.findIndex(
      (container) => container.id === over.id
    );
    updateContainers(arrayMove(containers, activeIdx, overIdx));
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
  console.log(areaName, locationName);

  return (
    <div className="relative h-full flex flex-col gap-2 px-3">
      <h2 className="absolute top-1 left-1/2">
        {areaName && locationName
          ? `${areaName}--${locationName}`
          : "未选定位置"}
      </h2>
      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="flex justify-start items-center">
          <CreateContainerButton />
        </div>
        <div className="flex justify-start items-center h-full gap-3 overflow-x-scroll overflow-y-hidden">
          <SortableContext items={containerIds}>
            {containers.map((container) => (
              <DevicesContainer key={container.id} container={container} />
            ))}
          </SortableContext>
        </div>
        <DragOverlay>
          <DevicesContainer container={activeContainer} />
        </DragOverlay>
      </DndContext>
    </div>
  );
}

export default KanbanBoard;
