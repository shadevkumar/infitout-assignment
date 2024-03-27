import { useEffect, useRef, useState, useMemo } from "react";
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

  const minBullish = 1;
  const maxBullish = 17;

  const pointerPosition = useMemo(() => {
    const calculatePointerPosition = (bullish: number) => {
      const normalizedBullish =
        (bullish - minBullish) / (maxBullish - minBullish);
      const pointerPosition = normalizedBullish * (barWidth - 40);
      return pointerPosition;
    };

    return calculatePointerPosition(bullish);
  }, [bullish, minBullish, maxBullish, barWidth]);

  useEffect(() => {
    setBullish(data.bullish);
  }, [data.bullish]);

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
      <div className="min-h-[26rem] flex flex-col items-center justify-start ">
        <div className="w-full  flex justify-between items-center">
          <span className="font-semibold">Support & Resistance</span>
          <span>
            <CiCircleAlert className="rotate-180 text-lg" />
          </span>
        </div>
        <div className="flex  flex-col justify-between ">
          <div className="relative  w-80 md:w-96 pt-4 px-4 h-32 flex items-center">
            <img
              src={RESISTANCE_BAR_GRAPH}
              alt="Resistance bar"
              ref={barImageRef}
              className="w-full"
            />
            <img
              src={POINTER_RESISTANCE_SVG}
              alt="pointer resistance"
              className="pointer cursor-pointer w-5 md:w-6 absolute left-4"
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
            <div className="grid grid-cols-3 py-8 gap-x-12 gap-y-4">
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
