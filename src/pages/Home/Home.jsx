import { Link } from "react-router-dom";
import css from './Home.module.css'

export default function Home() {
    return (
      <div>
        <h2 className={css.taxt}>
            Please,  
            <Link to="/register"> Register </Link> 
            and create your contact list, or 
            <Link to="/login"> Log in </Link> 
            and use your contacts!
        </h2>
      </div>
    );
  }