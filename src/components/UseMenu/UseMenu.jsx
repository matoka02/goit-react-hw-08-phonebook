import { useDispatch } from "react-redux";

import useAuth from "hooks/useAuth";
import { logOut } from "redux/auth/operations";
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <h3 className={css.username}>Welcome, {user.name}</h3>
      <button
        className={css.btnLogin}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;