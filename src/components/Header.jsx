import React from 'react'

const Header = () => {
    return (
        <header className="header">
        <div className="container">
            <div className="header__inner">
                <div className="header__logo">
                    <a href="https://github.com/">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
                <div className="header__search">
                    <i className="fas fa-search"></i>
                    <input type="search" className="header__search-input" placeholder="Enter GitHub username"/>
                </div>
            </div>
        </div>
    </header>
    )
}

export default Header
