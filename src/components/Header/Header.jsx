import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.scss";
import logoImage from "../../assets/images/logo.svg";
import CartIcon from "../Icons/CartIcon";
import LogOutIcon from "../Icons/LogOutIcon";
import Cart from "../Cart/Cart";
import { removeAll, selectCart } from "../../app/slices/cartSlice";
import { removeUser } from "../../app/slices/userSlice";
import { useAuth } from "../../hooks/useAuth";
import UserIcon from "../Icons/UserIcon";
import Button from "../Button/Button";
import SunIcon from "../Icons/SunIcon";
import ThemeContext from "../../context/themeContext";
import MoonIcon from "../Icons/MoonIcon";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const carts = useSelector(selectCart);
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();
  const navigate = useNavigate();
  const { theme, setTheme } = useContext(ThemeContext);

  const themeHandler = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const handleBuy = () => {
    dispatch(removeAll());
    // eslint-disable-next-line no-alert
    alert("Thanks for you order");
  };

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "visible";
  }, [isOpen]);

  const logOutHandler = () => {
    // eslint-disable-next-line no-alert
    if (window.confirm(`Do you really want to log out from ${email}`)) {
      dispatch(removeUser());
    }
  };

  return (
    <div className={`${styles.header} App`}>
      <a className={styles.header__logo} href="/">
        <img src={logoImage} alt="logo" className={styles.header__logo_image} />
        <div className={styles.header__logo_title}>RZTK</div>
      </a>

      <ul className={styles.header__list}>
        <li className={styles.header__list_item}>
          <Button
            onClick={themeHandler}
            className={styles.header__button}
            type="button"
            buttonStyle="transparent"
          >
            {theme === "light" ? (
              <SunIcon className={styles.header__button_icon} />
            ) : (
              <MoonIcon className={styles.header__button_icon} />
            )}
          </Button>
        </li>
        <li className={styles.header__list_item}>
          <Button
            className={styles.header__button}
            onClick={isAuth ? logOutHandler : () => navigate("/Login")}
            type="button"
            buttonStyle="transparent"
          >
            {isAuth ? (
              <LogOutIcon className={styles.header__button_icon} />
            ) : (
              <UserIcon className={styles.header__button_icon} />
            )}
          </Button>
        </li>
        <li className={styles.header__list_item}>
          <Button
            className={styles.header__button}
            type="button"
            onClick={() => setIsOpen(true)}
            buttonStyle="transparent"
          >
            <CartIcon className={styles.header__button_icon} />
            <div className={styles.header__button_count}>{carts.length}</div>
          </Button>
        </li>
      </ul>
      <Cart
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onClick={handleBuy}
      />
    </div>
  );
};

export default Header;
