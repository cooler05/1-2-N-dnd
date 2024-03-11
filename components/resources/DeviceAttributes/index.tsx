import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BaseAttributes from "./BaseAttributes";

function DeviceAttributes() {
  return (
    <Tabs defaultValue="base" className="w-full h-full overflow-y-auto">
      <TabsList>
        <TabsTrigger value="base">基本信息</TabsTrigger>
        <TabsTrigger value="iot">物联信息</TabsTrigger>
        <TabsTrigger value="keyInfo">关键参数</TabsTrigger>
      </TabsList>
      <TabsContent value="base" className="">
        <BaseAttributes />
      </TabsContent>
      <TabsContent value="iot">ito here.</TabsContent>
      <TabsContent value="keyInfo">key info here.</TabsContent>
    </Tabs>
  );
}

export default DeviceAttributes;
