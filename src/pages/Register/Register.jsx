import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import css from './Register.module.css';
import Button from '@mui/material/Button';

export default function Register() {
  const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
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
        Username
        <input type="text" name="name" />
      </label>
      <label className={css.label}>
        Email
        <input type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" />
      </label>
      <Button type="submit" variant="outlined">Register</Button>
    </form>
  );
};
