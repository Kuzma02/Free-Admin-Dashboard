import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineChartPie } from "react-icons/hi";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineTag } from "react-icons/hi";
import { HiOutlineTruck } from "react-icons/hi";
import { HiOutlineStar } from "react-icons/hi";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { HiOutlineChat } from "react-icons/hi";




const Sidebar = () => {
  return (
    <div className="w-72 h-full bg-blackPrimary pt-6 relative max-xl:hidden">
      <div className="flex items-center self-stretch gap-4 py-6 px-6 bg-whiteSecondary">
        <HiOutlineHome className="text-blackPrimary text-xl" />
        <span className="text-blackPrimary text-lg">Overview</span>
      </div>
      <div className="flex items-center self-stretch gap-4 py-6 px-6 bg-blackPrimary hover:bg-blackSecondary cursor-pointer">
        <IoCartOutline className="text-whiteSecondary text-xl" />
        <span className="text-whiteSecondary text-lg">E-Commerce</span>
      </div>
      <div className="flex items-center self-stretch gap-4 py-6 px-6 bg-blackPrimary hover:bg-blackSecondary cursor-pointer">
        <HiOutlineChartPie className="text-whiteSecondary text-xl" />
        <span className="text-whiteSecondary text-lg">Analytics</span>
      </div>
      <div className="flex items-center self-stretch gap-4 py-6 px-6 bg-blackPrimary hover:bg-blackSecondary cursor-pointer">
        <HiOutlineDevicePhoneMobile className="text-whiteSecondary text-xl" />
        <span className="text-whiteSecondary text-lg">Products</span>
      </div>
      <div className="flex items-center self-stretch gap-4 py-6 px-6 bg-blackPrimary hover:bg-blackSecondary cursor-pointer">
        <HiOutlineTag className="text-whiteSecondary text-xl" />
        <span className="text-whiteSecondary text-lg">Categories</span>
      </div>
      <div className="flex items-center self-stretch gap-4 py-6 px-6 bg-blackPrimary hover:bg-blackSecondary cursor-pointer">
        <HiOutlineTruck className="text-whiteSecondary text-xl" />
        <span className="text-whiteSecondary text-lg">Orders</span>
      </div>
      <div className="flex items-center self-stretch gap-4 py-6 px-6 bg-blackPrimary hover:bg-blackSecondary cursor-pointer">
        <HiOutlineStar className="text-whiteSecondary text-xl" />
        <span className="text-whiteSecondary text-lg">Reviews</span>
      </div>

      <div className="absolute bottom-0 border-1 border-t border-blackSecondary w-full">
      <div className="flex items-center self-stretch gap-4 py-6 px-6 bg-blackPrimary hover:bg-blackSecondary cursor-pointer">
        <HiOutlineInformationCircle className="text-whiteSecondary text-xl" />
        <span className="text-whiteSecondary text-lg">Help Desk</span>
      </div>
      <div className="flex items-center self-stretch gap-4 py-6 px-6 bg-blackPrimary hover:bg-blackSecondary cursor-pointer">
        <HiOutlineChat className="text-whiteSecondary text-xl" />
        <span className="text-whiteSecondary text-lg">Chat</span>
      </div>
      </div>
    </div>
  )
}
export default Sidebar