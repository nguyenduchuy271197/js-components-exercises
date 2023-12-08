import { useEffect, MutableRefObject } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
export default function useOnClickOutside(
  ref: MutableRefObject<HTMLElement | null | undefined>,
  handler: (event: MouseEvent) => void
) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler(event);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
