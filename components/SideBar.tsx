"use client";
import { Home, ScrollText } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import { Button } from "./ui/button";

const links = [
  {
    id: 1,
    label: "首页",
    href: "/",
    icon: Home,
  },
  {
    id: 2,
    label: "资源管理",
    href: "/resources",
    icon: ScrollText,
  },
];

function SideBar() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav className="flex flex-col gap-2 bg-gray-800 h-full px-2">
      <Link href="/" className="text-white text-center py-5 font-bold text-xl">
        机电管理平台
      </Link>
      {links.map((link) => (
        <Button
          key={link.id}
          asChild
          variant="ghost"
          className={cn(
            "flex justify-start gap-3 text-white font-semibold transition",
            pathname === link.href && "bg-white text-gray-900"
          )}
        >
          <Link href={link.href}>
            <link.icon size={16} />
            {link.label}
          </Link>
        </Button>
      ))}
    </nav>
  );
}

export default SideBar;
