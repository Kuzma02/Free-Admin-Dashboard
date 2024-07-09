import { HiOutlineSave } from "react-icons/hi";
import {
  ImageUpload,
  InputWithLabel,
  Sidebar,
  SimpleInput,
  TextAreaInput,
} from "../components";
import SelectInput from "../components/SelectInput";
import { selectList } from "../utils/data";
import { AiOutlineSave } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const EditCategory = () => {
  const [inputObject, setInputObject] = useState({
    title: "PC",
    description: "This is a category for all computers.",
    slug: "pc",
    parentCategory: "",
    metaTitle: "PC category",
    metaDescription: "This is a category for all computers.",
  });

  return (
    <div className="h-auto border-t border-blackSecondary border-1 flex dark:bg-blackPrimary bg-whiteSecondary">
      <Sidebar />
      <div className="dark:bg-blackPrimary bg-whiteSecondary w-full ">
        <div className="dark:bg-blackPrimary bg-whiteSecondary py-10">
          <div className="px-4 sm:px-6 lg:px-8 pb-8 border-b border-gray-800 flex justify-between items-center max-sm:flex-col max-sm:gap-5">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-bold leading-7 dark:text-whiteSecondary text-blackPrimary">
                Edit category
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
                to="/categories/add-category"
                className="dark:bg-whiteSecondary bg-blackPrimary w-48 py-2 text-lg dark:hover:bg-white hover:bg-blackSecondary duration-200 flex items-center justify-center gap-x-2"
              >
                <HiOutlineSave className="dark:text-blackPrimary text-whiteSecondary text-xl" />
                <span className="dark:text-blackPrimary text-whiteSecondary font-semibold">
                  Update category
                </span>
              </Link>
            </div>
          </div>

          {/* Add Category section here  */}
          <div className="px-4 sm:px-6 lg:px-8 pb-8 pt-8 grid grid-cols-2 gap-x-10 max-xl:grid-cols-1 max-xl:gap-y-10">
            {/* left div */}
            <div>
              <h3 className="text-2xl font-bold leading-7 dark:text-whiteSecondary text-blackPrimary">
                Basic information
              </h3>

              <div className="mt-4 flex flex-col gap-5">
                <InputWithLabel label="Category title">
                  <SimpleInput
                    type="text"
                    placeholder="Enter a category title..."
                    value={inputObject.title}
                    onChange={(e) =>
                      setInputObject({ ...inputObject, title: e.target.value })
                    }
                  />
                </InputWithLabel>

                <InputWithLabel label="Category description">
                  <TextAreaInput
                    placeholder="Enter a category description..."
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

                <InputWithLabel label="Category slug">
                  <SimpleInput
                    type="text"
                    placeholder="Enter a category slug..."
                    value={inputObject.slug}
                    onChange={(e) =>
                      setInputObject({ ...inputObject, slug: e.target.value })
                    }
                  />
                </InputWithLabel>

                <InputWithLabel label="Parent category (optional)">
                  <SelectInput
                    selectList={selectList}
                    value={inputObject.parentCategory}
                    onChange={(e) =>
                      setInputObject({
                        ...inputObject,
                        parentCategory: e.target.value,
                      })
                    }
                  />
                </InputWithLabel>
              </div>
              <h3 className="text-2xl font-bold leading-7 dark:text-whiteSecondary text-blackSecondary mt-16">
                SEO
              </h3>
              <div className="mt-4 flex flex-col gap-5">
                <InputWithLabel label="Meta title">
                  <SimpleInput
                    type="text"
                    placeholder="Enter a meta title..."
                    value={inputObject.metaTitle}
                    onChange={(e) =>
                      setInputObject({ ...inputObject, title: e.target.value })
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
                        description: e.target.value,
                      })
                    }
                  />
                </InputWithLabel>
              </div>
            </div>

            {/* right div */}
            <div>
              <h3 className="text-2xl font-bold leading-7 dark:text-whiteSecondary text-blackPrimary">
                Category image
              </h3>

              <ImageUpload />

              <div className="flex justify-center gap-x-2 mt-5 flex-wrap">
                <img
                  src="/src/assets/tablet (1).jpg"
                  alt=""
                  className="w-36 h-32"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditCategory;
