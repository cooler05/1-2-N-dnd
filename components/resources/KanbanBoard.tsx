"use client";
import DevicesContainer from "./DevicesContainer";
import CreateContainerButton from "./CreateContainerButton";
import { useContainerStore } from "@/lib/store";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { useState } from "react";
import { Ledger } from "@/types";

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

  return (
    <div className="h-full flex flex-col gap-2 px-3">
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
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
