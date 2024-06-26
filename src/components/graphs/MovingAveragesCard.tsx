import { useEffect, useRef, useState } from "react";
import { CiCircleAlert } from "react-icons/ci";
import { RiArrowDownSLine } from "react-icons/ri";
import { MOVINGAVERAGE_BAR_GRAPH, POINTER_SVG } from "../../utils/constant";
import { usePointerPosition } from "../../hooks/usePointerPosition";
import { useBarResize } from "../../hooks/useBarResize";

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
  const [barWidth, setBarWidth] = useState(384);
  const barImageRef = useRef<HTMLImageElement>(null);

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
          <span className="font-semibold">Moving averages</span>
          <span>
            <CiCircleAlert className="rotate-180 cursor-pointer text-lg" />
          </span>
        </div>
        <div className="relative flex h-32 w-80 items-center p-4 md:w-96">
          <img
            src={MOVINGAVERAGE_BAR_GRAPH}
            alt="MOVING AVERAGE BAR"
            ref={barImageRef}
            className="w-full"
          />
          <img
            src={POINTER_SVG}
            alt="pointer"
            className="pointer absolute left-4  w-5 cursor-pointer"
            style={{ transform: `translateX(${pointerPosition}px)` }}
          />
        </div>
        <div className="flex items-center justify-around gap-12 py-2 ">
          <div className="flex flex-col items-center gap-1">
            <span>{data.bearish}</span>
            <div className="rounded-md bg-[#FFF5E6] px-2 py-1 text-[#FE9801]">
              Bearish
            </div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span>9</span>
            <div className="rounded-md bg-[#EBEFF5] px-2 py-1 text-[#7B828B]">
              Neutral
            </div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span>{data.bullish}</span>
            <div className="rounded-md bg-[#E0F3FF] px-2 py-1 text-[#018EE8]">
              Bullish
            </div>
          </div>
        </div>
        <div className="flex w-[80%] flex-col   gap-2 px-6 py-8 max-md:w-full ">
          <div className="flex  items-center justify-between ">
            <span className="text-[#9BABC6]">EMA (5)</span>
            <span className="">{data.EMA5}</span>
          </div>
          <div className="flex  items-center justify-between">
            <span className="text-[#9BABC6]">SMA (5)</span>
            <span className="">{data.SMA5}</span>
          </div>
          <div className="flex  items-center justify-end ">
            <div className="flex  cursor-pointer items-center text-[#9BABC6] hover:text-[#387ED1]">
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
