import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, forwardRef } from "react";

interface RotatingTextProps {
  texts?: string[];
  mainClassName?: string;
  rotationInterval?: number;
  transition?: any;
}

const RotatingText = forwardRef<HTMLDivElement, RotatingTextProps>(
  ({ texts = [], mainClassName = "", rotationInterval = 2000, transition }, ref) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      if (!rotationInterval) return;

      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % texts.length;
          return nextIndex;
        });
      }, rotationInterval);

      return () => clearInterval(interval);
    }, [texts.length, rotationInterval]);

    const currentText = texts[currentIndex] || "";

    return (
      <div ref={ref} className={`inline-flex items-center ${mainClassName}`}> 
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-120%" }}
            transition={transition || { type: "spring", damping: 25, stiffness: 300 }}
            className="inline-block"
          >
            {currentText}
          </motion.span>
        </AnimatePresence>
      </div>
    );
  }
);

RotatingText.displayName = "RotatingText";
export default RotatingText;
