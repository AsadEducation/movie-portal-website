import { useContext } from "react";
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from "react-router-dom";

const Private = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const {pathname} = useLocation();

    // console.log(pathname);

    // console.log(loading);
    

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <span className="loading loading-ring text-blue-400 loading-lg"></span>
            </div>
        )
    }

    if (user) {
        return children
    }

    return <Navigate state={pathname}  to={'/auth/login'} />
};

export default Private;