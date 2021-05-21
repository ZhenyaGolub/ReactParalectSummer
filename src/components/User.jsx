import React from 'react'
import UserContent from './UserContent'
import Repositories from './Repositories'
import { useSelector } from 'react-redux'

const User = ({user}) => {
    
    return (
        <main className="main">
            <div className="container">
                <div className="main__user">
                    <UserContent user={user}/>
                    <Repositories repositories={user ? user.repositories : {}}/>
                </div>
            </div>
        </main>
    )
}

export default User
