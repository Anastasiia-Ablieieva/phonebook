import { Link } from "react-router-dom";

export default function AuthNav() {
    return (
        <div>
            <a to="/register"> Register</a>
            <a to="/login"> Log in</a>
        </div>
    );
}