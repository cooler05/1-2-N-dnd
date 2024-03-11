"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import SideBar from "./SideBar";
import { Button } from "./ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

function Header() {
  const pathnameArray = usePathname()
    .split("/")
    .filter((link) => link !== "");

  return (
    <header className="flex justify-between items-center sm:ml-64 px-5 h-16 bg-white">
      <div className="flex justify-start items-center gap-3">
        <Sheet>
          <SheetTrigger className="sm:hidden">
            <Menu />
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-64 border-none text-white">
            <SideBar />
          </SheetContent>
        </Sheet>
        <Breadcrumb>
          <BreadcrumbList>
            {pathnameArray.map((link, index) => {
              if (index === pathnameArray.length - 1)
                return (
                  <BreadcrumbItem key={link}>
                    <BreadcrumbPage>{link}</BreadcrumbPage>
                  </BreadcrumbItem>
                );
              return (
                <>
                  <BreadcrumbItem>
                    <BreadcrumbLink href={`/${link}`}>{link}</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <Button variant="outline">Logout</Button>
    </header>
  );
}

export default Header;
