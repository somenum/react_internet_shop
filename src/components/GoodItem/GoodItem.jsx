import React from 'react';
import styles from './GoodItem.module.scss'
import CartIcon from '../Icons/CartIcon';
import {useDispatch} from 'react-redux';
import {addToCart} from "../../app/slices/cartSlice";

const GoodItem = ({good}) => {

    const dispatch = useDispatch()

    const addToCartHandler = (good) => {
        dispatch(addToCart(good))
    }

    return (
        <div className={styles.goodItem}>
            <img className={styles.goodItem__image} src={good.imagePath} alt={good.name}/>
            <div className={styles.goodItem__title}>{good.name}</div>
            <div className={styles.goodItem__footer}>
                <div className={styles.goodItem__text}>
                    ${good.price}
                </div>
                <button className={styles.goodItem__button} onClick={() => addToCartHandler(good)}>
                    {

                        <CartIcon className={styles.goodItem__button_image}/>
                    }

                </button>
            </div>
        </div>
    )
}

export default GoodItem;