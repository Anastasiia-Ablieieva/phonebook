import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import css from './AppBar.module.css'

export const AppBar = () => {
    const { isLoaggedIn } = useSelector(state => state.auth);

return (
    <header>
        <nav className={css.nav}>
            <div className={css.contactsNav}>
                <Link to='/'>Home</Link>
                {isLoaggedIn && (<Link to="/contacts"> Contacts </Link>)}
            </div>
            <div className={css.authNav}>
                {isLoaggedIn ? (<UserMenu />) : (
                <>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Log in</Link>
                </>)}
            </div>
        </nav>
    </header>
)};
