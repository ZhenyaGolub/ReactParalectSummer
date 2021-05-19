import React from 'react'
import { useSelector } from 'react-redux'

const Empty = () => {

    const emptyType = useSelector(({ emptyContent }) => emptyContent);

    if(emptyType === 'START'){
        return (
            <div className="empty-wrapper">
                <div className="empty-content">
                    <i className="fas fa-search"></i>
                    <p>Start with searching <br/> a GitHub user</p>
                </div>
            </div>
        )   
    } else {
        return (
            <div className="empty-wrapper">
                <div className="empty-content">
                    <i className="fas fa-user"></i>
                    <p>User not found</p>
                </div>
            </div>
        )
    }
}

export default Empty
