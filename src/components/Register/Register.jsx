import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FormInput from '../FormInput/FormInput';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {setUser} from "../../app/slices/userSlice";


const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken
                }))
                navigate('/')
            })
            .catch(console.error)
    }

    return (
        <FormInput
            title="Sign up"
            handleClick={handleRegister}
        />
    );
};
export default Register;