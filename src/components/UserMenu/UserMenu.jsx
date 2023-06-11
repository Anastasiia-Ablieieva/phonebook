import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import Button from '@mui/material/Button';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { email } = useSelector(state => state.auth.user);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {email}</p>
      <Button variant="outlined" type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </div>
  );
};
