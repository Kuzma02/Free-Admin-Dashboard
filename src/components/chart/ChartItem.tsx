const ChartItem = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 border border-slate-900 dark:bg-slate-900/50 bg-whiteSecondary rounded-xl h-[400px] mt-5">
      <h3 className="text-2xl font-semibold dark:text-whiteSecondary text-blackPrimary mb-4">{title}</h3>
      {children}
    </div>
  );
};
export default ChartItem;
