import {useRoutes} from "react-router-dom";
import {ProtectedRoute} from "../helpers";
import Landingpage from "../pages/landingpage/landingpage";
import {LoginScreen} from "../pages/login";
import {WelcomePage} from "../pages/welcome";
import {SignUpContainer} from "../components/exports";

export const Routes = () => {
	const route = useRoutes([
		{
			path: "/",
			element: <SignUpContainer />,
		},
		{
			path: "/login",
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
	]);
	return route;
};
