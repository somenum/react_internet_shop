import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./Form.module.scss";
import Button from "../Button/Button";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(15).required(),
});

const Form = ({ title, handleClick }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    handleClick(data.email, data.password);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className={styles.form}>
      <input
        type="email"
        name="email"
        placeholder="email"
        {...register("email")}
        className={errors.email && styles.form__inputError}
      />
      <span className={styles.form__error}>{errors.email?.message}</span>
      <input
        type="password"
        name="password"
        placeholder="password"
        {...register("password")}
        className={errors.password && styles.form__inputError}
      />
      <span className={styles.form__error}>{errors.password?.message}</span>
      <Button submit className={styles.form__button} buttonStyle="primary">
        {title}
      </Button>
    </form>
  );
};

export default Form;
