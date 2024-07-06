import { Link } from "react-router-dom";

const WhiteButton = ({ link, text, width, py, textSize, children }: {link: string; text: string; width: string; py:string; textSize: string; children?: React.ReactNode}) => {
  return (
    <Link
      to={link}
      className={`bg-whiteSecondary w-${width} py-${py} text-${textSize} hover:bg-white duration-200 flex items-center justify-center gap-x-2`}
    >
      { children }
      <span className="text-blackPrimary font-semibold">{ text }</span>
    </Link>
  );
};
export default WhiteButton;
