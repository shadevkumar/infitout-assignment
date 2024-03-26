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

  const handleTimeFrameChange = (timeFrame: string) => {
    setSelectedTimeFrame(timeFrame);
  };

  return (
    <>
      <div className="flex flex-col items-center bg-[#FBFDFF]">
        <div className="timeframe sticky max-md:fixed md:top-16 md:bottom-auto bottom-0 md:w-[50%] w-full px-1 py-2  flex items-center max-md:justify-around md:gap-6 max-md:bg-white z-50 justify-center">
          <button
            onClick={() => handleTimeFrameChange("5min")}
            className="cursor-pointer text-[#9BABC6]"
          >
            5min
          </button>
          <button
            onClick={() => handleTimeFrameChange("10min")}
            className="cursor-pointer text-[#9BABC6]"
          >
            10min
          </button>
          <button
            onClick={() => handleTimeFrameChange("15min")}
            className="cursor-pointer text-[#9BABC6]"
          >
            15min
          </button>
          <button
            onClick={() => handleTimeFrameChange("30min")}
            className="cursor-pointer text-[#9BABC6]"
          >
            30min
          </button>
          <button
            onClick={() => handleTimeFrameChange("hour")}
            className="cursor-pointer text-[#9BABC6]"
          >
            hour
          </button>
          <button
            onClick={() => handleTimeFrameChange("day")}
            className="cursor-pointer text-[#9BABC6]"
          >
            day
          </button>
        </div>
        <div className="flex max-md:w-[85%] w-[70%] xl:w-[90%] sticky top-16 bg-white z-40">
          <RiArrowLeftSLine className="mt-2" />

          <div className="flex flex-col">
            <div className="flex  items-center gap-2">
              <img
                src={NIFTY_50_LOGO}
                alt="NIFTY 50 logo"
                className="w-8"
              />
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
        <div className="py-8 lg:gap-x-28 flex flex-col md:grid md:grid-cols-2 items-center justify-center gap-12 ld:gap-24 xl:gap-x-32 2xl:gap-x-64 xl:w-[90%]">
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
