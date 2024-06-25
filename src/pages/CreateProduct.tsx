import { Sidebar } from "../components";
import { HiOutlineSave } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AiOutlineSave } from "react-icons/ai";
import { HiOutlineUpload } from "react-icons/hi";


const CreateProduct = () => {
  return (
    <div className="h-auto border-t border-blackSecondary border-1 flex">
      <Sidebar />
      <div className="bg-blackPrimary w-full ">
        <div className="bg-blackPrimary py-10">
          <div className="px-4 sm:px-6 lg:px-8 pb-8 border-b border-gray-800 flex justify-between items-center max-sm:flex-col max-sm:gap-5">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-bold leading-7 text-whiteSecondary">
                Add new product
              </h2>
            </div>
            <div className="flex gap-x-2 max-[370px]:flex-col max-[370px]:gap-2 max-[370px]:items-center">
              <button className="bg-blackPrimary border border-gray-600 w-48 py-2 text-lg hover:border-gray-500 duration-200 flex items-center justify-center gap-x-2">
                <AiOutlineSave className="text-whiteSecondary text-xl" />
                <span className="text-whiteSecondary font-medium">
                  Save draft
                </span>
              </button>
              <Link
                to="/products/add-product"
                className="bg-whiteSecondary w-48 py-2 text-lg hover:bg-white duration-200 flex items-center justify-center gap-x-2"
              >
                <HiOutlineSave className="text-blackPrimary text-xl" />
                <span className="text-blackPrimary font-semibold">
                  Publish now
                </span>
              </Link>
            </div>
          </div>

          {/* Add Product section here  */}
          <div className="px-4 sm:px-6 lg:px-8 pb-8 pt-8 grid grid-cols-2 gap-x-10 max-xl:grid-cols-1 max-xl:gap-y-10">
            {/* left div */}
            <div>
              <h3 className="text-2xl font-bold leading-7 text-whiteSecondary">
                Basic information
              </h3>

              <div className="mt-4 flex flex-col gap-5">
                <div>
                  <label
                    htmlFor="product-name"
                    className="text-whiteSecondary block text-base font-semibold mb-1"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    className="bg-blackPrimary text-whiteSecondary w-full h-10 indent-2 outline-none border-gray-700 border focus:border-gray-600 hover:border-gray-600"
                    id="product-name"
                    placeholder="Enter a product title..."
                  />
                </div>

                <div>
                  <label
                    htmlFor="product-description"
                    className="text-whiteSecondary block text-base font-semibold mb-1"
                  >
                    Description
                  </label>
                  <textarea
                    id="product-description"
                    rows={4}
                    cols={50}
                    className="bg-blackPrimary text-whiteSecondary w-full h-40 indent-2 outline-none border-gray-700 border focus:border-gray-600 hover:border-gray-600 py-2"
                    placeholder="Enter a product description..."
                  ></textarea>
                </div>
              </div>
            </div>

            {/* right div */}
            <div>
              <h3 className="text-2xl font-bold leading-7 text-whiteSecondary">
                Product images
              </h3>
              <button className="text-blackPrimary bg-whiteSecondary w-full py-2 text-lg hover:bg-white duration-200 flex items-center justify-center gap-x-2 mt-4 mb-4">
                <HiOutlineUpload className="text-blackPrimary text-2xl" />
                <span className="text-blackPrimary font-semibold">
                  Upload product images
                </span>
              </button>
              <div>
                <img
                  src="/src/assets/phone product.jpg"
                  className="w-full border border-gray-700 hover:border-gray-600 cursor-pointer"
                />
                <div className="mt-1 flex gap-1 flex-wrap">
                  <img
                    src="/src/assets/phone product 1.jpg"
                    className="w-56 border border-gray-700 hover:border-gray-600 cursor-pointer"
                  />
                  <img
                    src="/src/assets/phone product 2.jpg"
                    className="w-56 border border-gray-700 hover:border-gray-600 cursor-pointer"
                  />
                  <img
                    src="/src/assets/phone product 3.jpg"
                    className="w-56 border border-gray-700 hover:border-gray-600 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateProduct;
