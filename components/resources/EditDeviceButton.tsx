import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FilePenLine } from "lucide-react";
import DeviceAttributes from "./DeviceAttributes";

function EditDeviceButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <FilePenLine
          size={23}
          className="transition stroke-gray-500 hover:stroke-white p-1 cursor-pointer "
          onClick={() => ({})}
        />
      </DialogTrigger>
      <DialogContent className="min-w-full md:min-w-[46rem]">
        <DialogHeader>
          <DialogTitle className="flex w-fit">编辑</DialogTitle>
        </DialogHeader>
        <DeviceAttributes />
      </DialogContent>
    </Dialog>
  );
}

export default EditDeviceButton;
