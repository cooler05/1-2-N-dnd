"use client";
import { PlusCircle } from "lucide-react";
import { Button } from "../ui/button";
import { useDeviceStore } from "@/lib/store";
import { v4 as uuidv4 } from "uuid";

const generateContainer = () => ({
  props: {
    id: uuidv4(),
    affiliatedInstitution: "监控分中心",
    affiliatedRegion: "监控分中心",
    regionalLocation: "机房",
    systemPlatform: "监控系统",
    deviceName: `机柜 ${uuidv4()}`.substring(0, 8),
    deviceType: "机柜",
    deviceID: "通信机柜",
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
  },
  childIds: [],
});

function CreateContainerButton() {
  const addContainer = useDeviceStore((state) => state.addContainer);

  return (
    <Button
      size="sm"
      className="gap-2"
      onClick={() => addContainer(generateContainer())}
    >
      <PlusCircle size={16} />
      添加容器
    </Button>
  );
}

export default CreateContainerButton;
