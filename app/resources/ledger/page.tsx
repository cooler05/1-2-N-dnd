import AreaTab from "@/components/resources/AreaTab";
import KanbanBoard from "@/components/resources/KanbanBoard";
import React from "react";

export const areas = [
  {
    id: 0,
    label: "沿线",
    searchParam: "yx",
    loc: "area",
  },
  {
    id: 1,
    label: "六村堡",
    searchParam: "lcb",
    loc: "area",
  },
  {
    id: 2,
    label: "咸阳东",
    searchParam: "xyd",
    loc: "area",
  },
  {
    id: 3,
    label: "机场西",
    searchParam: "jcx",
    loc: "area",
  },
  {
    id: 4,
    label: "西张堡",
    searchParam: "xzb",
    loc: "area",
  },
  {
    id: 5,
    label: "礼泉",
    searchParam: "lq",
    loc: "area",
  },
  {
    id: 6,
    label: "乾州",
    searchParam: "qz",
    loc: "area",
  },
];

export const locations = [
  {
    id: 1,
    label: "机房 / 配电室",
    searchParam: "jf",
    loc: "location",
  },
  {
    id: 2,
    label: "站区",
    searchParam: "zq",
    loc: "location",
  },
];

function LedgerPage() {
  return (
    <div className="flex flex-col p-3 gap-2 h-full">
      <div className="flex justify-start items-center gap-3 min-h-[3rem]">
        <h2 className="text-sm min-w-fit">区域:</h2>
        <div className="flex justify-start items-center gap-3 overflow-x-scroll">
          {areas.map((area) => (
            <AreaTab key={area.searchParam} area={area} />
          ))}
        </div>
      </div>
      <div className="flex justify-start items-center gap-3 min-h-[3rem]">
        <h2 className="text-sm min-w-fit">位置:</h2>
        <div className="flex justify-start items-center gap-3 overflow-x-scroll">
          {locations.map((location) => (
            <AreaTab key={location.searchParam} area={location} />
          ))}
        </div>
      </div>
      <KanbanBoard />
    </div>
  );
}

export default LedgerPage;
