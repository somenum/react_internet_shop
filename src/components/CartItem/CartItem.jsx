import React from 'react';
import styles from './CartItem.module.scss';
import { useDispatch} from 'react-redux';
import {removeFromCart} from '../../app/cartSlice';

const CartItem = ({item}) => {
    const dispatch = useDispatch();

    const removeHandler = (item) => {
        dispatch(removeFromCart(item))
    }

    return (
        <div className={styles.cartItem} key={`cart item ${item.name}`}>
            <img src={item.imagePath} alt={item.name} className={styles.cartItem__image}/>
            <div>
                <div>
                    {item.name}
                    <button
                        className={styles.cartItem__button}
                        onClick={() => removeHandler(item)}
                    >
                        X
                    </button>
                </div>
                <div>{`$${item.price.toLocaleString()}`}</div>
            </div>
        </div>
    )
}

export default CartItem;