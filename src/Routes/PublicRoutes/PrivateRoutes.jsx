import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';
import Spinner from '../../Component/Spinner/Spinner';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)


    if (loading) {
        return <Spinner></Spinner>
    }
    if (user) {
        return children
    }
    return <Navigate to="/login" replace={true}></Navigate>
};

export default PrivateRoutes;