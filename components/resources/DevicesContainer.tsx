import { Ledger } from "@/types";
import React from "react";

interface DevicesContainerProps {
  container?: Ledger;
}

function DevicesContainer({ container }: DevicesContainerProps) {
  return (
    <div className="flex flex-col border rounded-md max-h-96 w-64 bg-gray-200">
      <h2>{container?.deviceName}</h2>
    </div>
  );
}

export default DevicesContainer;
