'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const meals = [
  { emoji: '🍲' },
  { emoji: '🥗' },
  { emoji: '🍛' },
  { emoji: '🥙' },
  { emoji: '🥗' }, 
  { emoji: '🥦' },
  { emoji: '🥕' },
  { emoji: '🌽' },
  { emoji: '🥔' },
  { emoji: '🍅' },
  { emoji: '🍆' },
  { emoji: '🥬' },
  { emoji: '🥒' },
  { emoji: '🍠' },
  { emoji: '🍞' },
  { emoji: '🥖' },
  { emoji: '🥨' },
  { emoji: '🫓' },
  { emoji: '🍚' },
  { emoji: '🍙' },
  { emoji: '🍘' },
  { emoji: '🍜' }, 
  { emoji: '🍝' }, 
  { emoji: '🥘' }, 
  { emoji: '🍲' }, 
  { emoji: '🥙' }, 
  { emoji: '🧆' }, 
  { emoji: '🌮' }, 
  { emoji: '🌯' }, 
  { emoji: '🍕' }, 
  { emoji: '🥪' },
  { emoji: '🍔' }, 
  { emoji: '🍟' },
  { emoji: '🧀' },
  { emoji: '🍗' }, 
  { emoji: '🍖' }, 
  { emoji: '🥩' }, 
  { emoji: '🍤' }, 
  { emoji: '🦐' },
  { emoji: '🦞' },
  { emoji: '🦀' },
  { emoji: '🐟' },
  { emoji: '🍣' }, 
  { emoji: '🍱' },
  { emoji: '🍥' },
  { emoji: '🥓' }, 
  { emoji: '🍳' }, 
  { emoji: '🥚' },
  { emoji: '🌭' },
  { emoji: '🍔' }, 
  { emoji: '🍕' }, 
  { emoji: '🍛' }, 
  { emoji: '🍜' }, 
  { emoji: '🥘' },
];

export default function PickYourMeal() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % meals.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const currentEmoji = meals[currentIndex]?.emoji || meals[0].emoji;

  return (
    <div className="w-full h-full min-h-[260px] flex items-center justify-center relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.3 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center w-full h-full"
        >
          <div 
            className="text-center"
            style={{ 
              fontSize: '120px',
              lineHeight: '1',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
          >
            {currentEmoji}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
