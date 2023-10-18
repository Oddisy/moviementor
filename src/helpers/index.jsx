import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

export const ProtectedRoute = ({children}) => {
	const navigate = useNavigate();
	const token = useSelector((state) => state.auth.token);
	const localStorageToken = localStorage.getItem("token");
	const dispatch = useDispatch();
	const handleNavigation = () => {
		if (!token && !localStorageToken) {
			// Clear the token from local storage
			localStorage.removeItem("token");
			dispatch(clearToken());
			navigate("/signup");
		}
	};
	useEffect(() => {
		handleNavigation();
	}, [localStorageToken]);

	return token || localStorageToken ? children : null;
};
