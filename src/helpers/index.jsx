import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

export const ProtectedRoute = ({children}) => {
	const navigate = useNavigate();
	const token = useSelector((state) => state.auth.token);
	const localStorageToken = localStorage.getItem("token");
	const handleNavigation = () => {
		if (!localStorageToken) {
			// Clear the token from local storage
			localStorage.removeItem("token");
			navigate("/");
		}
	};
	useEffect(() => {
		handleNavigation();
	}, [localStorageToken]);

	return token || localStorageToken ? children : null;
};
