import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import UseAuth from "../hooks/UseAuth";


const AdminRoutes = ({ children }) => {
    const [isAdmin, isAdminLoading] = useAdmin();
    console.log(isAdmin)
    const { user, loading } = UseAuth();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <progress className="progress w-56"></progress>;
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoutes;
