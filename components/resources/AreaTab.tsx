"use client";
import React from "react";
import { Button } from "../ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

interface Area {
  id: number;
  title: string;
  searchParam: string;
}

interface AreaTabProps {
  area: Area;
}

function AreaTab({ area }: AreaTabProps) {
  const searchParam = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const searchArea = () => {
    const searchParams = new URLSearchParams();
    searchParams.append("area", area.searchParam);
    const url = `${pathname}?${searchParams.toString()}`;
    router.push(url);
  };

  return (
    <Button
      size="sm"
      variant="outline"
      className={cn(
        "text-xs hover:bg-gray-800 hover:text-white transition",
        searchParam.get("area") === area.searchParam && "bg-gray-800 text-white"
      )}
      onClick={searchArea}
    >
      {area.title}
    </Button>
  );
}

export default AreaTab;
