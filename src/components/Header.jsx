import React, { useRef, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux';

import { changeEmptyContent, getUser } from '../redux/actions';
import { createUserModel } from '../utils';

const Header = () => {

    const dispatch = useDispatch()
    const [username, setUsername] = useState('');
    const searchRef = useRef();

    const fetchUser = async (e) => {
        e.preventDefault();
        try {
            const user = await axios.get(`https://api.github.com/users/${username}`);
            const repositories = await axios.get(`https://api.github.com/users/${username}/repos`);
            dispatch(getUser(createUserModel(user.data, repositories.data)));
            setUsername('');
        } catch(e){
            dispatch(changeEmptyContent());
            dispatch(getUser(null));
            setUsername('');
        } 
    }

    return (
        <header className="header">
        <div className="container">
            <div className="header__inner">
                <div className="header__logo">
                    <a href="https://github.com/">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
                <form className="header__search" onSubmit={fetchUser}>
                    <i className="fas fa-search"></i>
                    <input onInput={(e) => setUsername(e.target.value.trim())} ref={searchRef} type="search" className="header__search-input" placeholder="Enter GitHub username" value={username}/>
                </form>
            </div>
        </div>
    </header>
    )
}

export default Header
