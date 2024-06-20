interface ISingleActivityProps {
  children: React.ReactNode;
  mainTitle: string;
  totalVisitors: string;
  totalMoney: string;
  percent: string;
}

const SingleActivity = ({
  children,
  mainTitle,
  totalVisitors,
  totalMoney,
  percent,
}: ISingleActivityProps) => {
  return (
    <div>
      <div className="flex justify-between items-center w-full gap-x-16 max-[440px]:flex-col max-[440px]:gap-1">
        <div className="flex items-center gap-x-4 max-[440px]:flex-col max-[440px]:gap-1">
          <div className="bg-whiteSecondary flex justify-center items-center w-12 h-12 rounded-lg">
            {children}
          </div>
          <div>
            <p className="text-white text-xl font-bold max-[440px]:text-center">{mainTitle}</p>
            <p className="text-whiteSecondary text-lg font-medium max-[440px]:text-center">
              Total: {totalVisitors} visitors
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-y-1 items-center">
          <p className="text-white font-bold text-xl">{totalMoney}</p>
          <p className="text-lg text-whiteSecondary font-medium">{percent}</p>
        </div>
      </div>
    </div>
  );
};
export default SingleActivity;
