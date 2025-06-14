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
        "text-2xl items-center gap-2 font-extrabold flex",
        fontSize ? `text-${fontSize}` : "text-2xl",
        className
      )}
    >
      <div
        className="rounded-xl bg-gradient-to-r
        bg-clip-text text-transparent from-emerald-500 to-emerald-500 p-2"
      >
        <ScanText size={iconSize} color="#10b981" />
      </div>
      <span
        className="bg-gradient-to-r
        bg-clip-text text-transparent from-emerald-500 to-emerald-400"
      >
        Sigma<span className="bg-gradient-to-r
        bg-clip-text text-transparent from-stone-400 to-stone-500 dark:text-stone-300">Scrape</span>
      </span>
    </Link>
  );
};

export default Logo;
