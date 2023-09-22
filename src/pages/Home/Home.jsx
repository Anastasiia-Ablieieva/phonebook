import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import css from './Home.module.css';

export default function Home() {
    return (
      <div>
        <p className={css.taxt}>
          <Link to="/register">
            <Button variant="outlined">Register</Button>
          </Link>
          {`  and create your contact list!`}
        </p>
        <p className={css.taxt}>
          <Link to="/login">
            <Button variant="outlined">Log in</Button>
          </Link>
          {`  and use your contacts!`}
        </p>
      </div>
    );
  }

