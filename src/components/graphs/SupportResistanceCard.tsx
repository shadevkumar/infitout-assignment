import { useEffect, useState } from "react";
import { CiCircleAlert } from "react-icons/ci";
import {
  POINTER_RESISTANCE_SVG,
  RESISTANCE_BAR_GRAPH,
} from "../../utils/constant";

interface SupportResistance {
  S1: number;
  S2: number;
  S3: number;
  R1: number;
  R2: number;
  R3: number;
  bullish: number;
}

const SupportResistanceCard = ({ data }: { data: SupportResistance }) => {
  const [bullish, setBullish] = useState(8);

  const barWidth = 384;
  const minBullish = 1;
  const maxBullish = 17;

  const calculatePointerPosition = (bullish: number) => {
    const normalizedBullish =
      (bullish - minBullish) / (maxBullish - minBullish);

    const pointerPosition = normalizedBullish * (barWidth - 48);
    return pointerPosition;
  };

  const pointerPosition = calculatePointerPosition(bullish);
  useEffect(() => {
    setBullish(data.bullish);
  }, [data]);

  return (
    <>
      <div className="min-h-[26rem] flex flex-col items-center justify-between ">
        <div className="w-full flex justify-between items-center">
          <span className="font-semibold">Support & Resistance</span>
          <span>
            <CiCircleAlert className="rotate-180 text-lg" />
          </span>
        </div>
        <div className="relative  md:w-96 pt-4 px-4 h-32 flex items-center">
          <img
            src={RESISTANCE_BAR_GRAPH}
            alt="Resistance bar"
            className="w-full"
          />
          <img
            src={POINTER_RESISTANCE_SVG}
            alt="pointer resistance"
            className="pointer cursor-pointer w-5 md:w-6 absolute left-4" // Position the pointer at the left edge of the bar
            style={{ transform: `translateX(${pointerPosition}px)` }}
          />
        </div>
        <div>
          <ul className="flex items-center  justify-around gap-8">
            <li>S3</li>
            <li>S2</li>
            <li>S1</li>
            <li>R1</li>
            <li>R2</li>
            <li>R3</li>
          </ul>
        </div>
        <div className="grid grid-cols-3 py-8 gap-x-12 gap-y-4">
          <div className="flex flex-col items-center">
            <span className="">{data.S1}</span>
            <span className="text-[#9BABC6]">S1</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="">{data.S2}</span>
            <span className="text-[#9BABC6]">S2</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="">{data.S3}</span>
            <span className="text-[#9BABC6]">S3</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="">{data.R1}</span>
            <span className="text-[#9BABC6]">R1</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="">{data.R2}</span>
            <span className="text-[#9BABC6]">R2</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="">{data.R3}</span>
            <span className="text-[#9BABC6]">R3</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportResistanceCard;
