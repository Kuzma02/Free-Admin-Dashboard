import { useState } from 'react';

const Pagination = () => {
    const totalPages = 10; // Total number of pages
    const [currentPage, setCurrentPage] = useState(1);
  
    // Calculate the range of page numbers to display
    let startPage = currentPage - 1;
    if (startPage <= 0) startPage = 1;
    let endPage = startPage + 2;
    if (endPage > totalPages) {
        endPage = totalPages;
        startPage = totalPages - 2 > 0 ? totalPages - 2 : 1;
    }
  
    const pageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
  
    return (
      <div className="flex gap-2 items-center">
        <button
          className="bg-blackPrimary border border-gray-600 text-whiteSecondary py-1 px-3 hover:border-gray-500"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {pageNumbers.map(number => (
          <button
            key={number}
            className={`bg-blackPrimary border border-gray-600 text-whiteSecondary py-1 px-3 hover:border-gray-500 ${currentPage === number ? 'bg-whiteSecondary !text-blackPrimary' : ''}`}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </button>
        ))}
        <button
          className="bg-blackPrimary border border-gray-600 text-whiteSecondary py-1 px-3 hover:border-gray-500"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    );
};
  
export default Pagination;