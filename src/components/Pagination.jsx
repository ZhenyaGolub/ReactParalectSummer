import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';

function Pagination({ repositoriesAmount }) {

    const [currentPage, setCurrentPage] = useState(0);

    const PER_PAGE = 4;

    const offset = currentPage * 4;

    const pageCount = Math.ceil(repositoriesAmount / PER_PAGE);

    return (
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
    )
}

export default Pagination
