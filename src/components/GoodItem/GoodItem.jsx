import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartIcon from "../Icons/CartIcon";
import { addToCart } from "../../app/slices/cartSlice";
import { useAuth } from "../../hooks/useAuth";

import Button from "../Button/Button";
import styles from "./GoodItem.module.scss";

const GoodItem = ({ good }) => {
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const addToCartHandler = (item) => {
    dispatch(addToCart(item));
    // eslint-disable-next-line no-alert
    alert(`The ${item.name} was added to cart`);
  };

  return (
    <div className={styles.goodItem} key={good.id}>
      <img
        className={styles.goodItem__image}
        src={good.imagePath}
        alt={good.name}
      />
      <div className={styles.goodItem__title}>{good.name}</div>
      <div className={styles.goodItem__footer}>
        <div className={styles.goodItem__text}>${good.price}</div>
        <Button
          className={styles.goodItem__button}
          onClick={
            isAuth ? () => addToCartHandler(good) : () => navigate("/Login")
          }
          type="button"
          buttonStyle="transparent"
        >
          <CartIcon className={styles.goodItem__button_image} />
        </Button>
      </div>
    </div>
  );
};

export default GoodItem;
