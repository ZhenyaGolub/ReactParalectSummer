import React, { useState } from 'react'
import Pagination from './Pagination';

const Repositories = ({ repositories }) => {

    const { totalAmount, list } = repositories;

    const [currentPage, setCurrentPage] = useState(0);

    const PER_PAGE = 4;

    const offset = currentPage * 4;

    const pageCount = Math.ceil(totalAmount / PER_PAGE);

    const changePage = ({ selected }) => {
        setCurrentPage(selected);
    }

    const currentPageRepositories = list.slice(offset, offset + PER_PAGE).map(repository => {
        return (
            <div key={repository.id} className="main__user-repositories-item">
                <a href={repository.link} target="_blank" className="main__user-repositories-name">{repository.name}</a>
                <p className="main__user-repositories-description">{repository.description}</p>
            </div>
        )
    })

    if(!list.length){
        return (
            <div className="main__user-repositories empty-repositories">
            <div className="empty-repositories-content">
                    <i className="fas fa-archive"></i>
                    <p>Repository list is empty</p>
                </div>
        </div>
        )
    } else {
        return (
            <div className="main__user-repositories">
                <h1 className="main__user-repositories-title">Repositories ({totalAmount})</h1>
                <div className="main__user-repositories-list">
                    {
                        currentPageRepositories
                    } 
                </div>
                <Pagination 
                    pageCount={pageCount} 
                    changePage={changePage} 
                    repositoriesAmout={totalAmount} 
                    firstCurrentPageRepository={offset + 1} 
                    lastCurrentPageRepository={offset + currentPageRepositories.length}
                />
            </div>
        )
    }
}

export default Repositories
