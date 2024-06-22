import {
  ActivitiesByCountry,
  ActivitiesByDevices,
  ActivityByTime,
  ConversionRateBySource,
  Sidebar,
  Stats,
  Welcome,
} from "../components";
import { BarChart, LineGraph, PieChart } from "../components/chart";

const Landing = () => {
  return (
    <div className="h-auto border-t border-blackSecondary border-1 flex">
      <Sidebar />
      <div className="bg-blackPrimary w-full pt-6 pl-9 max-sm:pt-6 max-sm:pl-5 flex max-[1700px]:flex-wrap gap-x-10 max-[400px]:pl-2">
        <div>
          <div>
            <Welcome />
            <Stats />
          </div>
          <div className="sm:w-[66%] mt-10 max-sm:w-[80%]">
            <h3 className="text-3xl text-whiteSecondary font-bold mb-7 max-sm:text-2xl">
              Traffic Overview
            </h3>
            <LineGraph />
          </div>
          <div className="sm:w-[66%] mt-10 max-sm:w-[80%]">
            <h3 className="text-3xl text-whiteSecondary font-bold mb-7 max-sm:text-2xl">
              Orders Overview
            </h3>
            <BarChart />
          </div>
          <div className="sm:w-[50%] mt-10 max-sm:w-[70%]">
            <h3 className="text-3xl text-whiteSecondary font-bold mb-7 max-sm:text-2xl">
              Source Overview
            </h3>
            <PieChart />
          </div>
        </div>
        <div className="lg:grid grid-cols-2 max-[2300px]:grid-cols-1 gap-x-20 gap-y-8 lg:px-5 max-[1700px]:grid-cols-2 max-[1700px]:mt-10 max-lg:w-full max-lg:pr-5 max-lg:flex max-lg:flex-col max-lg:gap-y-5">
          <ActivitiesByDevices />
          <ActivitiesByCountry />

          <ActivityByTime />
          <ConversionRateBySource />
        </div>
      </div>
    </div>
  );
};
export default Landing;
