import { TContainer, useDeviceStore } from "@/lib/store";
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { PlusCircle, Trash2 } from "lucide-react";
import { CSS } from "@dnd-kit/utilities";
import { cn } from "@/lib/utils";
import EditDeviceButton from "./EditDeviceButton";
import { Button } from "../ui/button";
import { v4 as uuidv4 } from "uuid";
import Device from "./Device";
import { useMemo } from "react";

export const generateDevice = () => ({
  id: uuidv4(),
  affiliatedInstitution: "监控分中心",
  affiliatedRegion: "监控分中心",
  regionalLocation: "机房",
  systemPlatform: "监控系统",
  deviceName: `设备 ${uuidv4()}`.substring(0, 8),
  deviceType: "设备",
  deviceID: "通信设备",
  detailedLocation: "机房",
  manufacturer: "华为",
  deviceModel: "abc",
  isIPDevice: false,
  ipAddress: undefined,
  macAddress: undefined,
  gatewayAddress: undefined,
  direction: undefined,
  operationalStatus: "正常",
  serviceStatus: "在役",
  resourceType: "正常",
  resourceStatus: "正常",
  deploymentDate: "2024/2/23",
  quantity: undefined,
  defectLiabilityPeriod: "空",
});

interface DevicesContainerProps {
  container: TContainer;
}

function DevicesContainer({ container }: DevicesContainerProps) {
  const { devices, addDevice, removeContainer } = useDeviceStore(
    (state) => state
  );
  const devicesInCurrentContainer = devices.filter(
    (device) => device.containerId === container?.props.id
  );
  const deviceIds = useMemo(
    () => devicesInCurrentContainer.map((device) => device.props.id),
    [devicesInCurrentContainer]
  );
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: container?.props.id,
    data: {
      type: "Container",
      container,
    },
  });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const handleClick = () => {
    addDevice({
      props: generateDevice(),
      containerId: container.props.id,
    });
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cn(
        "flex flex-col border-2 border-gray-900 rounded-md max-h-96 min-h-96 min-w-64 max-w-64 bg-gray-300 overflow-x-hidden ",
        isDragging && "opacity-30"
      )}
    >
      <div
        className={cn(
          "relative group flex items-center bg-gray-900 text-white"
        )}
      >
        <h2
          {...attributes}
          {...listeners}
          className="mx-auto text-center py-2 h-10 cursor-grab w-full"
        >
          {container?.props.deviceName}
        </h2>
        <div className="hidden group-hover:block absolute left-2 top-[9px] transition">
          <EditDeviceButton device={container?.props} />
        </div>
        <Trash2
          size={23}
          className="absolute right-2 transition stroke-gray-500 hover:stroke-white p-1 cursor-pointer"
          onClick={() => removeContainer(container?.props.id)}
        />
      </div>
      <SortableContext items={deviceIds}>
        <div className="flex-1 flex flex-col p-1 gap-1 w-full overflow-x-hidden overflow-y-auto">
          {devicesInCurrentContainer.map((device) => (
            <Device key={device.props.id} device={device} />
          ))}
        </div>
      </SortableContext>

      <div>
        <Button
          variant="outline"
          className="gap-2 w-full"
          onClick={handleClick}
        >
          <PlusCircle size={16} />
          添加设备
        </Button>
      </div>
    </div>
  );
}

export default DevicesContainer;
