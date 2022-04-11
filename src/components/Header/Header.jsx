import React, {useState} from 'react';
import styles from './Header.module.scss';
import logoImage from '../../assets/images/logo.svg'
import CartIcon from '../Icons/CartIcon';
import UserIcon from '../Icons/UserIcon';
import Cart from '../Cart/Cart';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={styles.header}>
            <a className={styles.header__logo} href="/">
                <img src={logoImage} alt="logo" className={styles.header__logo_image}/>
                <div className={styles.header__logo_title}>RZTK</div>
            </a>

            <ul className={styles.header__list}>
                <li className={styles.header__list_item}>

                </li>
                <li className={styles.header__list_item}>
                    <button className={styles.header__button}>
                        <UserIcon className={styles.header__button_icon}/>
                    </button>
                </li>
                <li className={styles.header__list_item}>
                    <button className={styles.header__button} onClick={() => setIsOpen(true)}>
                        <CartIcon className={styles.header__button_icon}/>
                        <div className={styles.header__button_count}>0</div>
                    </button>
                </li>
            </ul>
            <Cart open={isOpen} onClose={() => setIsOpen(false)}/>
        </div>
    )
}

export default Header;