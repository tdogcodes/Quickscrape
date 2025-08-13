"use client";
import {
  CoinsIcon,
  HomeIcon,
  Layers2Icon,
  Menu,
  ShieldCheckIcon,
} from "lucide-react";
import React from "react";
import Logo from "./logo";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import UserAvailableCreditsBadge from "./user-available-credits-badge";

const routes = [
  {
    href: "",
    label: "Home",
    icon: HomeIcon,
  },
  {
    href: "workflows",
    label: "Workflows",
    icon: Layers2Icon,
  },
  {
    href: "credentials",
    label: "Credentials",
    icon: ShieldCheckIcon,
  },
    {
    href: "billing",
    label: "Billing",
    icon: CoinsIcon,
  },
];

const DesktopSidebar = () => {
  const pathname = usePathname();
  const activeRoute =
    routes.find(
      (route) => route.href.length > 0 && pathname.includes(route.href)
    ) || routes[0];

  return (
    <div
      className="hidden relative md:block min-w-[280px] max-w-[280px] h-screen 
    overflow-hidden w-full bg-primary-foreground dark:bg-secondary/30 dark:text-foreground
    text-muted-foreground border-r-2 border-separate
    "
    >
      <div className="flex items-center justfy-center gap-2 border-b-2 border-separate p-4">
        <Logo />
      </div>
      <div className="p-2">
        <UserAvailableCreditsBadge />
      </div>
      <div className="flex flex-col p-2">
        {routes.map((route) => (
          <Link
            href={route.href === "" ? "/" : `/${route.href}`}
            key={route.href}
            className={buttonVariants({
              variant:
                activeRoute.href === route.href
                  ? "sidebarItemActive"
                  : "sidebarItem",
            })}
          >
            <route.icon size={20} />
            {route.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export const MobileSidebar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const activeRoute =
    routes.find(
      (route) => route.href.length > 0 && pathname.includes(route.href)
    ) || routes[0];

  return (
    <div className="block border-separate bg-background md:hidden">
      <nav className="container flex items-center justify-between px-8">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size={"icon"}>
              <Menu className="text-[#10b981]" />
            </Button>
          </SheetTrigger>
          <SheetContent
            className="w-[400px] sm:w-[300px] space-y-4"
            side={"left"}
          >
            <Logo />
            <UserAvailableCreditsBadge />
            <div className="flex flex-col gap-1">
              {routes.map((route) => (
                <Link
                  href={route.href}
                  key={route.href}
                  className={buttonVariants({
                    variant:
                      activeRoute.href === route.href
                        ? "sidebarItemActive"
                        : "sidebarItem",
                  })}
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  <route.icon size={20} />
                  {route.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default DesktopSidebar;
