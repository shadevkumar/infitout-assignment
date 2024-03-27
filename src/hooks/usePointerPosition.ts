import { useMemo } from "react";

interface UsePointerPositionProps {
  bullish: number;
  barWidth: number;
}

export const usePointerPosition = ({
  bullish,

  barWidth,
}: UsePointerPositionProps) => {
  const minBullish = 1;
  const maxBullish = 17;
  return useMemo(() => {
    const normalizedBullish =
      (bullish - minBullish) / (maxBullish - minBullish);
    return normalizedBullish * (barWidth - 40); // Assuming 40 is the adjustment factor (e.g., pointer width)
  }, [bullish, barWidth]);
};
