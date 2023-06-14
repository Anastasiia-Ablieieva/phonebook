import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import Button from '@mui/material/Button';
import css from './UserMenu.module.css';
import useAuth from 'hooks/hooks';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome,  {user.name}</p>
      <Button variant="outlined" type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </div>
  );
};
