import { useEffect, useRef, useState } from "react";
import { CiCircleAlert } from "react-icons/ci";
import { POINTER_SVG, SUMMARY_BAR_GRAPH } from "../../utils/constant";
import { usePointerPosition } from "../../hooks/usePointerPosition";
import { useBarResize } from "../../hooks/useBarResize";

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
  const [bullish, setBullish] = useState(8);
  const [barWidth, setBarWidth] = useState(384);
  const barImageRef = useRef<HTMLImageElement>(null);
  const [aboutGraph, setAboutGraph] = useState(false);

  const pointerPosition = usePointerPosition({
    bullish,
    barWidth,
  });

  const getBarWidth = useBarResize(barImageRef);

  useEffect(() => {
    setBarWidth(getBarWidth);
  }, [getBarWidth]);

  useEffect(() => {
    setBullish(data.bullish);
  }, [data.bullish]);

  return (
    <>
      <div className="flex min-h-[26rem] flex-col items-center justify-between">
        <div className="relative flex w-full items-center justify-between">
          <span className="font-semibold">Summary</span>
          <span
            onMouseEnter={() => {
              setAboutGraph(true);
            }}
            onMouseLeave={() => {
              setAboutGraph(false);
            }}
          >
            <CiCircleAlert className="rotate-180 cursor-pointer text-lg" />
          </span>
          {aboutGraph && (
            <div className="absolute -top-24 right-12 z-50  bg-white md:w-[50%]">
              <span className="text-xs">
                Here is a Snapshot of the most popular technical indicators. We
                take these into consideration, analyze them, run some internal
                calculations and help you understand the overall market
                conditions.
              </span>
            </div>
          )}
        </div>
        <div className="relative flex h-32 w-80 items-center p-4 md:w-96">
          <img
            src={SUMMARY_BAR_GRAPH}
            alt="Summarybar"
            ref={barImageRef}
            className="w-full"
          />
          <img
            src={POINTER_SVG}
            alt="pointer"
            className="pointer absolute left-4  w-5 cursor-pointer" // Position the pointer at the left edge of the bar
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
        <div className="grid grid-cols-3 gap-3 py-8 ">
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
