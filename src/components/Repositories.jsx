import React from 'react'
import Pagination from './Pagination';

const Repositories = () => {
    return (
        <div className="main__user-repositories">
            <h1 className="main__user-repositories-title">Repositories (249)</h1>
            <div className="main__user-repositories-list">
                <div className="main__user-repositories-item">
                    <a href="#" className="main__user-repositories-name">react-hot-loader</a>
                    <p className="main__user-repositories-description">Tweak React components in real time. Deprecated: use Fast Refresh instead.</p>
                </div>
            </div>
            <Pagination/>
        </div>
    )
}

export default Repositories
