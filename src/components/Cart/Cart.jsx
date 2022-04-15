import React from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import { selectCart } from "../../app/slices/cartSlice";
import CartItem from "../CartItem/CartItem";
import styles from "./Cart.module.scss";
import CloseIcon from "../Icons/CloseIcon";
import CartImg from "../../assets/images/empty-box.png";
import Button from "../Button/Button";
import ThemeProvider from "../../theme/ThemeProvider";

const Cart = ({ open, onClose }) => {
  const carts = useSelector(selectCart);

  const handleBuy = () => {};
  const total = carts.reduce((acc, item) => acc + item.price, 0);
  if (!open) return null;

  return ReactDOM.createPortal(
    <ThemeProvider>
      <>
        <div className={styles.cart__overlay} />
        <div className={`${styles.cart} App`}>
          <div className={styles.cart__header}>
            <Button
              className={styles.cart__button_close}
              onClick={onClose}
              buttonStyle="transparent"
            >
              <CloseIcon className={styles.cart__button_icon} />
            </Button>
          </div>
          <ul className={styles.cart__list}>
            {carts.length ? (
              carts.map((item) => (
                <li key={item.id} className={styles.cart__list_item}>
                  <CartItem item={item} />
                </li>
              ))
            ) : (
              <div className={styles.cart__empty}>
                <img
                  src={CartImg}
                  alt="cart"
                  className={styles.cart__empty_image}
                />
                <span className={styles.cart__text}>Кошик порожній</span>
              </div>
            )}
          </ul>
          <div className={styles.cart__total}>
            <span>
              Total: <b>${total.toLocaleString()}</b>
            </span>
            <Button
              className={styles.cart__total_button}
              onClick={handleBuy}
              buttonStyle="primary"
            >
              Оформити
            </Button>
          </div>
        </div>
      </>
      ,
    </ThemeProvider>,
    document.getElementById("portal")
  );
};

export default Cart;
