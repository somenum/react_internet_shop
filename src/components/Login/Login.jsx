import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import FormInput from "../FormInput/FormInput";
import { setUser } from "../../app/slices/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/");
      })
      // eslint-disable-next-line no-alert
      .catch(() => alert("Invalid user"));
  };

  return <FormInput title="Sign in" handleClick={handleLogin} />;
};
export default Login;
