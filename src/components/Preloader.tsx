"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for minimum time to prevent flash
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-zinc-950 z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-4xl font-bold text-white mb-4 text-center">
          <span>S</span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            amarth
          </motion.span>
          <span> </span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Shukla
          </motion.span>
        </div>

        <div className="flex justify-center">
          <div className="w-48 h-1 relative bg-zinc-800 rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 bottom-0 stripe-gradient-bg"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>
        </div>

        <motion.p
          className="text-zinc-500 text-center mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Portfolio Loading...
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
