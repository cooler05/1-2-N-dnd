import { TDevice, useDeviceStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import EditDeviceButton from "./EditDeviceButton";
import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface DeviceProps {
  device: TDevice;
}

function Device({ device }: DeviceProps) {
  const { devices, removeDevice } = useDeviceStore((state) => state);
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: device.props.id,
    data: {
      type: "Device",
      device,
    },
  });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={cn(
        "relative group flex items-center",
        isDragging && "opacity-30"
      )}
    >
      <Button
        variant="default"
        className="w-full mx-auto text-center py-2 hover:cursor-grab"
      >
        {device.props.deviceName}
      </Button>
      <div className="hidden group-hover:block absolute left-2 top-[9px] transition">
        <EditDeviceButton device={device.props} />
      </div>
      <Trash2
        size={23}
        className="hidden group-hover:block absolute right-2 transition stroke-gray-500 hover:stroke-white p-1 cursor-pointer"
        onClick={() => removeDevice(device.props.id)}
      />
    </div>
  );
}

export default Device;
