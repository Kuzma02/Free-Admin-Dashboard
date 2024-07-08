import { HiOutlineSearch } from "react-icons/hi";

const SearchInput = () => {
  return (
    <div className="relative max-sm:w-full">
      <HiOutlineSearch className="dark:text-whiteSecondary text-blackPrimary absolute top-4 left-3 text-xl text-gray-500" />
      <input
        type="text"
        className="w-[600px] h-[50px] dark:bg-blackPrimary bg-white border border-gray-700 indent-11 outline-0 dark:text-whiteSecondary text-blackPrimary max-sm:w-full focus:border-gray-600"
        placeholder="Search here..."
      />
    </div>
  );
};
export default SearchInput;
