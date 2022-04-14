import React from 'react';
import styles from './CartItem.module.scss';
import { useDispatch} from 'react-redux';
import {removeFromCart} from '../../app/slices/cartSlice';
import TrashIcon from '../Icons/TrashIcon';

const CartItem = ({item}) => {
    const dispatch = useDispatch();

    const removeHandler = (item) => {
        if(window.confirm(`Do you really want to delete ${item.name} from cart?`)) {
            dispatch(removeFromCart(item))
        }
    }

    return (
        <div className={styles.cartItem} key={`cart item ${item.name}`}>
            <div className={styles.cartItem__content}>
                <img src={item.imagePath} alt={item.name} className={styles.cartItem__image}/>
                <div className={styles.cartItem__text}>
                    {item.name}
                    <div className={styles.cartItem__text_price}>{`$${item.price.toLocaleString()}`}</div>
                </div>
            </div>
            <div>
                <button
                    className={styles.cartItem__button}
                    onClick={() => removeHandler(item)}
                >
                    <TrashIcon className={styles.cartItem__button_icon}/>
                </button>
            </div>
        </div>
    )
}

export default CartItem;