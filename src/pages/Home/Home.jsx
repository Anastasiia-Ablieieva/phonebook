import { Link } from "react-router-dom";
import css from './Home.module.css'
import Button from '@mui/material/Button';


export default function Home() {
    return (
      <div>
        <p className={css.taxt}>{`Please, `}
            <Button variant="outlined" to="/register"> Register </Button> 
            {` and create your contact list, or `} 
            <Button variant="outlined" to="/login"> Log in </Button> 
            {` and use your contacts!`}
        </p>
      </div>
    );
  }