import { AnimatePresence, motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import React from "react";

interface GradualSpacingProps {
  text: ReactNode; // Accepts JSX content
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
}

export default function GradualSpacing({
  text,
  duration = 2,
  delayMultiple = 0.04,
  framerProps = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 80 },
  },
  className,
}: GradualSpacingProps) {
  // Convert JSX content to an array of child elements
  const children = React.Children.toArray(text);

  return (
    <div className="flex ">
      <AnimatePresence>
        {children.map((child, i) => (
          <motion.span
            key={i}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={framerProps}
            transition={{ duration, delay: i * delayMultiple }}
            className={cn("drop-shadow-sm", className)}
          >
            {child}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}
