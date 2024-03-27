import { useState } from "react";
import MovingAveragesCard from "./graphs/MovingAveragesCard";
import OscillatorsCard from "./graphs/OscillatorsCard";
import SummaryCard from "./graphs/SummaryCard";
import SupportResistanceCard from "./graphs/SupportResistanceCard";
import { dummyData } from "../utils/dummydata";
import { RiArrowLeftSLine } from "react-icons/ri";
import { FaArrowUp } from "react-icons/fa6";
import { NIFTY_50_LOGO } from "../utils/constant";

const Home = () => {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState("5min");

  const timeFrames = ["5min", "10min", "15min", "30min", "hour", "day"];

  const handleTimeFrameChange = (timeFrame: string) => {
    setSelectedTimeFrame(timeFrame);
  };

  return (
    <>
      <div className="flex flex-col items-center bg-[#FBFDFF]">
        <div className="timeframe sticky bottom-0 z-50 flex w-full items-center justify-center px-1 py-2  max-md:fixed max-md:justify-around max-md:bg-white md:bottom-auto md:top-16 md:w-[50%] md:gap-6 ">
          {timeFrames.map((timeFrame) => (
            <button
              key={timeFrame}
              onClick={() => handleTimeFrameChange(timeFrame)}
              className={`cursor-pointer text-[#9BABC6] ${
                selectedTimeFrame === timeFrame
                  ? "rounded-md bg-blue-500 px-2 text-white "
                  : ""
              }`}
            >
              {timeFrame}
            </button>
          ))}
        </div>
        <div className="sticky top-16 z-40 flex w-[70%] bg-white max-md:w-[85%] xl:w-[90%]">
          <RiArrowLeftSLine className="mt-2" />

          <div className="flex flex-col">
            <div className="flex  items-center gap-2">
              <img src={NIFTY_50_LOGO} alt="NIFTY 50 logo" className="w-8" />
              <h1 className="text-xl font-semibold">NIFTY 50</h1>
            </div>
            <div className="flex ">
              <span className="text-sm">₹ 23000.70</span>{" "}
              <span className="flex items-center pl-1 text-sm text-green-600">
                <FaArrowUp className="text-sm" /> (+0.40)
              </span>
            </div>
          </div>
        </div>
        <div className="ld:gap-24 flex flex-col items-center justify-center gap-12 py-8 md:grid md:grid-cols-2 lg:gap-x-28 xl:w-[90%] xl:gap-x-32 2xl:gap-x-64">
          <div className="">
            <SummaryCard data={dummyData[selectedTimeFrame].summary} />
          </div>
          <div>
            <SupportResistanceCard
              data={dummyData[selectedTimeFrame].supportResistance}
            />
          </div>
          <div>
            <MovingAveragesCard
              data={dummyData[selectedTimeFrame].movingAverages}
            />
          </div>
          <div>
            <OscillatorsCard data={dummyData[selectedTimeFrame].oscillators} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
