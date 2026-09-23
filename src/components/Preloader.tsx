"use client";

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="aurora-field">
            <div className="aurora-blob aurora-blob-1" />
            <div className="aurora-blob aurora-blob-2" />
          </div>

          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-5 text-center">
              Samarth<span className="text-gradient">.</span>
            </div>

            <div className="flex justify-center">
              <div className="w-48 h-1 relative bg-border rounded-full overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-[hsl(var(--aurora-1))] via-[hsl(var(--aurora-2))] to-[hsl(var(--aurora-3))]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.1, ease: "easeInOut" }}
                />
              </div>
            </div>

            <motion.p
              className="text-muted-foreground text-center mt-4 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Loading portfolio...
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
