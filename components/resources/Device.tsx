import { useDeviceStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import EditDeviceButton from "./EditDeviceButton";
import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";

interface DeviceProps {
  id: string;
}

function Device({ id }: DeviceProps) {
  const devices = useDeviceStore((state) => state.devices);
  const currentDevice = devices.filter((device) => device.id === id)[0];

  return (
    <div className={cn("relative group flex items-center cursor-grab")}>
      <Button variant="default" className="w-full mx-auto text-center py-2">
        {currentDevice?.deviceName}
      </Button>
      <div className="hidden group-hover:block absolute left-2 top-[9px] transition">
        <EditDeviceButton device={currentDevice} />
      </div>
      <Trash2
        size={23}
        className="absolute right-2 transition stroke-gray-500 hover:stroke-white p-1 cursor-pointer"
        onClick={() => {}}
      />
    </div>
  );
}

export default Device;
