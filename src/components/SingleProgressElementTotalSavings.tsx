const SingleProgressElementTotalSavings = ({
  title,
  totalMoney,
  percentSaved,
}: {
  title: string;
  totalMoney: number;
  percentSaved: number;
}) => {
    console.log(title, totalMoney, percentSaved);
    
    const percentAmount = totalMoney * percentSaved / 100;
  return (
    <div>
      <div className="flex justify-between my-3">
        <h4 className="text-2xl font-semibold dark:text-whiteSecondary text-blackPrimary max-sm:text-xl max-[450px]:text-lg">
          { title }
        </h4>
        <p className="dark:text-whiteSecondary text-blackPrimary text-2xl font-semibold max-sm:text-lg  max-[450px]:text-base">
          ${percentAmount} / ${totalMoney}
        </p>
      </div>
      <div className="bg-white w-full h-5">
        <div>
          <div style={{ width: `${percentSaved}%` }} className="dark:bg-green-600 bg-green-500 h-5"></div>
        </div>
      </div>
    </div>
  );
};
export default SingleProgressElementTotalSavings;
