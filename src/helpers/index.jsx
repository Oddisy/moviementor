import {useEffect} from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

export const ProtectedRoute = ({children}) => {
	const navigate = useNavigate();
	const token = useSelector((state) => state?.auth?.token);
	const tokenFromLocalStorage = localStorage.getItem("token");
	useEffect(() => {
		if (!(token || tokenFromLocalStorage)) {
			navigate("/");
		}
	}, [token, tokenFromLocalStorage, navigate]);

	return token || tokenFromLocalStorage ? children : null;
};

// import {useEffect} from "react";
// import {useSelector, useDispatch} from "react-redux";
// import {useNavigate} from "react-router-dom";

// export const ProtectedRoute = ({children}) => {
// 	const navigate = useNavigate();
// 	const token = useSelector((state) => state.auth.token);
// 	const localStorageToken = localStorage.getItem("token");
// 	const dispatch = useDispatch();
// 	const handleNavigation = () => {
// 		if (!token && !localStorageToken) {
// 			// Clear the token from local storage
// 			localStorage.removeItem("token");
// 			dispatch(clearToken());
// 			navigate("/");
// 		}
// 	};
// 	useEffect(() => {
// 		handleNavigation();
// 	}, [localStorageToken, token]);

// 	return token || localStorageToken ? children : null;
// };
