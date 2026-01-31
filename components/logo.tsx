import { cn } from "@/lib/utils";
import { ScanText } from "lucide-react";
import Link from "next/link";
import React from "react";

const Logo = ({
  fontSize = "2xl",
  iconSize = 30,
  className,
}: {
  fontSize?: string;
  iconSize?: number;
  className?: string;
}) => {
  return (
    <Link
      href="/"
      className={cn(
        "text-2xl items-center gap-2 font-extrabold flex justify-center mx-auto ml-2",
        fontSize ? `text-${fontSize}` : "text-2xl",
        className
      )}
    >
      <div
        className="rounded-xl 
         p-2"
      >
        <ScanText size={iconSize} className="stroke-primary" />
      </div>
      <span
        className="bg-gradient-to-r
        bg-clip-text text-transparent from-primary to-white"
      >
        Quick<span className="bg-gradient-to-r
        bg-clip-text text-transparent from-stone-400 to-stone-500 dark:text-stone-300">Scrape</span>
      </span>
    </Link>
  );
};

export default Logo;
