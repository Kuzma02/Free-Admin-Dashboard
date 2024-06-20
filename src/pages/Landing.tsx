import { ActivitiesByDevices, Sidebar, SingleActivity, Stats, Welcome } from "../components";
import { LineGraph } from "../components/chart";


const Landing = () => {
  return (
    <div className="h-auto border-t border-blackSecondary border-1 flex">
      <Sidebar />
      <div className="bg-blackPrimary w-full pt-6 pl-9 max-sm:pt-6 max-sm:pl-5 flex flex-wrap gap-x-10">
        <div>
          <div>
            <Welcome />
            <Stats />
          </div>
          <div className="w-[66%] mt-10">
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
            <SingleActivity mainTitle="United States" totalVisitors="5,200" totalMoney="$2300,20" percent="+20%"><img src="/src/assets/united-states.png" /></SingleActivity>
            <SingleActivity mainTitle="United Kingdom" totalVisitors="3,100" totalMoney="$1000,00" percent="+15%"><img src="/src/assets/united-kingdom.png" /></SingleActivity> 
            <SingleActivity mainTitle="China" totalVisitors="13,800" totalMoney="$8000,40" percent="+50%"><img src="/src/assets/china.png" /></SingleActivity> 
            <SingleActivity mainTitle="Canada" totalVisitors="3,700" totalMoney="$9000,34" percent="+45%"><img src="/src/assets/canada.png" /></SingleActivity> 
            <SingleActivity mainTitle="Germany" totalVisitors="8,100" totalMoney="$4000,00" percent="-5%"><img src="/src/assets/germany.png" /></SingleActivity> 
            <SingleActivity mainTitle="France" totalVisitors="900" totalMoney="$500,00" percent="-25%"><img src="/src/assets/france.png" /></SingleActivity> 
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
