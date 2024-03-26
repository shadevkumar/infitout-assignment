import { useEffect, useRef, useState, useMemo } from "react";
import { CiCircleAlert } from "react-icons/ci";
import { POINTER_SVG, SUMMARY_BAR_GRAPH } from "../../utils/constant";

interface Summary {
  bearish: number;
  bullish: number;
  neutral: number;
  EMA20: number;
  SMA20: number;
  RSI14: number;
  AwesomeOsc: number;
  Macd12269: number;
  CCI20: number;
}
interface IndicatorProps {
  value?: number | string;
  label?: string;
  bgColor?: string;
  textColor?: string;
}

const Indicator: React.FC<IndicatorProps> = ({
  value,
  label,
  bgColor,
  textColor,
}) => (
  <div className="flex flex-col items-center gap-1">
    <span>{value}</span>
    <div
      className={`px-2 py-1 ${bgColor} ${textColor} rounded-md max-md:text-sm`}
    >
      {label}
    </div>
  </div>
);

const SummaryCard = ({ data }: { data: Summary }) => {
  const [barWidth, setBarWidth] = useState(384); // Initialize with a default value
  const barImageRef = useRef<HTMLImageElement>(null);

  const pointerPosition = useMemo(() => {
    const minBullish = 1;
    const maxBullish = 17;
    const normalizedBullish =
      (data.bullish - minBullish) / (maxBullish - minBullish);
    return normalizedBullish * (barWidth - 48); // Subtract the pointer width (6 * 8) from the bar width
  }, [data.bullish, barWidth]);

  useEffect(() => {
    const handleResize = () => {
      if (barImageRef.current) {
        const { width } = barImageRef.current.getBoundingClientRect();
        setBarWidth(width);
      }
    };

    handleResize(); // Set initial barWidth on component mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="min-h-[26rem] flex flex-col items-center justify-between">
        <div className="w-full flex justify-between items-center">
          <span className="font-semibold">Summary</span>
          <span>
            <CiCircleAlert className="rotate-180 text-lg" />
          </span>
        </div>
        <div className="relative  md:w-96 p-4 h-32 flex items-center">
          <img
            src={SUMMARY_BAR_GRAPH}
            alt="Summarybar"
            ref={barImageRef}
            className="w-full"
          />
          <img
            src={POINTER_SVG}
            alt="pointer"
            className="pointer cursor-pointer w-5 md:w-6 absolute left-4" // Position the pointer at the left edge of the bar
            style={{ transform: `translateX(${pointerPosition}px)` }}
          />
        </div>
        <div className="flex items-center justify-around gap-12 py-2 ">
          <Indicator
            value={data.bearish}
            label="Bearish"
            bgColor="bg-[#FFE2EB]"
            textColor="text-[#EB1D54]"
          />
          <Indicator
            value={9}
            label="Neutral"
            bgColor="bg-[#EBEFF5]"
            textColor="text-[#7B828B]"
          />
          <Indicator
            value={data.bullish}
            label="Bullish"
            bgColor="bg-[#E2FFD5]"
            textColor="text-[#3CBB00]"
          />
        </div>
        <div className="grid grid-cols-3 py-8 gap-3 ">
          <Indicator
            value={data.EMA20}
            label="EMA (20)"
            textColor="text-[#9BABC6]"
          />
          <Indicator
            value={data.SMA20}
            label="SMA (20)"
            textColor="text-[#9BABC6]"
          />
          <Indicator
            value={data.RSI14}
            label="RSI (14)"
            textColor="text-[#9BABC6]"
          />
          <Indicator
            value={data.AwesomeOsc}
            label="Awesome Osc"
            textColor="text-[#9BABC6]"
          />
          <Indicator
            value={data.Macd12269}
            label="Macd (12, 26, 9)"
            textColor="text-[#9BABC6]"
          />
          <Indicator
            value={data.CCI20}
            label="CCI (20)"
            textColor="text-[#9BABC6]"
          />
        </div>
      </div>
    </>
  );
};

export default SummaryCard;
