import { Sidebar, Stats } from "../components";
import LineGraph from "../components/chart/LineGraph";

const Landing = () => {
  return (
    <div className="h-[100vh] border-t border-blackSecondary border-1 flex">
      <Sidebar />
      <div className="bg-blackPrimary w-full pt-6 pl-9 max-sm:pt-6 max-sm:pl-5">
        <Stats />
        <div className="w-1/2 mt-10">
          <h3 className="text-3xl text-white font-bold mb-7">Orders Overview</h3>
          <LineGraph />
        </div>
      </div>
    </div>
  );
};
export default Landing;
