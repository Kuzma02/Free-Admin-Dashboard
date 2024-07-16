// *********************
// Role of the component: Register component that displays the registration form with email, password, and confirm password fields and buttons for registration with Google and GitHub
// Name of the component: RegisterComponent.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <RegisterComponent />
// Input parameters: no input parameters
// Output: RegisterComponent component that contains input fields for email, password, and confirm password, and buttons for registration with Google and GitHub
// *********************

import { FaReact } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import {
  InputWithLabel,
  SimpleInput,
  ThirdPartyAuthButton,
  WhiteButton,
} from "../components";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";

const RegisterComponent = () => {
    const [ email, setEmail ] = useState("john@email.com");
    const [ password, setPassword ] = useState("pass1234567890");
    const [ confirmPassword, setConfirmPassword ] = useState("pass1234567890");
  return (
    <div className="w-[500px] h-[800px] dark:bg-gray-900 bg-white flex flex-col justify-between items-center py-10 max-sm:w-[400px] max-[420px]:w-[320px] max-sm:h-[750px]">
      <div className="flex flex-col items-center gap-10">
        <FaReact className="text-5xl dark:text-whiteSecondary text-blackPrimary hover:rotate-180 hover:duration-1000 hover:ease-in-out cursor-pointer max-sm:text-4xl" />
        <h2 className="text-2xl dark:text-whiteSecondary text-blackPrimary font-medium max-sm:text-xl">
          Register on the dashboard!
        </h2>
        <div className="flex gap-5">
          <ThirdPartyAuthButton>
            {" "}
            <FaGoogle className="text-2xl max-sm:text-xl" />
          </ThirdPartyAuthButton>
          <ThirdPartyAuthButton>
            <FaGithub className="text-2xl max-sm:text-xl" />
          </ThirdPartyAuthButton>
        </div>

        <p className="dark:text-gray-400 text-gray-700 text-xl max-sm:text-base">OR</p>

        <div className="w-full flex flex-col gap-5">
          <InputWithLabel label="Email">
            <SimpleInput type="email" placeholder="Enter a email..." value={email} onChange={(e) => setEmail(e.target.value)} />
          </InputWithLabel>

          <InputWithLabel label="Password">
            <SimpleInput type="password" placeholder="Enter a password..." value={password} onChange={(e) => setPassword(e.target.value)} />
          </InputWithLabel>

          <InputWithLabel label="Confirm password">
            <SimpleInput type="password" placeholder="Confirm a password..." value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </InputWithLabel>
        </div>

        <WhiteButton
          link="/login"
          textSize="lg"
          width="full"
          py="2"
          text="Register now"
        ></WhiteButton>
        <p className="dark:text-gray-400 text-gray-700 text-base cursor-pointer transition-colors flex gap-1 items-center max-sm:text-sm">
          Have an account?{" "}
          <Link
            to="/login"
            className="dark:text-whiteSecondary text-blackPrimary hover:text-black flex gap-1 items-center dark:hover:text-white max-sm:text-sm hover:underline"
          >
            Login <FaArrowRight className="mt-[2px]" />
          </Link>
        </p>
      </div>
    </div>
  )
}
export default RegisterComponent