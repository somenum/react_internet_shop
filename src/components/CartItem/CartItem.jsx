import React from "react";
import { useDispatch } from "react-redux";
import styles from "./CartItem.module.scss";
import { removeFromCart } from "../../app/slices/cartSlice";
import TrashIcon from "../Icons/TrashIcon";
import Button from "../Button/Button";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeHandler = (i) => {
    dispatch(removeFromCart(i));
  };

  return (
    <div className={styles.cartItem} key={`cart item ${item.name}`}>
      <div className={styles.cartItem__content}>
        <img
          src={item.imagePath}
          alt={item.name}
          className={styles.cartItem__image}
        />
        <div className={styles.cartItem__text}>
          <div>{item.name}</div>
          <div className={styles.cartItem__text_price}>
            <span>{item.cartQuantity}x</span>
            {` $${item.price.toLocaleString()}`}
          </div>
        </div>
      </div>
      <div>
        <Button
          className={styles.cartItem__button}
          onClick={() => removeHandler(item)}
          type="button"
          buttonStyle="transparent"
        >
          <TrashIcon className={styles.cartItem__button_icon} />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
