import React from "react";
import DevicesContainer from "./DevicesContainer";
import CreateContainerButton from "./CreateContainerButton";
import { useContainerStore } from "@/lib/store";

function KanbanBoard() {
  const containers = useContainerStore((state) => state.containers);
  return (
    <div className="border h-full flex flex-col gap-2">
      <div className="flex justify-start items-center">
        <CreateContainerButton />
      </div>
      <div className="flex justify-center items-center h-full">
        {containers.map((container, index) => (
          <DevicesContainer key={index} container={container} />
        ))}
      </div>
    </div>
  );
}

export default KanbanBoard;
