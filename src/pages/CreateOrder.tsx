import { AiOutlineSave } from "react-icons/ai";
import { HiOutlineSave } from "react-icons/hi";
import {
  InputWithLabel,
  Sidebar,
  SimpleInput,
  TextAreaInput,
  WhiteButton,
} from "../components";

const CreateOrder = () => {
  return (
    <div className="h-auto border-t border-blackSecondary border-1 flex">
      <Sidebar />
      <div className="bg-blackPrimary w-full ">
        <div className="bg-blackPrimary py-10">
          <div className="px-4 sm:px-6 lg:px-8 pb-8 border-b border-gray-800 flex justify-between items-center max-sm:flex-col max-sm:gap-5">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-bold leading-7 text-whiteSecondary">
                Add new order
              </h2>
            </div>
            <div className="flex gap-x-2 max-[370px]:flex-col max-[370px]:gap-2 max-[370px]:items-center">
              <button className="bg-blackPrimary border border-gray-600 w-48 py-2 text-lg hover:border-gray-500 duration-200 flex items-center justify-center gap-x-2">
                <AiOutlineSave className="text-whiteSecondary text-xl" />
                <span className="text-whiteSecondary font-medium">
                  Save draft
                </span>
              </button>
              <WhiteButton
                link="/orders/add-order"
                textSize="lg"
                width="48"
                py="2"
                text="Publish now"
              >
                <HiOutlineSave className="text-blackPrimary text-xl" />
              </WhiteButton>
              {/* <Link
                to="/orders/add-order"
                className="bg-whiteSecondary w-48 py-2 text-lg hover:bg-white duration-200 flex items-center justify-center gap-x-2"
              >
                <HiOutlineSave className="text-blackPrimary text-xl" />
                <span className="text-blackPrimary font-semibold">
                  Publish now
                </span>
              </Link> */}
            </div>
          </div>

          {/* Add Product section here  */}
          <div className="px-4 sm:px-6 lg:px-8 pb-8 pt-8 grid grid-cols-2 gap-x-10 max-xl:grid-cols-1 max-xl:gap-y-10">
            {/* left div */}
            <div>
              <h3 className="text-2xl font-bold leading-7 text-whiteSecondary">
                Order information
              </h3>

              <div className="mt-4 flex flex-col gap-5">
                <InputWithLabel label="Customer name">
                  <SimpleInput
                    type="text"
                    placeholder="Enter a customer name..."
                  />
                </InputWithLabel>

                <InputWithLabel label="Customer lastname">
                  <SimpleInput
                    type="text"
                    placeholder="Enter a customer lastname..."
                  />
                </InputWithLabel>

                <InputWithLabel label="Company name (optional)">
                  <SimpleInput
                    type="text"
                    placeholder="Enter a company name..."
                  />
                </InputWithLabel>

                <InputWithLabel label="Country">
                  <SimpleInput type="text" placeholder="Enter a country..." />
                </InputWithLabel>

                <InputWithLabel label="Street and house number">
                  <SimpleInput
                    type="text"
                    placeholder="Enter a street and house number..."
                  />
                </InputWithLabel>

                <InputWithLabel label="City">
                  <SimpleInput type="text" placeholder="Enter a city..." />
                </InputWithLabel>

                <InputWithLabel label="Zip code">
                  <SimpleInput type="text" placeholder="Enter a zip code..." />
                </InputWithLabel>

                <InputWithLabel label="Phone number">
                  <SimpleInput
                    type="text"
                    placeholder="Enter a phone number..."
                  />
                </InputWithLabel>

                <InputWithLabel label="Email address">
                  <SimpleInput
                    type="text"
                    placeholder="Enter a email address..."
                  />
                </InputWithLabel>

                <InputWithLabel label="Order notice">
                  <TextAreaInput placeholder="Enter a order notice..." />
                </InputWithLabel>
              </div>
            </div>

            {/* right div */}
            <div>
              <h3 className="text-2xl font-bold leading-7 text-whiteSecondary">
                Products in order
              </h3>

              <div>
                <div className="mt-4 flex flex-col gap-5">
                  <InputWithLabel label="Search products">
                    <SimpleInput type="text" placeholder="Search products..." />
                  </InputWithLabel>
                  <InputWithLabel label="Quantity">
                    <SimpleInput
                      type="number"
                      placeholder="Enter a quantity..."
                    />
                  </InputWithLabel>
                  <WhiteButton
                    link="/orders/add-order"
                    textSize="lg"
                    width="full"
                    py="2"
                    text="Add product"
                  />
                </div>
              </div>
              <div className="mt-5">
                <h3 className="text-2xl font-bold leading-7 text-whiteSecondary">
                  Total
                </h3>
                <div className="mt-4 flex flex-col gap-5">
                  <div className="flex justify-between items-center">
                    <span className="text-whiteSecondary">Total products</span>
                    <span className="text-whiteSecondary">0</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-whiteSecondary">Total price</span>
                    <span className="text-whiteSecondary">0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateOrder;
