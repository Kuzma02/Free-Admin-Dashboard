import SingleStats from "./SingleStats";

const Stats = () => {
  return (
    <div>
      <h2 className="text-3xl text-white font-bold mb-7">Balance Overview</h2>
      <div className="flex justify-start gap-20">
        <SingleStats title="New Orders" value="56" />
        <SingleStats title="Sales" value="$51,393" />
        <SingleStats title="Revenue" value="$99,825" />
      </div>
    </div>
  );
};
export default Stats;
