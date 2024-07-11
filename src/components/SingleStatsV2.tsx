import { HiCurrencyDollar } from "react-icons/hi";
import { HiArrowSmallUp } from "react-icons/hi2";

const SingleStatsV2 = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-2 bg-white px-7 py-5 rounded-md">
      {children}
    </div>
  );
};

const StatsCategory = ({
  statsCategory,
  children,
}: {
  statsCategory: string;
  children: React.ReactNode;
}) => {
  return (
    <p className="flex items-center gap-1">
      {/* <HiCurrencyDollar className="text-2xl" />{ */}
      {children}
      <span className="text-xl">{statsCategory}</span>
    </p>
  );
};

const MoneyStats = ({
  moneyAmount,
  children,
}: {
  moneyAmount: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex gap-3">
      <p className="text-3xl font-semibold">${moneyAmount}</p>
      {/* <p className="text-white bg-green-500 w-20 h-10 flex gap-1 items-center justify-center font-semibold">
        <HiArrowSmallUp className="text-blackPrimary text-xl" />{" "}
        <span>12.8%</span>
      </p> */}
      {children}
    </div>
  );
};

const PercentageStats = ({
  isPositive,
  percentage,
}: {
  percentage: string;
  isPositive: boolean;
}) => {
  return (
    <p
      className={
        isPositive
          ? `dark:text-green-500 text-green-600 font-semibold`
          : `dark:text-red-500 text-red-600 font-semibold`
      }
    >
      {isPositive ? "+" : "-"}
      {percentage} than last month
    </p>
  );
};

export default SingleStatsV2;

SingleStatsV2.StatsCategory = StatsCategory;
SingleStatsV2.MoneyStats = MoneyStats;
SingleStatsV2.PercentageStats = PercentageStats;
