import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineChartPie } from "react-icons/hi";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineTag } from "react-icons/hi";
import { HiOutlineTruck } from "react-icons/hi";
import { HiOutlineStar } from "react-icons/hi";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { HiOutlineChat } from "react-icons/hi";
import { useAppDispatch, useAppSelector } from "../hooks";
import { HiOutlineX } from "react-icons/hi";
import { setSidebar } from "../features/dashboard/dashboardSlice";

const Sidebar = () => {
  const { isSidebarOpen } = useAppSelector((state) => state.dashboard);
  const dispatch = useAppDispatch();
  return (
    <>
      {isSidebarOpen && (
        <div className="w-72 h-[100vh] bg-blackPrimary pt-6 xl:relative max-xl:fixed max-xl:top-0">
          <HiOutlineX
            className="text-whiteSecondary text-2xl ml-auto mb-2 cursor-pointer xl:py-3"
            onClick={() => dispatch(setSidebar())}
          />
          <div>
            <div className="flex items-center self-stretch gap-4 py-6 px-6 bg-whiteSecondary cursor-pointer  max-xl:py-3">
              <HiOutlineHome className="text-blackPrimary text-xl" />
              <span className="text-blackPrimary text-lg">Overview</span>
            </div>
            <div className="flex items-center self-stretch gap-4 py-6 px-6 bg-blackPrimary hover:bg-blackSecondary cursor-pointer max-xl:py-3">
              <IoCartOutline className="text-whiteSecondary text-xl" />
              <span className="text-whiteSecondary text-lg">E-Commerce</span>
            </div>
            <div className="flex items-center self-stretch gap-4 py-6 px-6 bg-blackPrimary hover:bg-blackSecondary cursor-pointer max-xl:py-3">
              <HiOutlineChartPie className="text-whiteSecondary text-xl" />
              <span className="text-whiteSecondary text-lg">Analytics</span>
            </div>
            <div className="flex items-center self-stretch gap-4 py-6 px-6 bg-blackPrimary hover:bg-blackSecondary cursor-pointer max-xl:py-3">
              <HiOutlineDevicePhoneMobile className="text-whiteSecondary text-xl" />
              <span className="text-whiteSecondary text-lg">Products</span>
            </div>
            <div className="flex items-center self-stretch gap-4 py-6 px-6 bg-blackPrimary hover:bg-blackSecondary cursor-pointer max-xl:py-3">
              <HiOutlineTag className="text-whiteSecondary text-xl" />
              <span className="text-whiteSecondary text-lg">Categories</span>
            </div>
            <div className="flex items-center self-stretch gap-4 py-6 px-6 bg-blackPrimary hover:bg-blackSecondary cursor-pointer max-xl:py-3">
              <HiOutlineTruck className="text-whiteSecondary text-xl" />
              <span className="text-whiteSecondary text-lg">Orders</span>
            </div>
            <div className="flex items-center self-stretch gap-4 py-6 px-6 bg-blackPrimary hover:bg-blackSecondary cursor-pointer max-xl:py-3">
              <HiOutlineStar className="text-whiteSecondary text-xl" />
              <span className="text-whiteSecondary text-lg">Reviews</span>
            </div>
          </div>

          <div className="absolute bottom-0 border-1 border-t border-blackSecondary w-full">
            <div className="flex items-center self-stretch gap-4 py-6 px-6 bg-blackPrimary hover:bg-blackSecondary cursor-pointer max-xl:py-3">
              <HiOutlineInformationCircle className="text-whiteSecondary text-xl" />
              <span className="text-whiteSecondary text-lg">Help Desk</span>
            </div>
            <div className="flex items-center self-stretch gap-4 py-6 px-6 bg-blackPrimary hover:bg-blackSecondary cursor-pointer max-xl:py-3">
              <HiOutlineChat className="text-whiteSecondary text-xl" />
              <span className="text-whiteSecondary text-lg">Chat</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Sidebar;
