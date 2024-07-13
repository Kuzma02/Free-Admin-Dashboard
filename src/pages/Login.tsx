import { FaReact } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { InputWithLabel, SimpleInput, WhiteButton } from "../components";
import { HiLogin } from "react-icons/hi";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";


const Login = () => {
  return (
    <div className="bg-blackPrimary h-[100vh] w-full flex justify-center items-center">
      <div className="w-[500px] h-[750px] bg-gray-900 flex flex-col justify-between items-center py-10 max-sm:w-[320px] max-sm:h-[750px]">
        <div className="flex flex-col items-center gap-10">
          <FaReact className="text-5xl dark:text-whiteSecondary text-blackPrimary hover:rotate-180 hover:duration-1000 hover:ease-in-out cursor-pointer max-sm:text-4xl" />
          <h2 className="text-2xl text-whiteSecondary font-medium max-sm:text-xl">
            Welcome to dashboard!
          </h2>
          <div className="flex gap-5">
            <button className="bg-blackPrimary hover:bg-gray-800 transition-colors w-44 h-12 flex justify-center items-center max-sm:w-32 max-sm:h-10">
              <FaGoogle className="text-2xl text-whiteSecondary max-sm:text-xl" />
            </button>
            <button className="bg-blackPrimary hover:bg-gray-800 transition-colors w-44 h-12 flex justify-center items-center max-sm:w-32 max-sm:h-10">
              <FaGithub className="text-2xl text-whiteSecondary max-sm:text-xl" />
            </button>
          </div>

          <p className="text-gray-400 text-xl max-sm:text-base">OR</p>

          <div className="w-full flex flex-col gap-5">
            <InputWithLabel label="Email">
              <SimpleInput type="email" placeholder="Enter a email..." />
            </InputWithLabel>

            <InputWithLabel label="Password">
              <SimpleInput type="password" placeholder="Enter a password..." />
            </InputWithLabel>
          </div>
          <p className="text-gray-400 text-base hover:text-gray-300 cursor-pointer transition-colors max-sm:text-sm">Forgot password?</p>
          <WhiteButton
                link="/"
                textSize="lg"
                width="full"
                py="2"
                text="Login now"
              >
              </WhiteButton>
              <p className="text-gray-400 text-base hover:text-white cursor-pointer transition-colors flex gap-1 items-center max-sm:text-sm">Not registered yet? <Link to="/register" className="text-whiteSecondary flex gap-1 items-center hover:text-white max-sm:text-sm">Register <FaArrowRight className="mt-[2px]" /></Link></p>
        </div>
      </div>
    </div>
  );
};
export default Login;
