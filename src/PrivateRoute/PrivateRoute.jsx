
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    console.log(location);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-xl font-semibold">Loading....</p>
            </div>
        );
    };

    if (user) {
        return children;
    };



    return (
        <div>
            <Navigate state={{ from: location.pathname }} to="/login"></Navigate>
        </div>
    );
};

export default PrivateRoute;