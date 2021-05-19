import React from 'react'

const User = () => {
    return (
        <div class="main__user-information">
            <div class="main__user-model">
                <div class="main__user-avatar">
                    <img src="./images/Avatar.png" alt="Avatar"/>
                </div>
                <div class="main__user-features">
                    <h2 class="main__user-login">Dan Abramov</h2>
                    <a href="#" class="main__user-name">gaearon</a>
                    <div class="main__user-follow">
                        <a href="#" class="main__user-followers"><i class="fas fa-user-friends"></i>65.8k followers</a>
                        <a href="#" class="main__user-following"><i class="fas fa-user"></i>171 following</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User
