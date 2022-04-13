import React, {useState} from 'react';
import styles from './FormInput.module.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(15).required()
})

const FormInput = ({title, handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('')

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const submitForm = (data) => {
        console.log(data);
    }

    return (
        // <div>
        //     <input
        //         type="email"
        //         value={email}
        //         onChange={(e) => setEmail(e.target.value)}
        //         placeholder="email"
        //     />
        //     <input
        //         type="password"
        //         value={pass}
        //         onChange={(e) => setPass(e.target.value)}
        //         placeholder="password"
        //     />
        //     <button
        //         onClick={() => handleClick(email, pass)}
        //     >
        //         {title}
        //     </button>
        // </div>
        <div>
            <form onSubmit={handleSubmit(submitForm)}>
                <input type="email" name="email" placeholder="email" {...register("email")}/>
                <span>{errors.email?.message}</span>
                <input type="password" name="password" placeholder="password" {...register("password")} />
                <span>{errors.password?.message}</span>
                <input type="submit" placeholder={title}/>
            </form>
        </div>
    )
}

export default FormInput;