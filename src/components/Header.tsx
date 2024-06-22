import { FaReact } from "react-icons/fa6";
import { HiOutlineSun } from "react-icons/hi";
import { HiOutlineBell } from "react-icons/hi";
import { HiOutlineMenu } from "react-icons/hi";
import { useAppDispatch } from "../hooks";
import { setSidebar } from "../features/dashboard/dashboardSlice";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";


const Header = () => {
  const dispatch = useAppDispatch();
  return (
    <header className="bg-blackPrimary relative">
      <div className="flex justify-between items-center px-9 py-5 max-xl:flex-col max-xl:gap-y-7 max-[400px]:px-4">
      <HiOutlineMenu className="text-2xl text-whiteSecondary absolute bottom-7 left-5 xl:hidden max-sm:static max-sm:order-1 cursor-pointer" onClick={() => dispatch(setSidebar())} />
        <Link to="/">
          <FaReact className="text-4xl text-whiteSecondary hover:rotate-180 hover:duration-1000 hover:ease-in-out cursor-pointer" />
        </Link>
        <SearchInput />
        <div className="flex gap-4 items-center max-xl:justify-center">
          <span className="text-whiteSecondary">EN</span>
          <HiOutlineSun className="text-xl text-whiteSecondary" />
          <HiOutlineBell className="text-xl text-whiteSecondary" />
          <div className="flex gap-2 items-center">
            <img
              src="/src/assets/profile.jpg"
              alt="profile"
              className="rounded-full w-10 h-10"
            />
            <div className="flex flex-col">
              <p className="text-whiteSecondary text-base max-xl:text-sm">Sherwood Gruninger</p>
              <p className="text-whiteSecondary text-sm max-xl:text-xs">Web Developer</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
