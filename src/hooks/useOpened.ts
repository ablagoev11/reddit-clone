import { useRef, useState, useEffect } from "react";

const useIsOpen = <T extends HTMLElement | null>(): [
  React.RefObject<T | null>,
  boolean,
  () => void,
  (() => void)?,
  React.RefObject<HTMLButtonElement | null>?
] => {
  const ref = useRef<T>(null);
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      const clickedOutsideRef = ref.current && !ref.current.contains(target);
      const clickedOutsideButton =
        buttonRef.current && !buttonRef.current.contains(target);

      if (clickedOutsideRef && (!buttonRef.current || clickedOutsideButton)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  const handleOpen = () => {
    setIsOpen(true);
  };

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return [ref, isOpen, handleOpen, toggleOpen, buttonRef];
};
export default useIsOpen;
