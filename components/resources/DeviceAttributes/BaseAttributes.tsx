import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";

function BaseAttributes() {
  return (
    <div className="space-y-2 w-full">
      <div className="flex items-center gap-10">
        <div className="flex items-center space-x-2">
          <Switch id="ip-device" />
          <Label htmlFor="ip-device" className="min-w-fit">
            IP类设备
          </Label>
        </div>
        <div className="flex items-center">
          <Label htmlFor="ip-address" className="min-w-fit">
            IP地址：
          </Label>
          <Input />
        </div>
      </div>
      <div className="flex items-center gap-10">
        <div className="flex items-center">
          <Label htmlFor="ip-address" className="min-w-fit">
            MAC地址：
          </Label>
          <Input />
        </div>
        <div className="flex items-center">
          <Label htmlFor="ip-address" className="min-w-fit">
            网关地址：
          </Label>
          <Input />
        </div>
      </div>
      <Separator className="w-full" />
    </div>
  );
}

export default BaseAttributes;
