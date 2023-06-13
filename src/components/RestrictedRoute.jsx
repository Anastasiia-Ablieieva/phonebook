import useAuth from 'hooks/hooks';
import { Navigate } from 'react-router-dom';

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
    const { isLoaggedIn } = useAuth(); 

    return isLoaggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute