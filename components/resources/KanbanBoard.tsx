"use client";
import React from "react";
import { Button } from "../ui/button";
import { PlusCircle } from "lucide-react";
import DevicesContainer from "./DevicesContainer";

function KanbanBoard() {
  const createEqupContainer = () => {};

  return (
    <div className="border h-full flex flex-col gap-2">
      <div className="flex justify-start items-center">
        <Button
          size="sm"
          className="gap-2"
          onClick={() => createEqupContainer()}
        >
          <PlusCircle size={16} />
          添加容器
        </Button>
      </div>
      <div className="flex justify-center items-center h-full">
        <DevicesContainer />
      </div>
    </div>
  );
}

export default KanbanBoard;
