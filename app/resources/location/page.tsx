import AreaTab from "@/components/resources/AreaTab";
import React from "react";

const areas = [
  {
    id: 0,
    title: "沿线",
    searchParam: "yx",
  },
  {
    id: 1,
    title: "六村堡",
    searchParam: "lcb",
  },
  {
    id: 2,
    title: "六村堡",
    searchParam: "lcb",
  },
  {
    id: 3,
    title: "六村堡",
    searchParam: "lcb",
  },
  {
    id: 4,
    title: "六村堡",
    searchParam: "lcb",
  },
  {
    id: 5,
    title: "六村堡",
    searchParam: "lcb",
  },
  {
    id: 6,
    title: "六村堡",
    searchParam: "lcb",
  },
];

function LocationPage() {
  return (
    <div className="flex flex-col p-3">
      <div className="flex justify-start items-center gap-3 overflow-x-scroll">
        <h2 className="text-sm min-w-fit">区域:</h2>
        {areas.map((area) => (
          <AreaTab key={area.id} area={area} />
        ))}
      </div>
    </div>
  );
}

export default LocationPage;
