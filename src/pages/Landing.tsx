import { Sidebar, Stats } from "../components";
import BarChart from "../components/chart/BarChart";
import LineGraph from "../components/chart/LineGraph";
import PieChart from "../components/chart/PieChart";

const Landing = () => {
  return (
    <div className="h-[100vh] border-t border-blackSecondary border-1 flex">
      <Sidebar />
      <div className="bg-blackPrimary w-full pt-6 pl-9">
        <Stats />
        <div className="w-1/2">
          <LineGraph />
        </div>
        <div className="w-1/2">
          <BarChart />
        </div>
        <div className="w-1/2">
          <PieChart />
        </div>
      </div>
    </div>
  );
};
export default Landing;
