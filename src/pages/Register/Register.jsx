import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import css from './Register.module.css';
import Button from '@mui/material/Button';
// import FormControl from '@mui/material/FormControl';

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
      <label>Username</label>
      <input className={css.input} type="text" name="name" />
      <label>Email</label>
      <input className={css.input} type="email" name="email" />
      <label>Password</label>
      <input className={css.input} type="password" name="password" />
      <Button type="submit" variant="outlined">Register</Button>
    </form>
  );
};
