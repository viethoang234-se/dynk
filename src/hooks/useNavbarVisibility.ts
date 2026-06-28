import { useEffect, useState, useRef } from "react";

/** Ẩn navbar khi cuộn xuống, hiện lại khi cuộn lên — như brief yêu cầu. */
export function useNavbarVisibility() {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      const goingDown = y > lastY.current;
      const pastThreshold = y > 80;

      setVisible(!goingDown || !pastThreshold);
      lastY.current = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return visible;
}
