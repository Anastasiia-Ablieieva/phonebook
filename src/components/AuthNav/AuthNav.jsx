import { NavLink } from "react-router-dom";
import css from './AuthNav.module.css';
import { Button } from "@mui/material";

export default function AuthNav() {
    return (
        <nav>
            <Button>
                <NavLink className={css.link} to="/register"> Register </NavLink>
            </Button>
            <Button>
                <NavLink className={css.link} to="/login"> Log in </NavLink>
            </Button>
        </nav>
    );
}