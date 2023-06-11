import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import css from './Register.module.css';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import { FormLabel, Input } from '@mui/material';

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
    <FormControl sx={{ width: '32ch' }} onSubmit={handleSubmit} autoComplete="off">
      <FormLabel className={css.label}>
        Username
        <Input htmlFor="my-input" type="text" name="name" />
      </FormLabel>
      <FormLabel className={css.label}>
        Email
        <Input type="email" name="email" />
      </FormLabel>
      <FormLabel className={css.label}>
        Password
        <Input type="password" name="password" />
      </FormLabel>
      <Button type="submit" variant="outlined">Register</Button>
    </FormControl>
  );
};
