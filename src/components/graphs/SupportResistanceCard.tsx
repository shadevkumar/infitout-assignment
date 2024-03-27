import { useEffect, useRef, useState } from "react";
import { CiCircleAlert } from "react-icons/ci";
import {
  POINTER_RESISTANCE_SVG,
  RESISTANCE_BAR_GRAPH,
} from "../../utils/constant";
import { usePointerPosition } from "../../hooks/usePointerPosition";
import { useBarResize } from "../../hooks/useBarResize";

interface SupportResistance {
  S1: number;
  S2: number;
  S3: number;
  R1: number;
  R2: number;
  R3: number;
  bullish: number;
}
interface SupportResistanceValueProps {
  label: string;
  value: number;
}

const SupportResistanceValue: React.FC<SupportResistanceValueProps> = ({
  label,
  value,
}) => (
  <div className="flex flex-col items-center">
    <span>{value}</span>
    <span className="text-[#9BABC6]">{label}</span>
  </div>
);

const SupportResistanceCard = ({ data }: { data: SupportResistance }) => {
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



  const values = [
    { label: "S1", value: data.S1 },
    { label: "S2", value: data.S2 },
    { label: "S3", value: data.S3 },
    { label: "R1", value: data.R1 },
    { label: "R2", value: data.R2 },
    { label: "R3", value: data.R3 },
  ];

  return (
    <>
      <div className="flex min-h-[26rem] flex-col items-center justify-start ">
        <div className="flex  w-full items-center justify-between">
          <span className="font-semibold">Support & Resistance</span>
          <span>
            <CiCircleAlert className="rotate-180 text-lg" />
          </span>
        </div>
        <div className="flex  flex-col justify-between ">
          <div className="relative  flex h-32 w-80 items-center px-4 pt-4 md:w-96">
            <img
              src={RESISTANCE_BAR_GRAPH}
              alt="Resistance bar"
              ref={barImageRef}
              className="w-full"
            />
            <img
              src={POINTER_RESISTANCE_SVG}
              alt="pointer resistance"
              className="pointer absolute left-4 w-5 cursor-pointer md:w-6"
              style={{ transform: `translateX(${pointerPosition}px)` }}
            />
          </div>
          <div className="flex flex-col justify-between gap-12">
            <div>
              <ul className="flex items-center  justify-around ">
                <li>S3</li>
                <li>S2</li>
                <li>S1</li>
                <li>R1</li>
                <li>R2</li>
                <li>R3</li>
              </ul>
            </div>
            <div className="grid grid-cols-3 gap-x-12 gap-y-4 py-8">
              {values.map(({ label, value }) => (
                <SupportResistanceValue
                  key={label}
                  label={label}
                  value={value}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportResistanceCard;
