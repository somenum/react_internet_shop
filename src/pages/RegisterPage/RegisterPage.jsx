import React from "react";
import { Link } from "react-router-dom";
import Register from "../../components/Register/Register";
import styles from "./RegisterPage.module.scss";
import Header from "../../components/Header/Header";

const RegisterPage = () => (
  <div className="App">
    <Header />
    <div className={styles.registerPage}>
      <h1>Sign up</h1>
      <Register />

      <p>
        Already have an account?{" "}
        <Link className={styles.registerPage__link} to="/login">
          Sign In
        </Link>
      </p>
    </div>
  </div>
);

export default RegisterPage;
