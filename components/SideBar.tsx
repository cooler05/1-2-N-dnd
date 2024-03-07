"use client";
import { ChevronDown, Cog, Home, ScrollText, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

import { Button } from "./ui/button";

const links = [
  {
    id: 1,
    label: "首页",
    href: "/",
    icon: Home,
    items: [],
  },
  {
    id: 2,
    label: "资源管理",
    href: "/resources",
    icon: ScrollText,
    items: [
      {
        id: 1,
        label: "设备资源",
        href: "/resources/ledger",
        icon: Cog,
      },
    ],
  },
  {
    id: 3,
    label: "设置",
    href: "/setting",
    icon: Settings,
    items: [],
  },
];

function SideBar() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <nav className="flex flex-col gap-2 bg-gray-900 h-full w-full px-2">
      <Link
        href="/"
        className="text-white text-center py-5 font-semibold text-xl"
      >
        机电管理平台
      </Link>
      <div className="flex flex-col gap-2 overflow-y-scroll">
        {links.map((link) => {
          return (
            <>
              <Button
                key={link.href}
                asChild
                variant="ghost"
                className={cn(
                  "flex justify-start mx-2 text-white font-semibold transition hover:bg-gray-200",
                  pathname === link.href && "bg-gray-200 text-gray-900"
                )}
              >
                {link.items.length === 0 ? (
                  <Link href={link.href} className="gap-3">
                    <link.icon size={16} />
                    {link.label}
                  </Link>
                ) : (
                  <div
                    className="flex justify-between items-center hover:cursor-pointer"
                    onClick={() => router.push(link.href)}
                  >
                    <div className="flex justify-start items-center gap-3">
                      <link.icon size={16} />
                      {link.label}
                    </div>
                    <ChevronDown
                      size={16}
                      className={cn(
                        "transition ease-out duration-100",
                        pathname.includes(link.href) && "rotate-180"
                      )}
                    />
                  </div>
                )}
              </Button>
              {link?.items.length !== 0 &&
                pathname.startsWith(link.href) &&
                link?.items.map((item) => (
                  <Button
                    key={item.href}
                    asChild
                    variant="ghost"
                    className={cn(
                      "flex justify-start mx-4 text-white font-semibold transition hover:bg-gray-200",
                      pathname === item.href && "bg-gray-200 text-gray-900"
                    )}
                  >
                    <Link href={item.href} className="gap-3">
                      <item.icon size={16} />
                      {item.label}
                    </Link>
                  </Button>
                ))}
            </>
          );
        })}
      </div>
    </nav>
  );
}

export default SideBar;
