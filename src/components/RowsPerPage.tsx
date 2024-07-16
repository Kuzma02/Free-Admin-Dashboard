// *********************
// Role of the component: Rows per page component that displays the number of rows per page
// Name of the component: RowsPerPage.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <RowsPerPage />
// Input parameters: no input parameters
// Output: RowsPerPage component that displays the number of rows per page
// *********************

const RowsPerPage = () => {
  return (
    <div className="flex gap-2 items-center">
      <p className="dark:text-whiteSecondary text-blackPrimary text-lg font-normal">Rows per page:</p>
      <select
        className="w-24 h-8 dark:bg-blackPrimary bg-whiteSecondary border border-gray-600 dark:text-whiteSecondary text-blackPrimary outline-0 pl-3 pr-8 cursor-pointer hover:border-gray-500"
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
