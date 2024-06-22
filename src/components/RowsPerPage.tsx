const RowsPerPage = () => {
  return (
    <div className="flex gap-2 items-center">
      <p className="text-whiteSecondary text-lg font-normal">Rows per page:</p>
      <select
        className="w-24 h-8 bg-blackPrimary border border-gray-600 text-whiteSecondary outline-0 pl-3 pr-8 cursor-pointer hover:border-gray-500"
        name="rows"
        id="rows"
      >
        <option value="10">10</option>
        <option value="20">30</option>
        <option value="30">50</option>
        <option value="40">100</option>
      </select>
    </div>
  );
};
export default RowsPerPage;
