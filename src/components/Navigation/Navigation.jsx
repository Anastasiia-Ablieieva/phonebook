import useAuth from "hooks/hooks";
import { NavLink } from "react-router-dom";
import css from './Navigation.module.css';
import { Button } from "@mui/material";

export default function Navigation() {
    const { isLoggedIn } = useAuth();
    
     return (
        <nav>
            <Button>
                <NavLink className={css.link} to="/">Home</NavLink>
            </Button>
            
            {isLoggedIn && (
            <Button><NavLink className={css.link} to="/contacts">Contacts</NavLink></Button>)}
        </nav>
     );
};
