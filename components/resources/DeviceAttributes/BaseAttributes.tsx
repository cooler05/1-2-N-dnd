"use client";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";

function BaseAttributes() {
  const iPDevice = useRef<HTMLButtonElement>(null);
  const [isIPDevice, setIsIPDevice] = useState(
    iPDevice.current?.dataset.state === "checked" ? true : false
  );
  console.log("checked", isIPDevice);

  const [date, setDate] = useState<Date>();

  const handleSwitch = () => {
    setIsIPDevice((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col justify-center gap-5 w-full h-full overflow-y-auto">
      <div className="flex items-center gap-10">
        <div className="flex flex-1 items-center space-x-2">
          <Label
            htmlFor="property-rights"
            className="min-w-fit before:content-['*'] before:text-red-700"
          >
            所属机构:
          </Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue id="property-rights" placeholder="请选择" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="wjg">未交工</SelectItem>
              <SelectItem value="yjg">已交工</SelectItem>
              <SelectItem value="done">已竣工</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-1 items-center space-x-2">
          <Label htmlFor="property-rights" className="min-w-fit">
            原所属区域:
          </Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue id="property-rights" placeholder="请选择" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="wjg">未交工</SelectItem>
              <SelectItem value="yjg">已交工</SelectItem>
              <SelectItem value="done">已竣工</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex items-center gap-10">
        <div className="flex flex-1 items-center space-x-2">
          <Label
            htmlFor="property-rights"
            className="min-w-fit before:content-['*'] before:text-red-700"
          >
            所属区域:
          </Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue id="property-rights" placeholder="请选择" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="wjg">未交工</SelectItem>
              <SelectItem value="yjg">已交工</SelectItem>
              <SelectItem value="done">已竣工</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-1 items-center space-x-2">
          <Label htmlFor="property-rights" className="min-w-fit">
            区域位置:
          </Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue id="property-rights" placeholder="请选择" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="wjg">未交工</SelectItem>
              <SelectItem value="yjg">已交工</SelectItem>
              <SelectItem value="done">已竣工</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex items-center gap-10">
        <div className="flex flex-1 items-center space-x-2">
          <Label
            htmlFor="property-rights"
            className="min-w-fit before:content-['*'] before:text-red-700"
          >
            车道/隧道:
          </Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue id="property-rights" placeholder="请选择" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="wjg">未交工</SelectItem>
              <SelectItem value="yjg">已交工</SelectItem>
              <SelectItem value="done">已竣工</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-1 items-center space-x-2">
          <Label htmlFor="property-rights" className="min-w-fit">
            详细位置:
          </Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue id="property-rights" placeholder="请选择" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="wjg">未交工</SelectItem>
              <SelectItem value="yjg">已交工</SelectItem>
              <SelectItem value="done">已竣工</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex items-center gap-10">
        <div className="flex flex-1 items-center space-x-2">
          <Label
            htmlFor="property-rights"
            className="min-w-fit before:content-['*'] before:text-red-700"
          >
            服役状态:
          </Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue id="property-rights" placeholder="请选择" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="wjg">未交工</SelectItem>
              <SelectItem value="yjg">已交工</SelectItem>
              <SelectItem value="done">已竣工</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-1 items-center space-x-2">
          <Label htmlFor="property-rights" className="min-w-fit">
            资源类型:
          </Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue id="property-rights" placeholder="请选择" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="wjg">未交工</SelectItem>
              <SelectItem value="yjg">已交工</SelectItem>
              <SelectItem value="done">已竣工</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Separator />

      <div className="flex items-center gap-10">
        <div className="flex flex-1 items-center space-x-2">
          <Label
            htmlFor="property-rights"
            className="min-w-fit before:content-['*'] before:text-red-700"
          >
            设备系统:
          </Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue id="property-rights" placeholder="请选择" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="wjg">未交工</SelectItem>
              <SelectItem value="yjg">已交工</SelectItem>
              <SelectItem value="done">已竣工</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-1 items-center space-x-2">
          <Label htmlFor="property-rights" className="min-w-fit">
            设备类型:
          </Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue id="property-rights" placeholder="请选择" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="wjg">未交工</SelectItem>
              <SelectItem value="yjg">已交工</SelectItem>
              <SelectItem value="done">已竣工</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex items-center gap-10">
        <div className="flex flex-1 items-center space-x-2">
          <Label
            htmlFor="property-rights"
            className="min-w-fit before:content-['*'] before:text-red-700"
          >
            设备名称:
          </Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue id="property-rights" placeholder="请选择" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="wjg">未交工</SelectItem>
              <SelectItem value="yjg">已交工</SelectItem>
              <SelectItem value="done">已竣工</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-1 items-center space-x-2">
          <Label htmlFor="property-rights" className="min-w-fit">
            设备编号:
          </Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue id="property-rights" placeholder="请选择" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="wjg">未交工</SelectItem>
              <SelectItem value="yjg">已交工</SelectItem>
              <SelectItem value="done">已竣工</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex items-center gap-10">
        <div className="flex flex-1 items-center space-x-2">
          <Label
            htmlFor="property-rights"
            className="min-w-fit before:content-['*'] before:text-red-700"
          >
            设备厂家:
          </Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue id="property-rights" placeholder="请选择" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="wjg">未交工</SelectItem>
              <SelectItem value="yjg">已交工</SelectItem>
              <SelectItem value="done">已竣工</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-1 items-center space-x-2">
          <Label htmlFor="property-rights" className="min-w-fit">
            设备型号:
          </Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue id="property-rights" placeholder="请选择" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="wjg">未交工</SelectItem>
              <SelectItem value="yjg">已交工</SelectItem>
              <SelectItem value="done">已竣工</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="flex items-center gap-10">
        <div className="flex flex-1 items-center space-x-2">
          <Label
            htmlFor="property-rights"
            className="min-w-fit before:content-['*'] before:text-red-700"
          >
            功率（W）:
          </Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue id="property-rights" placeholder="请选择" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="wjg">未交工</SelectItem>
              <SelectItem value="yjg">已交工</SelectItem>
              <SelectItem value="done">已竣工</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-1 items-center space-x-2">
          <Label htmlFor="property-rights" className="min-w-fit">
            是否重要设备:
          </Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue id="property-rights" placeholder="请选择" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="wjg">未交工</SelectItem>
              <SelectItem value="yjg">已交工</SelectItem>
              <SelectItem value="done">已竣工</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-1 items-center space-x-2">
        <Label htmlFor="property-rights" className="min-w-fit">
          数量:
        </Label>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue id="property-rights" placeholder="请选择" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="wjg">未交工</SelectItem>
            <SelectItem value="yjg">已交工</SelectItem>
            <SelectItem value="done">已竣工</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Separator />

      <div className="flex items-center gap-10">
        <div className="flex flex-1 items-center space-x-2">
          <Switch ref={iPDevice} id="ip-device" onClick={handleSwitch} />
          <Label htmlFor="ip-device" className="min-w-fit">
            IP类设备
          </Label>
        </div>
        <div className="flex flex-1 items-center">
          <Label
            htmlFor="ip-address"
            className={cn(
              "min-w-fit",
              isIPDevice && "before:content-['*'] before:text-red-700"
            )}
          >
            IP地址：
          </Label>
          <Input id="ip-address" disabled={!isIPDevice} />
        </div>
      </div>
      <div className="flex items-center gap-10">
        <div className="flex flex-1 items-center">
          <Label
            htmlFor="mac-address"
            className={cn(
              "min-w-fit",
              isIPDevice && "before:content-['*'] before:text-red-700"
            )}
          >
            MAC地址：
          </Label>
          <Input id="mac-address" disabled={!isIPDevice} />
        </div>
        <div className="flex flex-1 items-center">
          <Label
            htmlFor="dns-address"
            className={cn(
              "min-w-fit",
              isIPDevice && "before:content-['*'] before:text-red-700"
            )}
          >
            网关地址：
          </Label>
          <Input id="dns-address" disabled={!isIPDevice} />
        </div>
      </div>

      <Separator className="w-full" />

      <div className="flex items-center gap-10">
        <div className="flex flex-1 items-center">
          <Label htmlFor="contract-price" className={cn("min-w-fit")}>
            合同单价：
          </Label>
          <Input id="contract-price" />
        </div>
        <div className="flex flex-1 items-center">
          <Label
            htmlFor="deployment-date"
            className={cn("min-w-fit before:content-['*'] before:text-red-700")}
          >
            投用时间：
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[280px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>选择日期</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="flex items-center gap-10">
        <div className="flex flex-1 items-center space-x-2">
          <Switch id="defectLiabilityPeriod" />
          <Label htmlFor="defectLiabilityPeriod" className="min-w-fit">
            缺陷责任期
          </Label>
        </div>
        <div className="flex flex-1 items-center space-x-2">
          <Label htmlFor="property-rights" className="min-w-fit">
            产权情况:
          </Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue id="property-rights" placeholder="请选择" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="wjg">未交工</SelectItem>
              <SelectItem value="yjg">已交工</SelectItem>
              <SelectItem value="done">已竣工</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-1 items-center space-x-2">
        <Label htmlFor="device-state" className="min-w-fit">
          设备状态:
        </Label>
        <RadioGroup
          defaultValue="option-one"
          id="device-state"
          className="flex items-center"
          disabled
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="option-one" />
            <Label htmlFor="option-one">正常</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="option-two" />
            <Label htmlFor="option-two">故障</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="flex flex-1 items-center space-x-2">
        <Label htmlFor="remarks" className="min-w-fit">
          备注:
        </Label>
        <Textarea id="remarks" />
      </div>

      <div className="flex flex-1 items-center space-x-2">
        <Label htmlFor="picture" className="min-w-fit">
          设备照片:
        </Label>
        <Input id="picture" type="file" className="hover:cursor-pointer" />
      </div>
    </div>
  );
}

export default BaseAttributes;
