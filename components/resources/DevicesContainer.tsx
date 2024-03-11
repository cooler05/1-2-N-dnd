import { useContainerStore } from "@/lib/store";
import { Ledger } from "@/types";
import { useSortable } from "@dnd-kit/sortable";
import { FilePenLine, Trash2 } from "lucide-react";
import { CSS } from "@dnd-kit/utilities";
import { cn } from "@/lib/utils";

interface DevicesContainerProps {
  container: Ledger;
}

function DevicesContainer({ container }: DevicesContainerProps) {
  const removeContainer = useContainerStore((state) => state.removeContainer);
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: container.id,
    data: {
      type: "container",
      container,
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
      className={cn(
        "flex flex-col border-2 border-gray-900 rounded-md max-h-96 min-h-96 min-w-64 max-w-64 bg-gray-300 overflow-x-hidden",
        isDragging && "opacity-30"
      )}
    >
      <div
        {...attributes}
        {...listeners}
        className={cn(
          "relative group flex items-center bg-gray-900 text-white cursor-grab"
        )}
      >
        <h2 className="mx-auto text-center py-2">{container.deviceName}</h2>
        <FilePenLine
          size={23}
          className="hidden group-hover:block absolute left-2 transition stroke-gray-500 hover:stroke-white p-1 cursor-pointer"
          onClick={() => ({})}
        />
        <Trash2
          size={23}
          className="absolute right-2 transition stroke-gray-500 hover:stroke-white p-1 cursor-pointer"
          onClick={() => removeContainer(container.id)}
        />
      </div>
      <div className="flex-1 flex flex-col overflow-y-auto">content</div>
      <div>footer</div>
    </div>
  );
}

export default DevicesContainer;
