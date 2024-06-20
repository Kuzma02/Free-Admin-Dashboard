import SingleActivity from "./SingleActivity";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

const ConversionRateBySource = () => {
  return (
    <div>
      <h4 className="text-2xl text-white font-bold mb-7 max-[440px]:text-center">
        Conversion rate by source
      </h4>
      <div className="w-full flex flex-col gap-y-4">
        <SingleActivity
          mainTitle="SEO"
          totalVisitors="2500"
          totalMoney="$150,00"
          percent="CR: 15%"
        >
          <span className="text-black text-xl font-semibold">SEO</span>
        </SingleActivity>
        <SingleActivity
          mainTitle="Facebook"
          totalVisitors="1,200"
          totalMoney="$300,00"
          percent="CR: +5%"
        >
          <FaFacebook className="text-blackPrimary text-3xl" />
        </SingleActivity>
        <SingleActivity
          mainTitle="Instagram"
          totalVisitors="8,400"
          totalMoney="$2100,50"
          percent="CRO: 2%"
        >
          <FaInstagram className="text-blackPrimary text-3xl" />
        </SingleActivity>
        <SingleActivity
          mainTitle="Twitter"
          totalVisitors="32,000"
          totalMoney="$8400,75"
          percent="CRO: 25%"
        >
          <FaXTwitter className="text-blackPrimary text-3xl" />
        </SingleActivity>
        <SingleActivity
          mainTitle="Pinterest"
          totalVisitors="384,000"
          totalMoney="$100,200"
          percent="CRO: 20%"
        >
          <FaPinterest className="text-blackPrimary text-3xl" />
        </SingleActivity>
        <SingleActivity
          mainTitle="YouTube"
          totalVisitors="2,384,000"
          totalMoney="$840,200"
          percent="CRO: 34%"
        >
          <FaYoutube className="text-blackPrimary text-3xl" />
        </SingleActivity>
      </div>
    </div>
  );
};
export default ConversionRateBySource;
