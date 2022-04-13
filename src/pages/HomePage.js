import React from 'react';
import {Navigate} from 'react-router-dom';
import {useAuth} from '../hooks/useAuth'
import Header from '../components/Header/Header';
import Goods from '../components/Goods/Goods';
import {useDispatch} from 'react-redux';
import {removeUser} from '../app/slices/userSlice';

const HomePage = () => {
    const {isAuth, email} = useAuth();
    const dispatch = useDispatch();
    return isAuth ? (
        <div>
            <h1>Home</h1>
            <button
                onClick={() => dispatch(removeUser())}
            >
                Log out from {email}
            </button>
            {/*<Header/>*/}
            <Goods/>
        </div>
    )
        :
        (
        <div>
            <Navigate to='/login'/>
        </div>
    )
}

export default HomePage;