import AreaTab from "@/components/resources/AreaTab";
import KanbanBoard from "@/components/resources/KanbanBoard";
import LocationTab from "@/components/resources/LocationTab";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export const areas = [
  {
    id: "0",
    label: "沿线",
    searchParam: "yx",
    loc: "area",
    locations: [
      {
        id: "0.1",
        label: "路面",
        searchParam: "lm",
        loc: "location",
      },
      {
        id: "0.2",
        label: "隧道",
        searchParam: "sd",
        loc: "location",
      },
      {
        id: "0.3",
        label: "配电室",
        searchParam: "pds",
        loc: "location",
      },
      {
        id: "0.4",
        label: "箱变",
        searchParam: "xb",
        loc: "location",
      },
    ],
  },
  {
    id: 1,
    label: "六村堡",
    searchParam: "lcb",
    loc: "area",
    locations: [
      {
        id: "1.1",
        label: "广场",
        searchParam: "gc",
        loc: "location",
        structures: [{ id: "1.1.1", label: "地下通道", searchParam: "dxtd" }],
      },
      {
        id: "1.2",
        label: "车道",
        searchParam: "cd",
        loc: "location",
      },
      {
        id: "1.3",
        label: "站区",
        searchParam: "zq",
        loc: "location",
        structures: [
          { id: "1.3.1", label: "机房", searchParam: "jf" },
          { id: "1.3.2", label: "配电室", searchParam: "pds" },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "咸阳东",
    searchParam: "xyd",
    loc: "area",
    locations: [
      {
        id: "2.1",
        label: "广场",
        searchParam: "gc",
        loc: "location",
        structures: [{ id: "1.1.1", label: "地下通道", searchParam: "dxtd" }],
      },
      {
        id: "2.2",
        label: "车道",
        searchParam: "cd",
        loc: "location",
      },
      {
        id: "2.3",
        label: "站区",
        searchParam: "zq",
        loc: "location",
        structures: [
          { id: "2.3.1", label: "机房", searchParam: "jf" },
          { id: "2.3.2", label: "配电室", searchParam: "pds" },
        ],
      },
    ],
  },
];

export type Area = (typeof areas)[0];

function LedgerPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const activeAreaId = searchParams.area;
  const locations = areas.filter((area) => area.searchParam === activeAreaId)[0]
    ?.locations;
  const activeLocationId = searchParams.location;
  const structures = locations.filter(
    (location) => location.searchParam === activeLocationId
  )[0];

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
          {!!activeAreaId &&
            locations?.map((location) => (
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
          {!!activeAreaId &&
            locations?.map((location) => (
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
