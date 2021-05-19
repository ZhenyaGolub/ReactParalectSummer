import React from 'react'

function Pagination() {
    return (
        <div className="main__user-repositories-pagination">
            <div className="main__user-repositories-pagination-interface">
                <span className="page-list">5-8 of 249 items</span>
                <div className="pages">
                    <i className="fas fa-chevron-left"></i>
                    <a href="#" className="page">1</a>
                    <a href="#" className="page">2</a>
                    <a href="#" className="page">...</a>
                    <a href="#" className="page">10</a>
                    <i className="fas fa-chevron-right"></i>
                </div>
            </div>
        </div>
    )
}

export default Pagination
