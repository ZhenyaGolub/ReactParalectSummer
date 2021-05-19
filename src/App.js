import React from 'react';
import { useSelector } from 'react-redux';

import './styles/main.scss';

import Header from './components/Header';
import Empty from './components/Empty';
import User from './components/User';


const App = () => {

    const user = useSelector(({user}) => user);

    return (
        <div>
            <Header/>
            {
                user ? <User user={user}/> : <Empty/>
            }
            
        </div>
    )
}

export default App
