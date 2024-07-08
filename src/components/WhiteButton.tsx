import { Link } from "react-router-dom";

const WhiteButton = ({ link, text, width, py, textSize, children }: {link: string; text: string; width: string; py:string; textSize: string; children?: React.ReactNode}) => {
  return (
    <Link
      to={link}
      className={`dark:bg-whiteSecondary bg-blackPrimary w-${width} py-${py} text-${textSize} dark:hover:bg-white hover:bg-gray-800 bg-blackPrimary duration-200 flex items-center justify-center gap-x-2`}
    >
      { children }
      <span className="dark:text-blackPrimary text-whiteSecondary font-semibold">{ text }</span>
    </Link>
  );
};
export default WhiteButton;
