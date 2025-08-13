"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Word {
  text: string;
  className?: string;
}

export function TypewriterEffectSmooth({ words }: { words: Word[] }) {
  return (
    <div className="flex gap-1 overflow-hidden">
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={cn("text-4xl lg:text-6xl mx-1 mb-1 font-medium tracking-wide", word.className)}
        >
          {word.text}
        </motion.span>
      ))}
    </div>
  );
}
