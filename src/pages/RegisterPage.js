import React from 'react';
import {Link} from "react-router-dom";
import Register from '../components/Register/Register';

const RegisterPage = () => {
    return (
        <>
            <h1>RegisterPage</h1>
            <Register />

            <p>
                Already have an account? <Link to='/login'>Sign In</Link>
            </p>
        </>

    )
}

export default RegisterPage;