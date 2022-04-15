import React from "react";
import styles from "./Button.module.scss";

const Button = ({ children, onClick, buttonStyle, className, disabled }) => {
  const checkButtonStyle = (btnStyle) => {
    switch (btnStyle) {
      case "primary":
        return `${styles.primary}`;
      case "transparent":
        return `${styles.transparent}`;
      default:
        return `${styles.primary}`;
    }
  };
  return (
    <button
      type="button"
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
