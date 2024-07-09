import { AiOutlineSave } from "react-icons/ai";
import { HiOutlineSave } from "react-icons/hi";
import {
  ImageUpload,
  InputWithLabel,
  Sidebar,
  SimpleInput,
  WhiteButton,
} from "../components";
import SelectInput from "../components/SelectInput";
import { roles } from "../utils/data";

const CreateUser = () => {
  return (
    <div className="h-auto border-t border-blackSecondary border-1 flex dark:bg-blackPrimary bg-whiteSecondary">
      <Sidebar />
      <div className="dark:bg-blackPrimary bg-whiteSecondary w-full ">
        <div className="dark:bg-blackPrimary bg-whiteSecondary py-10">
          <div className="px-4 sm:px-6 lg:px-8 pb-8 border-b border-gray-800 flex justify-between items-center max-sm:flex-col max-sm:gap-5">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-bold leading-7 dark:text-whiteSecondary text-blackPrimary">
                Add new user
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
                link="/users/create-user"
                textSize="lg"
                width="48"
                py="2"
                text="Publish user"
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
                User information
              </h3>

              <div className="mt-4 flex flex-col gap-5">
                <InputWithLabel label="Name">
                  <SimpleInput
                    type="text"
                    placeholder="Enter a name..."
                  />
                </InputWithLabel>

                <InputWithLabel label="Lastname">
                  <SimpleInput
                    type="text"
                    placeholder="Enter a lastname..."
                  />
                </InputWithLabel>

                <InputWithLabel label="Email">
                  <SimpleInput
                    type="text"
                    placeholder="Enter a email ..."
                  />
                </InputWithLabel>

                <InputWithLabel label="Password">
                  <SimpleInput
                    type="password"
                    placeholder="Enter a password..."
                  />
                </InputWithLabel>

                <InputWithLabel label="Confirm password">
                  <SimpleInput
                    type="password"
                    placeholder="Enter a confirm password..."
                  />
                </InputWithLabel>

                <InputWithLabel label="Select role">
                  <SelectInput selectList={roles} />
                </InputWithLabel>
              </div>
            </div>

            {/* right div */}
            <div>
              <h3 className="text-2xl font-bold leading-7 dark:text-whiteSecondary text-blackPrimary">
                Upload user image
              </h3>
              <ImageUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateUser;
