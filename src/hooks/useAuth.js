import { useSelector } from "react-redux";

// eslint-disable-next-line import/prefer-default-export
export function useAuth() {
  const { email, token, id } = useSelector((state) => state.user);

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
}
