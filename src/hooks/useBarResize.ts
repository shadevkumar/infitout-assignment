import { useEffect, useState } from "react";

export const useBarResize = (barImageRef: React.RefObject<HTMLElement>) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (barImageRef.current) {
        setWidth(barImageRef.current.getBoundingClientRect().width);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [barImageRef]);

  return width;
};
