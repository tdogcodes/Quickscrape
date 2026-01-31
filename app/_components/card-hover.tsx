"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function HoverEffect({
  items,
  className,
}: {
  items: { title: string; description: string }[];
  className?: string;
}) {
  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", className)}>
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="rounded-xl border border-primary/30 bg-primary/10 p-4 shadow-sm hover:bg-primary/20 transition-colors"
        >
          <h3 className="font-semibold text-white text-3xl">{item.title}</h3>
          <p className="text-lg text-gray-300">{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
