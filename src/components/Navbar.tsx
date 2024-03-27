import { STREAK_LOGO, ZERODHA_LOGO } from "../utils/constant";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 flex h-16 items-center justify-center bg-white py-6">
      <div className="flex w-[70%] items-center  justify-between p-2 max-md:w-[85%] xl:w-[90%]">
        <div className="flex  items-center">
          <img src={ZERODHA_LOGO} alt="zerodha" className="w-20" />
          <div className="mx-1 h-8 rounded-full border bg-[#EDEDED]"></div>
          <div>
            <span className="text-xs text-[#8F8F8F]">Powered by</span>
            <img src={STREAK_LOGO} alt="powered by streak" className="w-16" />
          </div>
        </div>

        <div className="flex items-center  justify-center gap-2 max-md:hidden">
          <button className=" flex items-center justify-center text-nowrap rounded-md px-2 py-1 text-center hover:bg-[#EDEDED]">
            Home
          </button>
          <button className="flex items-center justify-center text-nowrap rounded-md bg-[#387ED1] px-2 py-1 text-center text-white">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
