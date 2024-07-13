import { Sidebar, SingleStatsV2, TotalSavings } from "../components";
import {
  HiArrowSmallDown,
  HiCurrencyDollar,
  HiUserGroup,
} from "react-icons/hi2";
import { HiArrowSmallUp } from "react-icons/hi2";
import { HiShoppingCart } from "react-icons/hi2";
import ChartItem from "../components/chart/ChartItem";
import RechartsAreaChart from "../components/chart/RechartsAreaChart";
import RechartsBarChart from "../components/chart/RechartsBarChart";
import RechartsLineChart from "../components/chart/RechartsLineChart";

const Landingv2 = () => {
  return (
    <div className="h-auto border-t dark:border-blackSecondary border-blackSecondary border-1 flex dark:bg-blackPrimary bg-whiteSecondary">
      <Sidebar />
      <div className="dark:bg-blackPrimary bg-whiteSecondary w-full pt-6 pl-9 max-sm:pt-6 max-sm:pl-1">
        <h3 className="text-3xl dark:text-whiteSecondary text-blackPrimary font-bold mb-7 max-sm:text-2xl px-5">
          Overview
        </h3>
        {/* stats */}
        <div className="flex flex-wrap justify-between gap-5 px-5 w-[95%]">
          <SingleStatsV2>
            <SingleStatsV2.StatsCategory statsCategory="Profit">
              <HiCurrencyDollar className="text-2xl" />
            </SingleStatsV2.StatsCategory>
            <SingleStatsV2.MoneyStats moneyAmount="$8650.50">
              <p className="text-white dark:bg-green-700 bg-green-500 w-20 h-10 flex gap-1 items-center justify-center font-semibold">
                <HiArrowSmallUp className="text-blackPrimary text-xl" />{" "}
                <span>12.8%</span>
              </p>
            </SingleStatsV2.MoneyStats>
            <SingleStatsV2.PercentageStats isPositive={true} percentage="25%" />
          </SingleStatsV2>

          <SingleStatsV2>
            <SingleStatsV2.StatsCategory statsCategory="Spendings">
              <HiShoppingCart className="text-2xl" />
            </SingleStatsV2.StatsCategory>
            <SingleStatsV2.MoneyStats moneyAmount="$1590">
              <p className="text-white dark:bg-red-700 bg-red-500 w-20 h-10 flex gap-1 items-center justify-center font-semibold">
                <HiArrowSmallDown className="text-blackPrimary text-xl" />{" "}
                <span>3.3%</span>
              </p>
            </SingleStatsV2.MoneyStats>
            <SingleStatsV2.PercentageStats isPositive={false} percentage="5%" />
          </SingleStatsV2>

          <SingleStatsV2>
            <SingleStatsV2.StatsCategory statsCategory="Revenue">
              <HiCurrencyDollar className="text-2xl" />
            </SingleStatsV2.StatsCategory>
            <SingleStatsV2.MoneyStats moneyAmount="12400.75">
              <p className="text-white dark:bg-green-700 bg-green-500 w-20 h-10 flex gap-1 items-center justify-center font-semibold">
                <HiArrowSmallUp className="text-blackPrimary text-xl" />{" "}
                <span>15.1%</span>
              </p>
            </SingleStatsV2.MoneyStats>
            <SingleStatsV2.PercentageStats
              isPositive={true}
              percentage="15.2%"
            />
          </SingleStatsV2>

          <SingleStatsV2>
            <SingleStatsV2.StatsCategory statsCategory="New Users">
              <HiUserGroup className="text-2xl" />
            </SingleStatsV2.StatsCategory>
            <SingleStatsV2.MoneyStats moneyAmount="450">
              <p className="text-white dark:bg-green-700 bg-green-500 w-20 h-10 flex gap-1 items-center justify-center font-semibold">
                <HiArrowSmallUp className="text-blackPrimary text-xl" />{" "}
                <span>3.8%</span>
              </p>
            </SingleStatsV2.MoneyStats>
            <SingleStatsV2.PercentageStats
              isPositive={true}
              percentage="9.8%"
            />
          </SingleStatsV2>
        </div>
        <div className="w-[95%] px-5 mt-10 max-md:w-[90%] max-[400px]:w-[95%] dark:bg-black bg-whiteSecondary">

        <ChartItem title="Revenue VS Profit">
          <RechartsBarChart />
        </ChartItem>

        <TotalSavings isPositive={true} percentage="25%" />
        </div>
      </div>
    </div>
  );
};
export default Landingv2;
