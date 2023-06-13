import { Link } from "react-router-dom";
import css from './Home.module.css'

export default function Home() {
    return (
      <div>
        <p className={css.taxt}>{`Please, `}
            <a to="/register"> Register </a> 
            {` and create your contact list, or `} 
            <a to="/login"> Log in </a> 
            {` and use your contacts!`}
        </p>
      </div>
    );
  }