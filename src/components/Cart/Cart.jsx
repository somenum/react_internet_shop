import React from 'react';
import ReactDOM from 'react-dom';
import {useSelector} from 'react-redux';
import {selectCart} from '../../app/cartSlice';
import CartItem from '../CartItem/CartItem';
import styles from './Cart.module.scss';
import CloseIcon from '../Icons/CloseIcon';
import CartImg from '../../assets/images/shopping-bag.png';

const Cart = ({open, onClose}) => {
    const cart = useSelector(selectCart);

    const total = cart.reduce((acc, item) => acc + (item.price), 0)
    if(!open) return null;

    return ReactDOM.createPortal(
        <>
            <div className={styles.cart__overlay} />
            <div className={styles.cart}>
                <div className={styles.cart__header}>
                    <button
                        className={styles.cart__button_close}
                        onClick={onClose}
                    >
                        <CloseIcon className={styles.cart__button_icon}/>
                    </button>
                </div>
                <ul className={styles.cart__list}>
                    {cart.length ?
                        cart.map(item => (
                            <li key={item._id} className={styles.cart__list_item}>
                                <CartItem item={item} />
                            </li>
                        ))
                        :
                        <div className={styles.cart__empty}>
                            <img src={CartImg} alt="cart" className={styles.cart__empty_image}/>
                            <span className={styles.cart__text}>Кошик порожній</span>
                        </div>
                    }
                </ul>
                <div className={styles.cart__total}>
                    Total: <b>${total.toLocaleString()}</b>
                </div>
            </div>

        </>,
        document.getElementById('portal')
    )

}

export default Cart;