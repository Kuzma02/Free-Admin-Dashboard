import { ImageUpload, InputWithLabel, Sidebar } from "../components";
import { HiOutlineSave } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AiOutlineSave } from "react-icons/ai";
import SimpleInput from "../components/SimpleInput";
import TextAreaInput from "../components/TextAreaInput";
import SelectInput from "../components/SelectInput";
import { selectList, stockStatusList } from "../utils/data";
import { useState } from "react";

const EditProduct = () => {
  const [inputObject, setInputObject] = useState({
    title: "Samsung Galaxy Tab A7 Lite",
    description: "This is demo description for Samsung Galaxy Tab A7 Lite.",
    category: selectList[0].value,
    basePrice: "$100",
    discountPrice: "$80",
    stock: "50",
    sku: "SK-2323-2323",
    stockStatus: stockStatusList[0].value,
    weight: "500g",
    length: "600cm",
    width: "600cm",
    height: "400cm",
    metaTitle: "Samsung Galaxy Tab A7 Lite - Demo Title",
    metaDescription: "Samsung Galaxy Tab A7 Lite - Demo Description",
  });


  return (
    <div className="h-auto border-t border-blackSecondary border-1 flex dark:bg-blackPrimary bg-whiteSecondary">
      <Sidebar />
      <div className="dark:bg-blackPrimary bg-whiteSecondary w-full ">
        <div className="dark:bg-blackPrimary bg-whiteSecondary py-10">
          <div className="px-4 sm:px-6 lg:px-8 pb-8 border-b border-gray-800 flex justify-between items-center max-sm:flex-col max-sm:gap-5">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-bold leading-7 dark:text-whiteSecondary text-blackPrimary">
                Edit product
              </h2>
            </div>
            <div className="flex gap-x-2 max-[370px]:flex-col max-[370px]:gap-2 max-[370px]:items-center">
              <button className="dark:bg-blackPrimary bg-whiteSecondary border border-gray-600 w-48 py-2 text-lg dark:hover:border-gray-500 hover:border-gray-400 duration-200 flex items-center justify-center gap-x-2">
                <AiOutlineSave className="dark:text-whiteSecondary text-blackPrimary text-xl" />
                <span className="dark:text-whiteSecondary text-blackPrimary font-medium">
                  Save draft
                </span>
              </button>
              <Link
                to="/products/add-product"
                className="dark:bg-whiteSecondary bg-blackPrimary w-48 py-2 text-lg dark:hover:bg-white hover:bg-blackSecondary duration-200 flex items-center justify-center gap-x-2"
              >
                <HiOutlineSave className="dark:text-blackPrimary text-whiteSecondary text-xl" />
                <span className="dark:text-blackPrimary text-whiteSecondary font-semibold">
                  Update product
                </span>
              </Link>
            </div>
          </div>

          {/* Add Product section here  */}
          <div className="px-4 sm:px-6 lg:px-8 pb-8 pt-8 grid grid-cols-2 gap-x-10 max-xl:grid-cols-1 max-xl:gap-y-10">
            {/* left div */}
            <div>
              <h3 className="text-2xl font-bold leading-7 dark:text-whiteSecondary text-blackPrimary">
                Basic information
              </h3>

              <div className="mt-4 flex flex-col gap-5">
                <InputWithLabel label="Title">
                  <SimpleInput
                    type="text"
                    placeholder="Enter a product title..."
                    value={inputObject.title}
                    onChange={(e) =>
                      setInputObject({ ...inputObject, title: e.target.value })
                    }
                  />
                </InputWithLabel>

                <InputWithLabel label="Description">
                  <TextAreaInput
                    placeholder="Enter a product description..."
                    rows={4}
                    cols={50}
                    value={inputObject.description}
                    onChange={(e) =>
                      setInputObject({
                        ...inputObject,
                        description: e.target.value,
                      })
                    }
                  />
                </InputWithLabel>

                <InputWithLabel label="Category">
                  <SelectInput
                    selectList={selectList}
                    value={inputObject.category}
                    onChange={(e) =>
                      setInputObject({
                        ...inputObject,
                        category: e.target.value,
                      })
                    }
                  />
                </InputWithLabel>
              </div>

              <h3 className="text-2xl font-bold leading-7 dark:text-whiteSecondary text-blackPrimary mt-16">
                Pricing & Inventory
              </h3>

              <div className="mt-4 flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-x-5 max-[500px]:grid-cols-1 max-[500px]:gap-x-0 max-[500px]:gap-y-5">
                  <InputWithLabel label="Base pricing">
                    <SimpleInput
                      type="text"
                      placeholder="Enter a product base pricing..."
                      value={inputObject.basePrice}
                      onChange={(e) =>
                        setInputObject({
                          ...inputObject,
                          basePrice: e.target.value,
                        })
                      }
                    />
                  </InputWithLabel>

                  <InputWithLabel label="Price with dicount">
                    <SimpleInput
                      type="text"
                      placeholder="Enter a price with discount..."
                      value={inputObject.discountPrice}
                      onChange={(e) =>
                        setInputObject({
                          ...inputObject,
                          discountPrice: e.target.value,
                        })
                      }
                    />
                  </InputWithLabel>
                </div>

                <div className="grid grid-cols-2 gap-x-5 max-[500px]:grid-cols-1 max-[500px]:gap-x-0 max-[500px]:gap-y-5">
                  <InputWithLabel label="Stock">
                    <SimpleInput
                      type="text"
                      placeholder="Enter a product stock..."
                      value={inputObject.stock}
                      onChange={(e) =>
                        setInputObject({
                          ...inputObject,
                          stock: e.target.value,
                        })
                      }
                    />
                  </InputWithLabel>

                  <InputWithLabel label="SKU">
                    <SimpleInput
                      type="text"
                      placeholder="Enter a product SKU..."
                      value={inputObject.sku}
                      onChange={(e) =>
                        setInputObject({
                          ...inputObject,
                          sku: e.target.value,
                        })
                      }
                    />
                  </InputWithLabel>
                </div>
                <InputWithLabel label="Stock status">
                  <SelectInput
                    selectList={stockStatusList}
                    value={inputObject.stockStatus}
                    onChange={(e) =>
                      setInputObject({
                        ...inputObject,
                        stockStatus: e.target.value,
                      })
                    }
                  />
                </InputWithLabel>
              </div>

              <h3 className="text-2xl font-bold leading-7 dark:text-whiteSecondary text-blackPrimary mt-16">
                Delivery
              </h3>

              <div className="mt-4 flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-x-5 gap-y-5 max-[500px]:grid-cols-1 max-[500px]:gap-x-0 max-[500px]:gap-y-5">
                  <InputWithLabel label="Weight (kg)">
                    <SimpleInput
                      type="text"
                      placeholder="Enter a product weight..."
                      value={inputObject.weight}
                      onChange={(e) => {
                        setInputObject({
                          ...inputObject,
                          weight: e.target.value,
                        });
                      }}
                    />
                  </InputWithLabel>
                  <InputWithLabel label="Length (cm)">
                    <SimpleInput
                      type="text"
                      placeholder="Enter a product length..."
                      value={inputObject.length}
                      onChange={(e) => {
                        setInputObject({
                          ...inputObject,
                          length: e.target.value,
                        });
                      }}
                    />
                  </InputWithLabel>
                  <InputWithLabel label="Width (cm)">
                    <SimpleInput
                      type="text"
                      placeholder="Enter a product width..."
                      value={inputObject.width}
                      onChange={(e) => {
                        setInputObject({
                          ...inputObject,
                          width: e.target.value,
                        });
                      }}
                    />
                  </InputWithLabel>
                  <InputWithLabel label="Height (cm)">
                    <SimpleInput
                      type="text"
                      placeholder="Enter a product height..."
                      value={inputObject.height}
                      onChange={(e) => {
                        setInputObject({
                          ...inputObject,
                          height: e.target.value,
                        });
                      }}
                    />
                  </InputWithLabel>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold leading-7 dark:text-whiteSecondary text-blackPrimary mt-16">
                  SEO
                </h3>

                <div className="mt-4 flex flex-col gap-5">
                  <InputWithLabel label="Meta title">
                    <SimpleInput
                      type="text"
                      placeholder="Enter a meta title..."
                      value={inputObject.metaTitle}
                        onChange={(e) =>
                            setInputObject({
                            ...inputObject,
                            metaTitle: e.target.value,
                            })
                        }
                    />
                  </InputWithLabel>

                  <InputWithLabel label="Meta description">
                    <TextAreaInput
                      placeholder="Enter a meta description..."
                      rows={4}
                      cols={50}
                      value={inputObject.metaDescription}
                        onChange={(e) =>
                            setInputObject({
                            ...inputObject,
                            metaDescription: e.target.value,
                            })
                        }
                    />
                  </InputWithLabel>
                </div>
              </div>
            </div>

            

            {/* right div */}
            <div>
              <h3 className="text-2xl font-bold leading-7 dark:text-whiteSecondary text-blackPrimary">
                Product images
              </h3>

              <ImageUpload />
              <div className="flex justify-center gap-x-2 mt-5 flex-wrap">
                <img src='/src/assets/tablet (1).jpg' alt='' className="w-36 h-32"/>
                <img src="/src/assets/tablet (2).jpg" alt="" className="w-36 h-32" />
                <img src='/src/assets/tablet (3).jpg' alt='' className="w-36 h-32"/>
                <img src="/src/assets/tablet (4).jpg" alt="" className="w-36 h-32" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditProduct;
