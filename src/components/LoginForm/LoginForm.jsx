import { useDispatch, useSelector } from 'react-redux';

import { logIn } from 'redux/auth/operations';
import { selectIsLoading } from 'redux/contacts/selectors';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <>
        <label>
          <input
            className={css.label}
            type="email"
            name="email"
            required
            placeholder="Enter email"
          />
        </label>
      </>
      <>
        <label>
          <input
            className={css.label}
            type="password"
            name="password"
            required
            placeholder="Enter password"
          />
        </label>
      </>
      <button className={css.formBtn} type="submit" disabled={isLoading}>
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
