"use client";
import React from "react";
import { Button } from "../ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

interface Area {
  id: number;
  label: string;
  searchParam: string;
  loc: string;
}

interface AreaTabProps {
  area: Area;
}

function AreaTab({ area }: AreaTabProps) {
  const searchParam = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const searchArea = () => {
    const currentUrl = new URL(location.href);
    currentUrl.searchParams.set(area.loc, area.searchParam);
    const newUrl = `${currentUrl.pathname}${currentUrl.search}`;
    router.push(newUrl);
  };

  return (
    <Button
      size="sm"
      variant="outline"
      className={cn(
        "text-xs hover:bg-gray-800 hover:text-white transition",
        searchParam.get(area.loc) === area.searchParam &&
          "bg-gray-800 text-white"
      )}
      onClick={searchArea}
    >
      {area.label}
    </Button>
  );
}

export default AreaTab;
