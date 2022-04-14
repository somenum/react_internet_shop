import React from 'react';
import {Link} from 'react-router-dom';
import Login from '../../components/Login/Login';
import styles from './LoginPage.module.scss';

const LoginPage = () => {
    return (
        <div className={styles.loginPage}>
            <h1>Please sign in</h1>
            <Login />
            <p>
                or <Link to='/register'>Sign up</Link>
            </p>
        </div>
    )
}

export default LoginPage;