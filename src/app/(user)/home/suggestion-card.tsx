import { motion } from 'framer-motion';

import type { Suggestion } from './data/suggestions';
import React from 'react';

interface SuggestionCardProps extends Suggestion {
  delay?: number;
  onSelect: (text: string) => void;
  animationConfig?: {
    initial?: object;
    animate?: object;
    transition?: object;
  };
}

export function SuggestionCard({
  title,
  subtitle,
  delay = 0,
  onSelect,
  animationConfig = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.4, delay },
  },
}: SuggestionCardProps) {
  return (
    <motion.button
      {...animationConfig}
      whileHover={{
        scale: 1.01,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.99 }}
      onClick={() => onSelect(title)}
      aria-label={`Select suggestion: ${title}`}
      role="button"
      className="flex flex-col gap-1.5 rounded-xl bg-muted/50 p-3.5 text-left 
        transition-colors duration-200 hover:bg-primary/5 focus-visible:ring-2 focus-visible:ring-primary"
    >
      <div className="text-sm font-medium">{title}</div>
      {subtitle && (
        <div className="text-xs text-muted-foreground/80">{subtitle}</div>
      )}
    </motion.button>
  );
}
