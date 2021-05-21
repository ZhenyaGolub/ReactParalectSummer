import React from 'react';
import { useSelector } from 'react-redux';

import './styles/main.scss';

import Header from './components/Header';
import Empty from './components/Empty';
import User from './components/User';
import Loader from './components/Loader';

const App = () => {

    const { user, isLoader} = useSelector((state) => state);

    const render = () => {
        if(isLoader){
            return (
                <Loader/>
            )
        } else{
            return(
                user ? <User user={user}/> : <Empty/>
            )
        }
    }
    

    return (
        <div>
            <Header/>
            {
                render()
            }
            
        </div>
    )
}

export default App
