import React, {useEffect, useState} from 'react';
import styles from './Header.module.scss';
import logoImage from '../../assets/images/logo.svg'
import CartIcon from '../Icons/CartIcon';
import LogOutIcon from '../Icons/LogOutIcon';
import Cart from '../Cart/Cart';
import {useDispatch, useSelector} from 'react-redux';
import {selectCart} from '../../app/slices/cartSlice';
import ThemeSetter from '../../theme/ThemeSetter';
import {removeUser} from '../../app/slices/userSlice';
import {useAuth} from "../../hooks/useAuth";
import {useNavigate} from "react-router-dom";
import UserIcon from "../Icons/UserIcon";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const carts = useSelector(selectCart);
    const dispatch = useDispatch();
    const {isAuth} = useAuth();
    const navigate = useNavigate()

    useEffect(() => {
        if (isOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'visible';
    }, [isOpen]);

    return (
        <div className={styles.header}>
            <a className={styles.header__logo} href="/">
                <img src={logoImage} alt="logo" className={styles.header__logo_image}/>
                <div className={styles.header__logo_title}>RZTK</div>
            </a>

            <ul className={styles.header__list}>
                <li className={styles.header__list_item}>
                    <ThemeSetter/>
                </li>
                <li className={styles.header__list_item}>
                    <button
                        className={styles.header__button}
                        onClick={isAuth ? () => dispatch(removeUser()) : () => navigate('/Login')}
                            >
                        {isAuth ?
                            <LogOutIcon className={styles.header__button_icon}/>
                            :
                            <UserIcon className={styles.header__button_icon}/>
                        }

                    </button>
                </li>
                <li className={styles.header__list_item}>
                    <button className={styles.header__button} onClick={() => setIsOpen(true)}>
                        <CartIcon className={styles.header__button_icon}/>
                        <div className={styles.header__button_count}>{carts.length}</div>
                    </button>
                </li>
            </ul>
            <Cart open={isOpen} onClose={() => setIsOpen(false)}/>
        </div>
    )
}

export default Header;