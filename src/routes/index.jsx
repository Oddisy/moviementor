import {useRoutes} from "react-router-dom";
import {ProtectedRoute} from "../helpers";
import {LoginScreen} from "../pages/login";
import {WelcomePage} from "../pages/welcome";
import {SignUpContainer} from "../components/exports";
import {SingleMoviePage} from "../pages/singlemoviepage";

export const Routes = () => {
	const route = useRoutes([
		{
			path: "/signup",
			element: <SignUpContainer />,
		},
		{
			path: "/",
			element: <LoginScreen />,
		},
		{
			path: "/movies",
			element: (
				<ProtectedRoute>
					<WelcomePage />
				</ProtectedRoute>
			),
		},
		{
			path: "/single-movies/:id",
			element: (
				<ProtectedRoute>
					<SingleMoviePage />
				</ProtectedRoute>
			),
		},
	]);
	return route;
};
