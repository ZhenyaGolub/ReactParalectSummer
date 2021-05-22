import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';

function Pagination({ pageCount, changePage, repositoriesAmout, firstCurrentPageRepository, lastCurrentPageRepository }) {
    return (
      <div className="pagination-wrapper">
        <span className="pagination-information">{firstCurrentPageRepository}-{lastCurrentPageRepository} of {repositoriesAmout} items</span>
        <ReactPaginate
          previousLabel={<i className="fas fa-chevron-left"></i>}
          nextLabel={<i className="fas fa-chevron-right"></i>}
          breakLabel={'...'}
          breakClassName={'break-me'}
          disabledClassName={'disabled'}
          pageCount={pageCount}
          onPageChange={changePage}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
        </div>
    )
}

export default Pagination
