import React from 'react'
import Pagination from './Pagination';

const Repositories = ({ repositories }) => {

    const { totalAmount, list } = repositories;

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
                        list.map(repository => {
                            return (
                                <div key={repository.id} className="main__user-repositories-item">
                                    <a href={repository.link} className="main__user-repositories-name">{repository.name}</a>
                                    <p className="main__user-repositories-description">{repository.description}</p>
                                </div>
                            )
                        })
                    } 
                </div>
                <Pagination repositoriesAmount={totalAmount}/>
            </div>
        )
    }
}

export default Repositories
