const Welcome = () => {
  return (
    <div className="flex flex-col gap-y-4 py-7">
      <h3 className="text-white text-3xl font-bold">
        Good evening, Sherwood 😀
      </h3>
      <p className="text-xl text-whiteSecondary">
        Here is the complete overview of your eCommerce store. Analyze the
        statistics and make smart decisions.
      </p>
      <button className="bg-whiteSecondary text-blackPrimary w-60 py-3 font-bold text-lg hover:bg-white duration-200">
        Analyze the statistics
      </button>
    </div>
  );
};
export default Welcome;
