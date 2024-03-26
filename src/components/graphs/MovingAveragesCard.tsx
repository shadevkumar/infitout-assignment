import { useEffect, useState } from "react";
import { CiCircleAlert } from "react-icons/ci";
import { RiArrowDownSLine } from "react-icons/ri";
import { MOVINGAVERAGE_BAR_GRAPH, POINTER_SVG } from "../../utils/constant";

interface MovingAverages {
  EMA5: number;
  SMA5: number;
  EMA10: number;
  bearish: number;
  bullish: number;
  neutral: number;
}

const MovingAveragesCard = ({ data }: { data: MovingAverages }) => {
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
      <div className="min-h-[26rem] flex flex-col items-center justify-between">
        <div className="w-full flex justify-between items-center">
          <span className="font-semibold">Moving averages</span>
          <span>
            <CiCircleAlert className="rotate-180 text-lg" />
          </span>
        </div>
        <div className="relative  md:w-96 p-4 h-32 flex items-center">
          <img
            src={MOVINGAVERAGE_BAR_GRAPH}
            alt="MOVING AVERAGE BAR"
            className="w-full"
          />
          <img
            src={POINTER_SVG}
            alt="pointer"
            className="pointer cursor-pointer w-5 md:w-6 absolute left-4" // Position the pointer at the left edge of the bar
            style={{ transform: `translateX(${pointerPosition}px)` }}
          />
        </div>
        <div className="flex items-center justify-around py-2 gap-12 ">
          <div className="flex flex-col items-center gap-1">
            <span>{data.bearish}</span>
            <div className="px-2 py-1 bg-[#FFF5E6] text-[#FE9801] rounded-md">
              Bearish
            </div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span>9</span>
            <div className="px-2 py-1 bg-[#EBEFF5] text-[#7B828B] rounded-md">
              Neutral
            </div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span>{data.bullish}</span>
            <div className="px-2 py-1 bg-[#E0F3FF] text-[#018EE8] rounded-md">
              Bullish
            </div>
          </div>
        </div>
        <div className="w-[80%] max-md:w-full flex   flex-col py-8 px-6 gap-2 ">
          <div className="flex  items-center justify-between ">
            <span className="text-[#9BABC6]">EMA (5)</span>
            <span className="">{data.EMA5}</span>
          </div>
          <div className="flex  items-center justify-between">
            <span className="text-[#9BABC6]">SMA (5)</span>
            <span className="">{data.SMA5}</span>
          </div>
          <div className="flex  items-center justify-end ">
            <div className="flex  items-center cursor-pointer text-[#9BABC6] hover:text-[#387ED1]">
              <span>View Details</span>
              <span>
                <RiArrowDownSLine />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovingAveragesCard;
