import { STREAK_LOGO, ZERODHA_LOGO } from "../utils/constant";

const Footer = () => {
  return (
    <div className="h-44 bg-[#F7F7FA] px-12 py-12 flex flex-col gap-12">
      <div className="flex  gap-2">
        <span className="text-[#8F8F8F]">© Powered by</span>
        <img
          src={STREAK_LOGO}
          alt="powered by streak"
          className="w-20"
        />
      </div>
      <div className="pb-12">
        <img
          src={ZERODHA_LOGO}
          alt="zerodha"
          className="w-28 "
        />
        <span className="text-[#8F8F8F] text-xs md:text-sm">
          NSE &BSE-SEBI Registration No: INZO00031633 CDSL SEBI Registration No:
          IN-DP-431-2019
        </span>
      </div>
    </div>
  );
};

export default Footer;
