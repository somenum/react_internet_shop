import React from 'react';
import {Link} from "react-router-dom";
import Register from '../../components/Register/Register';
import styles from './RegisterPage.module.scss';

const RegisterPage = () => {
    return (
        <div className={styles.registerPage}>
            <h1>Sign up</h1>
            <Register />

            <p>
                Already have an account? <Link to='/login'>Sign In</Link>
            </p>
        </div>

    )
}

export default RegisterPage;