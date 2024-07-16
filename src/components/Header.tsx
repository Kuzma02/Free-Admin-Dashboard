// *********************
// Role of the component: The header component
// Name of the component: Header.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <Header />
// Input parameters: No input parameters
// Output: The header component
// *********************

import { FaReact } from "react-icons/fa6";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { HiOutlineBell } from "react-icons/hi";
import { HiOutlineMenu } from "react-icons/hi";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setSidebar } from "../features/dashboard/dashboardSlice";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import { toggleDarkMode } from "../features/darkMode/darkModeSlice";

const Header = () => {
  const dispatch = useAppDispatch();
  const { darkMode } = useAppSelector((state) => state.darkMode);

  return (
    <header className="dark:bg-blackPrimary bg-whiteSecondary relative">
      <div className="flex justify-between items-center px-9 py-5 max-xl:flex-col max-xl:gap-y-7 max-[400px]:px-4">
        <HiOutlineMenu
          className="text-2xl dark:text-whiteSecondary text-blackPrimary absolute bottom-7 left-5 xl:hidden max-sm:static max-sm:order-1 cursor-pointer"
          onClick={() => dispatch(setSidebar())}
        />
        <Link to="/">
          <FaReact className="text-4xl dark:text-whiteSecondary text-blackPrimary hover:rotate-180 hover:duration-1000 hover:ease-in-out cursor-pointer" />
        </Link>
        <SearchInput />
        <div className="flex gap-4 items-center max-xl:justify-center">
          <span className="dark:text-whiteSecondary text-blackPrimary">EN</span>
          {darkMode ? (
            <HiOutlineSun
              onClick={() => dispatch(toggleDarkMode())}
              className="text-xl dark:text-whiteSecondary text-blackPrimary cursor-pointer"
            />
          ) : (
            <HiOutlineMoon
              onClick={() => dispatch(toggleDarkMode())}
              className="text-xl dark:text-whiteSecondary text-blackPrimary cursor-pointer"
            />
          )}
          <Link to="/notifications">
            <HiOutlineBell className="text-xl dark:text-whiteSecondary text-blackPrimary" />
          </Link>
          <Link to="/profile">
            <div className="flex gap-2 items-center">
              <img
                src="/src/assets/profile.jpg"
                alt="profile"
                className="rounded-full w-10 h-10"
              />
              <div className="flex flex-col">
                <p className="dark:text-whiteSecondary text-blackPrimary text-base max-xl:text-sm">
                  Sherwood Gruninger
                </p>
                <p className="dark:text-whiteSecondary text-blackPrimary text-sm max-xl:text-xs">
                  Web Developer
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
