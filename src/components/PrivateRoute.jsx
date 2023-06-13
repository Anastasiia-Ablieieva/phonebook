import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/hooks';

export const PrivateRoute = ({ component: Component, redirectTo: addres }) => {
    
    const { isLoaggedIn, isRefreshing } = useAuth();
    const shouldRedirect = !isLoaggedIn && !isRefreshing;

    return shouldRedirect ? <Navigate to={addres} /> : Component;
};