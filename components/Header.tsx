import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import SideBar from "./SideBar";
import { Button } from "./ui/button";

function Header() {
  return (
    <header className="flex justify-between items-center px-5 h-16 bg-white">
      <div>
        <Sheet>
          <SheetTrigger className="sm:hidden">
            <Menu />
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-64 border-none text-white">
            <SideBar />
          </SheetContent>
        </Sheet>
      </div>

      <Button variant="outline">Logout</Button>
    </header>
  );
}

export default Header;
