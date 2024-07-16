// *********************
// Role of the component: Stats component that displays the balance overview with the new orders, sales, and revenue
// Name of the component: Stats.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <Stats />
// Input parameters: no input parameters
// Output: Stats component that displays the balance overview with the new orders, sales, and revenue
// *********************

import SingleStats from "./SingleStats";

const Stats = () => {
  return (
    <div>
      <h2 className="text-3xl text-whiteSecondary font-bold mb-7">Balance Overview</h2>
      <div className="flex justify-start gap-x-20 max-[1800px]:flex-wrap gap-y-10 mr-1 max-[1352px]:gap-x-10 max-[1050px]:mr-5">
        <SingleStats title="New Orders" value="56" />
        <SingleStats title="Sales" value="$51,393" />
        <SingleStats title="Revenue" value="$99,825" />
      </div>
    </div>
  );
};
export default Stats;
