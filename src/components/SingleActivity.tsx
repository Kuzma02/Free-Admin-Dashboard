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
      <div className="flex justify-between items-center w-full gap-x-16 max-[440px]:flex-col max-[440px]:gap-1 max-[440px]:items-start max-[440px]:w-44">
        <div className="flex items-center gap-x-4 max-[440px]:flex-col max-[440px]:gap-1">
          <div className="bg-whiteSecondary flex justify-center items-center w-12 h-12">
            {children}
          </div>
          <div>
            <p className="text-whiteSecondary text-xl font-bold max-[440px]:text-center">{mainTitle}</p>
            <p className="text-whiteSecondary text-lg font-medium max-[440px]:text-center">
              Total: {totalVisitors} visitors
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-y-1 items-center max-[440px]:w-full">
          <p className="text-whiteSecondary font-bold text-xl max-[440px]:text-center">{totalMoney}</p>
          <p className="text-lg text-whiteSecondary font-medium max-[440px]:text-center">{percent}</p>
        </div>
      </div>
    </div>
  );
};
export default SingleActivity;
