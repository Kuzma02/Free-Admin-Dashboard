import { ActivitiesByDevices, Sidebar, SingleActivity, Stats, Welcome } from "../components";
import { LineGraph } from "../components/chart";


const Landing = () => {
  return (
    <div className="h-full border-t border-blackSecondary border-1 flex">
      <Sidebar />
      <div className="bg-blackPrimary w-full pt-6 pl-9 max-sm:pt-6 max-sm:pl-5 flex flex-wrap gap-x-10">
        <div>
          <div>
            <Welcome />
            <Stats />
          </div>
          <div className="w-1/2 mt-10">
            <h3 className="text-3xl text-white font-bold mb-7">
              Orders Overview
            </h3>
            <LineGraph />
          </div>
        </div>
        <ActivitiesByDevices />
        <div className="activity-main">
          <h4 className="text-2xl text-white font-bold mb-7">Activity by country</h4>
          <div className="w-full flex flex-col gap-y-4">
            <SingleActivity mainTitle="United States" totalVisitors="5,200" totalMoney="$2300,20" percent="+20%">🇺🇸</SingleActivity>
            <SingleActivity mainTitle="United States" totalVisitors="5,200" totalMoney="$2300,20" percent="+20%"><h2>Hello</h2></SingleActivity> 
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
