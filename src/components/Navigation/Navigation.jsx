import useAuth from "hooks/hooks";
import { Link } from "react-router-dom";

export default function Navigation() {
    const { isLoggedIn } = useAuth();
    
     return (
        <nav>
            <Link to="/">Home</Link>
            {isLoggedIn && (<Link to="/contacts">Contacts</Link>)}
        </nav>
     );
};