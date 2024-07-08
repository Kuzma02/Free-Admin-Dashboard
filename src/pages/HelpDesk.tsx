import { FAQSection, SearchInput, Sidebar } from "../components";
import { HiOutlineInformationCircle } from "react-icons/hi";

const HelpDesk = () => {
  return (
    <div className="h-auto border-t border-blackSecondary border-1 flex">
    <Sidebar />
    <div className="bg-blackPrimary w-full">
      <div className="bg-blackPrimary py-10">
        <div className="px-4 sm:px-6 lg:px-8 pb-8 border-b border-gray-800 flex justify-between items-center max-sm:flex-col max-sm:gap-5">
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-bold leading-7 text-whiteSecondary">
              Help Desk
            </h2>
          </div>
          <button className="bg-blackPrimary border border-gray-600 w-48 py-2 text-lg hover:border-gray-500 duration-200 flex items-center justify-center gap-x-2">
            <HiOutlineInformationCircle className="text-whiteSecondary text-xl" />
            <span className="text-whiteSecondary font-medium">
              Get Help
            </span>
          </button>
        </div>
        {/* Search Input for questions */}
        <div className="px-4 sm:px-6 lg:px-8 pb-8 pt-8">
          <SearchInput />
          <p className="text-whiteSecondary mt-4">
            Welcome to the Help Desk. How can we assist you today?
          </p>
        </div>
        {/* FAQ Section */}
        <FAQSection />
      </div>
    </div>
  </div>
  )
}
export default HelpDesk