import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FilePenLine } from "lucide-react";
import DeviceAttributes from "./DeviceAttributes";
import { Ledger } from "@/types";

interface EditDeviceButtonProps {
  device: Ledger;
}
function EditDeviceButton({ device }: EditDeviceButtonProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <FilePenLine
          size={23}
          className="transition stroke-gray-500 hover:stroke-white p-1 cursor-pointer "
        />
      </DialogTrigger>
      <DialogContent className="min-w-full md:min-w-[46rem] h-full flex flex-col z-50">
        <DialogHeader>
          <DialogTitle className="flex w-fit">编辑</DialogTitle>
        </DialogHeader>
        <DeviceAttributes device={device} />
      </DialogContent>
    </Dialog>
  );
}

export default EditDeviceButton;
