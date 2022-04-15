import React from "react";
import { Link } from "react-router-dom";
import Login from "../../components/Login/Login";
import styles from "./LoginPage.module.scss";
import Header from "../../components/Header/Header";

const LoginPage = () => {
  return (
    <div className="App">
      <Header />
      <div className={styles.loginPage}>
        <h1>Please sign in</h1>
        <Login />
        <p>
          or{" "}
          <Link className={styles.loginPage__link} to="/register">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
