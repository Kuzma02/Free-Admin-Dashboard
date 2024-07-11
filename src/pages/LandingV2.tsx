import { Sidebar, SingleStatsV2 } from "../components";
import { HiCurrencyDollar } from "react-icons/hi2";
import { HiArrowSmallUp } from "react-icons/hi2";

const Landingv2 = () => {
  return (
    <div className="h-auto border-t dark:border-blackSecondary border-blackSecondary border-1 flex dark:bg-blackPrimary bg-whiteSecondary">
      <Sidebar />
      <div className="dark:bg-blackPrimary bg-whiteSecondary w-full pt-6 pl-9 max-sm:pt-6 max-sm:pl-5">
        {/* stats */}
        <div className="flex justify-between px-5">
          <SingleStatsV2>
            <SingleStatsV2.StatsCategory statsCategory="Earnings">
              <HiCurrencyDollar className="text-2xl" />
            </SingleStatsV2.StatsCategory>
            <SingleStatsV2.MoneyStats moneyAmount="8650.50">
              <p className="text-white bg-green-500 w-20 h-10 flex gap-1 items-center justify-center font-semibold">
                <HiArrowSmallUp className="text-blackPrimary text-xl" />{" "}
                <span>12.8%</span>
              </p>
            </SingleStatsV2.MoneyStats>
            <SingleStatsV2.PercentageStats isPositive={true} percentage="25%" />
          </SingleStatsV2>
        </div>
      </div>
    </div>
  );
};
export default Landingv2;
