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
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  const { theme, setTheme } = useContext(ThemeContext);

  const themeHandler = () => {
    const currentTheme = theme === "light" ? "dark" : "light";
    setTheme(currentTheme);
  };

  const handleBuy = () => {
    dispatch(removeAll());
  };

  useEffect(() => {
    const overflow = isOpen ? "hidden" : "visible";
    document.body.style.overflow = overflow;
  }, [isOpen]);

  const logOutHandler = () => {
    dispatch(removeUser());
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
