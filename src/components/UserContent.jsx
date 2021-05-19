import React from 'react'

const UserContent = ({user}) => {
    
    const { login, name, followers, following, imageURL, url } = user;

    return (
        <div className="main__user-information">
            <div className="main__user-model">
                <div className="main__user-avatar">
                    <img src={imageURL} alt="Avatar"/>
                </div>
                <div className="main__user-features">
                    <h2 className="main__user-login">{name}</h2>
                    <a href={url} className="main__user-name">{login}</a>
                    <div className="main__user-follow">
                        <a href={`https://github.com/${login}?tab=followers`} className="main__user-followers"><i className="fas fa-user-friends"></i>{followers} followers</a>
                        <a href={`https://github.com/${login}?tab=following`} className="main__user-following"><i className="fas fa-user"></i>{following} following</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserContent
