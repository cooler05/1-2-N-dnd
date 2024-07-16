"use client";

import { Button } from "../ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

type Structure = {
  id: string;
  label: string;
  searchParam: string;
};

type Location = {
  id: string;
  label: string;
  searchParam: string;
  loc: string;
  structures?: Structure[];
};

interface LocationTabProps {
  location: Location;
}

function LocationTab({ location }: LocationTabProps) {
  const searchParam = useSearchParams();
  const router = useRouter();

  const searchLocation = () => {
    const currentUrl = new URL(document.URL);
    currentUrl.searchParams.set(location.loc, location.searchParam);
    const newUrl = `${currentUrl.pathname}${currentUrl.search}`;
    router.push(newUrl);
  };

  return (
    <Button
      size="sm"
      variant="outline"
      className={cn(
        "text-xs hover:bg-gray-800 hover:text-white transition",
        searchParam.get(location.loc) === location.searchParam &&
          "bg-gray-800 text-white"
      )}
      onClick={searchLocation}
    >
      {location.label}
    </Button>
  );
}

export default LocationTab;
