import React, { useRef, useState, useEffect } from "react";
const useHover = <T extends HTMLElement>(): [
  React.RefObject<T | null>,
  boolean
] => {
  const ref = useRef<T | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const node = ref.current;
      if (node) {
        const enter = () => setIsHovered(true);
        const leave = () => setIsHovered(false);

        node.addEventListener("mouseenter", enter);
        node.addEventListener("mouseleave", leave);

        clearInterval(interval);
        return () => {
          node.removeEventListener("mouseenter", enter);
          node.removeEventListener("mouseleave", leave);
        };
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return [ref, isHovered];
};
export default useHover;
