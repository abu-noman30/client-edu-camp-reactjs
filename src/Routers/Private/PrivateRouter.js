import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { FbaseAuthContext } from '../../Context/AuthContextAPI';

const PrivateRoute = ({ children }) => {
	const { loading, currentUser } = useContext(FbaseAuthContext);

	const location = useLocation();
	// console.log(location);

	if (loading) {
		console.log('loading...');
		return <div>Loading...</div>;

		// Spinner component can be used here
	}

	if (currentUser && currentUser.uid) {
		console.log(currentUser);
		return children;
	} else {
		return <Navigate to='/login' state={{ from: location }} replace />;
	}
};

export default PrivateRoute;
