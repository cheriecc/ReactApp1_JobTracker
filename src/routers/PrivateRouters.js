import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { auth } from '../firebase/firebase';

const PrivateRoute = () => (!!auth.currentUser) ? <Outlet /> : <Navigate to='/login' />

export default PrivateRoute