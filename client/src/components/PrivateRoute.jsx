import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/Auth';

function PrivateRoute(props) {
    const {user} = useAuth();
    return  user ? <Outlet/> : <Navigate to="/"></Navigate>
}

export default PrivateRoute;
