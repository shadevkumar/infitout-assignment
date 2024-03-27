import { STREAK_LOGO, ZERODHA_LOGO } from "../utils/constant";

const Navbar = () => {
  return (
    <div className="py-6 sticky top-0 h-16 bg-white z-50 items-center flex justify-center">
      <div className="w-[70%] max-md:w-[85%] xl:w-[90%]  flex items-center justify-between p-2">
        <div className="flex  items-center">
          <img src={ZERODHA_LOGO} alt="zerodha" className="w-20" />
          <div className="border rounded-full h-8 mx-1 bg-[#EDEDED]"></div>
          <div>
            <span className="text-xs text-[#8F8F8F]">Powered by</span>
            <img src={STREAK_LOGO} alt="powered by streak" className="w-16" />
          </div>
        </div>

        <div className="max-md:hidden flex  items-center justify-center gap-2">
          <button className=" px-2 py-1 rounded-md text-center flex items-center justify-center text-nowrap hover:bg-[#EDEDED]">
            Home
          </button>
          <button className="bg-[#387ED1] px-2 py-1 flex items-center justify-center rounded-md text-center text-nowrap text-white">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
