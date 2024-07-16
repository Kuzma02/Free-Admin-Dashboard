// *********************
// Role of the component: Total savings component that displays the total savings and the percentage of savings compared to the last month
// Name of the component: TotalSavings.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <TotalSavings isPositive={true} percentage="25%" />
// Input parameters: { isPositive: boolean, percentage: string }
// Output: Total savings component that displays the total savings and the percentage of savings compared to the last month
// *********************

import SingleProgressElementTotalSavings from "./SingleProgressElementTotalSavings";

const TotalSavings = ({
  isPositive,
  percentage,
}: {
  percentage: string;
  isPositive: boolean;
}) => {
  return (
    <div className="dark:bg-gray-900 bg-whiteSecondary border border-blackPrimary px-5 py-3 mt-5">
      <div className="flex flex-col gap-1">
        <h3 className="text-2xl font-semibold dark:text-whiteSecondary text-blackPrimary max-sm:text-xl max-[450px]:text-lg">
          Total Savings
        </h3>
        <p className="text-6xl font-bold dark:text-whiteSecondary text-blackPrimary max-sm:text-5xl max-[450px]:text-4xl">
          $565.35
        </p>
        <p
          className={
            isPositive
              ? `dark:text-green-600 text-green-500 font-semibold text-xl  max-sm:text-lg`
              : `dark:text-red-600 text-red-500 font-semibold text-xl  max-sm:text-lg`
          }
        >
          {isPositive ? "+" : "-"}
          {percentage} than last month
        </p>
        <div className="mt-3 border-t border-gray-600">
          <SingleProgressElementTotalSavings
            title="Education"
            totalMoney={300}
            percentSaved={50}
          />
          <SingleProgressElementTotalSavings
            title="Health"
            totalMoney={150}
            percentSaved={70}
          />
          <SingleProgressElementTotalSavings
            title="Entertainment"
            totalMoney={160}
            percentSaved={30}
          />
          <SingleProgressElementTotalSavings
            title="Food"
            totalMoney={600}
            percentSaved={20}
          />
        </div>
      </div>
    </div>
  );
};
export default TotalSavings;
