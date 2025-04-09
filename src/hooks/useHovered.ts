import React, { useRef, useState, useEffect } from "react";
const useHover = <T extends HTMLElement>(): [
  React.RefObject<T | null>,
  boolean
] => {
  const ref = useRef<T | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const enter = () => setIsHovered(true);
  const leave = () => setIsHovered(false);
  useEffect(() => {
    const refCopy = ref;
    refCopy.current?.addEventListener("mouseenter", enter);
    refCopy.current?.addEventListener("mouseleave", leave);
    return () => {
      refCopy.current?.removeEventListener("mouseenter", enter);
      refCopy.current?.removeEventListener("mouseleave", leave);
    };
  }, []);
  return [ref, isHovered];
};
export default useHover;
