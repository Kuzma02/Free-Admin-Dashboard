import { HiOutlineSearch } from "react-icons/hi";

const SearchInput = () => {
  return (
    <div className="relative max-sm:w-full">
      <HiOutlineSearch className="text-whiteSecondary absolute top-4 left-3 text-xl text-gray-500" />
      <input
        type="text"
        className="w-[600px] h-[50px] bg-blackPrimary border border-gray-700 indent-11 outline-0 text-whiteSecondary max-sm:w-full focus:border-gray-600"
        placeholder="Search here..."
      />
    </div>
  );
};
export default SearchInput;
