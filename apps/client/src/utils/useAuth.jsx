import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function useAuth() {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const { token } = useSelector((state) => state.auth);
	useEffect(() => {
		setIsAuthenticated(!!token);
	}, []);
	return isAuthenticated;
}

export default useAuth;
