import React from "react";
import styles from "./Button.module.scss";

const Button = ({
  children,
  onClick,
  buttonStyle,
  className,
  disabled,
  submit,
}) => {
  const checkButtonStyle = (btnStyle) => {
    return `${styles[btnStyle]}`;
  };
  return (
    <button
      type={submit ? "submit" : "button"}
      disabled={disabled}
      className={`${styles.button} ${checkButtonStyle(
        buttonStyle
      )} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
