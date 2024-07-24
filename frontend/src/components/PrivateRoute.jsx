import React from 'react';
import { useSelector } from 'react-redux';
import {  Navigate, Outlet} from 'react-router-dom';
import { islogin } from '../Store/CreateReducres/LoginSlice';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(islogin);
if(isAuthenticated){
    return <Outlet />
}else{
    return <Navigate to={"/login"} />
}

};

export default PrivateRoute;
