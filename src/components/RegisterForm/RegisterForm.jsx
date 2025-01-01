import { useDispatch } from "react-redux";

import { register } from "store/auth/operations";
import css from './RegisterForm.module.css';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        <input
          className={css.label}
          type="text"
          name="name"
          placeholder="Enter username"
          required
        />
      </label>

      <label className={css.label}>
        <input
          className={css.label}
          type="email"
          name="email"
          placeholder="Enter email"
          required
        />
      </label>

      <label className={css.label}>
        <input
          className={css.label}
          type="password"
          name="password"
          placeholder="Enter password"
          required
        />
      </label>

      <button className={css.formBtn} type="submit">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
