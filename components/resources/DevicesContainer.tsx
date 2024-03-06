import { Ledger } from "@/types";
import React from "react";

interface DevicesContainerProps {
  container?: Ledger;
}

function DevicesContainer({ container }: DevicesContainerProps) {
  return (
    <div className="flex flex-col border rounded-md h-12 max-h-96 w-64 bg-gray-200">
      DevicesContainer
    </div>
  );
}

export default DevicesContainer;
