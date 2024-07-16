// *********************
// Role of the component: White button component that displays the white button with the text
// Name of the component: WhiteButton.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <WhiteButton link="/" textSize="lg" width="full" py="2" text="Login now"></WhiteButton>
// Input parameters: { link: string; text: string; width: string; py:string; textSize: string; children?: React.ReactNode }
// Output: White button component that displays the white button with the text
// *********************

import { Link } from "react-router-dom";

const WhiteButton = ({
  link,
  text,
  width,
  py,
  textSize,
  children,
}: {
  link: string;
  text: string;
  width: string;
  py: string;
  textSize: string;
  children?: React.ReactNode;
}) => {
  return (
    <Link
      to={link}
      className={`dark:bg-whiteSecondary bg-blackPrimary w-${width} py-${py} text-${textSize} dark:hover:bg-white hover:bg-gray-800 bg-blackPrimary duration-200 flex items-center justify-center gap-x-2`}
    >
      {children}
      <span className="dark:text-blackPrimary text-whiteSecondary font-semibold">
        {text}
      </span>
    </Link>
  );
};
export default WhiteButton;
