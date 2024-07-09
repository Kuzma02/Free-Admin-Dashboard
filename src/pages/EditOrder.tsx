import { AiOutlineSave } from "react-icons/ai";
import { HiOutlineSave } from "react-icons/hi";
import {
  InputWithLabel,
  Sidebar,
  SimpleInput,
  TextAreaInput,
  WhiteButton,
} from "../components";
import { useEffect, useState } from "react";

const EditOrder = () => {

  const [ inputObject, setInputObject ] = useState({
    customerName: "Brent",
    customerLastName: "Fesi",
    companyName: "NoName Inc.",
    country: "Portugal",
    streetAndHouseNumber: "Brent Fesi Street 123",
    city: "Lisabon",
    zipCode: "22215",
    phoneNumber: "678 123 456",
    emailAddress: "brentfesi@email.com",
    orderNotice: "Please deliver the package to the back door.",
    searchProducts: "",
    quantity: 0,
  });

  return (
    <div className="h-auto border-t border-blackSecondary border-1 flex dark:bg-blackPrimary bg-whiteSecondary">
      <Sidebar />
      <div className="dark:bg-blackPrimary bg-whiteSecondary w-full ">
        <div className="dark:bg-blackPrimary bg-whiteSecondary py-10">
          <div className="px-4 sm:px-6 lg:px-8 pb-8 border-b border-gray-800 flex justify-between items-center max-sm:flex-col max-sm:gap-5">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-bold leading-7 dark:text-whiteSecondary text-blackPrimary">
                Edit order
              </h2>
            </div>
            <div className="flex gap-x-2 max-[370px]:flex-col max-[370px]:gap-2 max-[370px]:items-center">
              <button className="dark:bg-blackPrimary bg-whiteSecondary border border-gray-600 w-48 py-2 text-lg dark:hover:border-gray-500 hover:border-gray-400 duration-200 flex items-center justify-center gap-x-2">
                <AiOutlineSave className="dark:text-whiteSecondary text-blackPrimary text-xl" />
                <span className="dark:text-whiteSecondary text-blackPrimary font-medium">
                  Save draft
                </span>
              </button>
              <WhiteButton
                link="/orders/add-order"
                textSize="lg"
                width="48"
                py="2"
                text="Update order"
              >
                <HiOutlineSave className="dark:text-blackPrimary text-whiteSecondary text-xl" />
              </WhiteButton>
            </div>
          </div>

          {/* Add Product section here  */}
          <div className="px-4 sm:px-6 lg:px-8 pb-8 pt-8 grid grid-cols-2 gap-x-10 max-xl:grid-cols-1 max-xl:gap-y-10">
            {/* left div */}
            <div>
              <h3 className="text-2xl font-bold leading-7 dark:text-whiteSecondary text-blackPrimary">
                Order information
              </h3>

              <div className="mt-4 flex flex-col gap-5">
                <InputWithLabel label="Customer name">
                  <SimpleInput
                    type="text"
                    placeholder="Enter a customer name..."
                    value={inputObject.customerName}
                    onChange={(e) => setInputObject({ ...inputObject, customerName: e.target.value })}
                  />
                </InputWithLabel>

                <InputWithLabel label="Customer lastname">
                  <SimpleInput
                    type="text"
                    placeholder="Enter a customer lastname..."
                    value={inputObject.customerLastName}
                    onChange={(e) => setInputObject({ ...inputObject, customerLastName: e.target.value })}
                  />
                </InputWithLabel>

                <InputWithLabel label="Company name (optional)">
                  <SimpleInput
                    type="text"
                    placeholder="Enter a company name..."
                    value={inputObject.companyName}
                    onChange={(e) => setInputObject({ ...inputObject, companyName: e.target.value })}
                  />
                </InputWithLabel>

                <InputWithLabel label="Country">
                  <SimpleInput type="text" placeholder="Enter a country..." value={inputObject.country} onChange={(e) => setInputObject({...inputObject, country: e.target.value})} />
                </InputWithLabel>

                <InputWithLabel label="Street and house number">
                  <SimpleInput
                    type="text"
                    placeholder="Enter a street and house number..."
                    value={inputObject.streetAndHouseNumber}
                    onChange={(e) => setInputObject({ ...inputObject, streetAndHouseNumber: e.target.value })}
                  />
                </InputWithLabel>

                <InputWithLabel label="City">
                  <SimpleInput type="text" placeholder="Enter a city..." value={inputObject.city} onChange={(e) => setInputObject({...inputObject, city: e.target.value})} />
                </InputWithLabel>

                <InputWithLabel label="Zip code">
                  <SimpleInput type="text" placeholder="Enter a zip code..." value={inputObject.zipCode} onChange={(e) => setInputObject({...inputObject, zipCode: e.target.value})} />
                </InputWithLabel>

                <InputWithLabel label="Phone number">
                  <SimpleInput
                    type="text"
                    placeholder="Enter a phone number..."
                    value={inputObject.phoneNumber}
                    onChange={(e) => setInputObject({ ...inputObject, phoneNumber: e.target.value })}
                  />
                </InputWithLabel>

                <InputWithLabel label="Email address">
                  <SimpleInput
                    type="text"
                    placeholder="Enter a email address..."
                    value={inputObject.emailAddress}
                    onChange={(e) => setInputObject({ ...inputObject, emailAddress: e.target.value })}
                  />
                </InputWithLabel>

                <InputWithLabel label="Order notice">
                  <TextAreaInput placeholder="Enter a order notice..." value={inputObject.orderNotice} onChange={(e) => setInputObject({...inputObject, orderNotice: e.target.value})} />
                </InputWithLabel>
              </div>
            </div>

            {/* right div */}
            <div>
              <h3 className="text-2xl font-bold leading-7 dark:text-whiteSecondary text-blackPrimary">
                Products in order
              </h3>

              <div>
                <div className="mt-4 flex flex-col gap-5">
                  <InputWithLabel label="Search products">
                    <SimpleInput type="text" placeholder="Search products..." value={inputObject.searchProducts} onChange={(e) => setInputObject({...inputObject, searchProducts: e.target.value})} />
                  </InputWithLabel>
                  <InputWithLabel label="Quantity">
                    <SimpleInput
                      type="text"
                      placeholder="Enter a quantity..."
                      value={inputObject.quantity}
                      onChange={(e) => setInputObject({ ...inputObject, quantity: Number(e.target.value) })}
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

                <div className="mt-5">
                  <h3 className="text-2xl font-bold leading-7 dark:text-whiteSecondary text-blackPrimary">
                    Products
                  </h3>
                  <div className="mt-4 flex flex-col gap-5 max-[450px]:items-start">
                    <div className="flex justify-between items-center max-[450px]:flex-col">
                      <div className="flex items-center gap-3 max-[450px]:flex-col">
                      <img src="/src/assets/tablet (1).jpg" alt="product" className="w-12 h-12" />
                      <span className="dark:text-whiteSecondary text-blackPrimary">Samsung Galaxy Tab 7</span>
                      </div>
                      <span className="dark:text-whiteSecondary text-blackPrimary">Quantity: 2</span>
                    </div>
                    <div className="flex justify-between items-center max-[450px]:flex-col">
                      <div className="flex items-center gap-3  max-[450px]:flex-col">
                      <img src="/src/assets/tablet (2).jpg" alt="product" className="w-12 h-12" />
                      <span className="dark:text-whiteSecondary text-blackPrimary">Samsung Galaxy Tab 8</span>
                      </div>
                      <span className="dark:text-whiteSecondary text-blackPrimary">Quantity: 1</span>
                    </div>
                    <div className="flex justify-between items-center max-[450px]:flex-col">
                      <div className="flex items-center gap-3  max-[450px]:flex-col">
                      <img src="/src/assets/tablet (3).jpg" alt="product" className="w-12 h-12" />
                      <span className="dark:text-whiteSecondary text-blackPrimary">Samsung Galaxy Tab 9</span>
                      </div>
                      <span className="dark:text-whiteSecondary text-blackPrimary">Quantity: 1</span>
                    </div>
                  </div>
                </div>

              </div>
              <div className="mt-5">
                <h3 className="text-2xl font-bold leading-7 dark:text-whiteSecondary text-blackPrimary">
                  Total
                </h3>
                <div className="mt-4 flex flex-col gap-5">
                  <div className="flex justify-between items-center">
                    <span className="dark:text-whiteSecondary text-blackPrimary">Total products</span>
                    <span className="dark:text-whiteSecondary text-blackPrimary">4</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="dark:text-whiteSecondary text-blackPrimary">Total price</span>
                    <span className="dark:text-whiteSecondary text-blackPrimary">$1899</span>
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
export default EditOrder;
