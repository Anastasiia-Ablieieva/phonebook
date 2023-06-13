import { Link } from "react-router-dom";

export default function AuthNav() {
    return (
        <div>
            <Link to="/register"> Register</Link>
            <Link to="/login"> Log in</Link>
        </div>
    );
}