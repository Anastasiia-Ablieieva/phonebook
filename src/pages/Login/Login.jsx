import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import css from './Login.module.css';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import { FormLabel, Input } from '@mui/material';

export default function Login() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormControl sx={{ width: '32ch' }} onSubmit={handleSubmit} autoComplete="off">
      <FormLabel className={css.label}>
        Email
        <Input type="email" name="email" />
      </FormLabel>
      <FormLabel className={css.label}>
        Password
        <Input type="password" name="password" />
      </FormLabel>
      <Button variant="outlined" type="submit">Log In</Button>
    </FormControl>
  );
};