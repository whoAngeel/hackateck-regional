import React from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { logout } from "../redux/auth/auth.slice";

function Logout() {
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(logout());
	}, []);
	return <Navigate to="/login"></Navigate>;
}

export default Logout;
