import AreaTab from "@/components/resources/AreaTab";
import KanbanBoard from "@/components/resources/KanbanBoard";
import LocationTab from "@/components/resources/LocationTab";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

// export const areas = [
//   {
//     id: "0",
//     label: "沿线",
//     searchParam: "yx",
//     loc: "area",
//   },
//   {
//     id: "1",
//     label: "站区",
//     searchParam: "zq",
//     loc: "area",
//   },
// ];

export const areas = [
  {
    id: "1",
    label: "沿线路面",
    searchParam: "lm",
    loc: "area",
  },
  {
    id: "2",
    label: "沿线隧道",
    searchParam: "sd",
    loc: "area",
  },
  {
    id: "1",
    label: "六村堡",
    searchParam: "lcb",
    loc: "area",
  },
  {
    id: "2",
    label: "咸阳东",
    searchParam: "xyd",
    loc: "area",
  },
];

export const locations = [
  {
    id: "5",
    label: "广场",
    searchParam: "gc",
    loc: "location",
    belongTo: ["lcb", "xyd"],
  },
  {
    id: "6",
    label: "车道",
    searchParam: "cd",
    loc: "location",
    belongTo: ["lcb", "xyd"],
  },
  {
    id: "7",
    label: "院内",
    searchParam: "yn",
    loc: "location",
    belongTo: ["lcb", "xyd"],
  },
];

export const structures = [
  {
    id: "1",
    label: "地下通道",
    searchParam: "dxtd",
    loc: "structure",
    belongTo: ["gc"],
  },
  {
    id: "2",
    label: "机房",
    searchParam: "jf",
    loc: "structure",
    belongTo: ["yn"],
  },
  {
    id: "3",
    label: "配电室",
    searchParam: "pds",
    loc: "structure",
    belongTo: ["lm", "sd", "yn"],
  },
  {
    id: "4",
    label: "箱变",
    searchParam: "xb",
    loc: "structure",
    belongTo: ["lm", "sd", "yn"],
  },
];

export type Area = (typeof areas)[0];
export type Location = (typeof locations)[0];
export type structures = (typeof structures)[0];

function LedgerPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const activeArea = searchParams.area as string;
  const activeLocation = searchParams.location as string;
  const activeStructure = searchParams.structure as string;

  const fitLocations = locations.filter((loc) =>
    loc.belongTo.includes(activeArea)
  );
  const fitStructures =
    fitLocations.length === 0
      ? structures?.filter((structure) =>
          structure.belongTo.includes(activeArea)
        )
      : structures?.filter((structure) =>
          structure.belongTo.includes(activeLocation)
        );

  return (
    <div className="flex flex-col p-3 gap-2 h-full">
      <div className="flex justify-start items-center gap-3 min-h-[3rem] border-b-[1px] border-gray-200">
        <h2 className="text-sm min-w-fit">区域:</h2>
        <div className="flex justify-start items-center gap-3 overflow-x-scroll">
          {areas.map((area) => (
            <AreaTab key={area.searchParam} area={area} />
          ))}
          <Button size="icon" variant="ghost" className="hover:bg-gray-200">
            <PlusCircle size={16} />
          </Button>
        </div>
      </div>
      <div className="flex justify-start items-center gap-3 min-h-[3rem] border-b-[1px] border-gray-200">
        <h2 className="text-sm min-w-fit">位置:</h2>
        <div className="flex justify-start items-center gap-3 overflow-x-scroll">
          {!!activeArea &&
            fitLocations?.map((location) => (
              <LocationTab key={location.searchParam} location={location} />
            ))}
          <Button size="icon" variant="ghost" className="hover:bg-gray-200">
            <PlusCircle size={16} />
          </Button>
        </div>
      </div>
      <div className="flex justify-start items-center gap-3 min-h-[3rem] border-b-[1px] border-gray-200">
        <h2 className="text-sm min-w-fit">构筑物:</h2>
        <div className="flex justify-start items-center gap-3 overflow-x-scroll">
          {!!activeArea &&
            fitStructures?.map((location) => (
              <LocationTab key={location.searchParam} location={location} />
            ))}
          <Button size="icon" variant="ghost" className="hover:bg-gray-200">
            <PlusCircle size={16} />
          </Button>
        </div>
      </div>
      <KanbanBoard />
    </div>
  );
}

export default LedgerPage;
