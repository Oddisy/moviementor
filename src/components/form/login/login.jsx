import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {useLoginMutation} from "../../../app/api";
import {toast} from "react-hot-toast";
import {setUserValues} from "../../../redux/authSlice";
import {useNavigate, Link} from "react-router-dom";
import "./login.css";
// importing validation library for validations
import {useFormik} from "formik";
import * as Yup from "yup";

const initialValues = {
	username: "",
	password: "",
};
const onSubmit = (values) => {
	console.log("form value", values);
};

const Login = () => {
	const validationSchema = Yup.object().shape({
		username: Yup.string().required("Username is required"),

		password: Yup.string()
			.min(8, "Password must be at least 8 characters.")
			.required("Password is required."),
	});
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(false);
	const [onLogin] = useLoginMutation();
	// store formik fields in a variable
	const formik = useFormik({
		initialValues,
		onSubmit,
		validationSchema,
	});

	const handleLogin = async () => {
		setLoading(true);
		try {
			const postData = {
				username: formik.values.username,
				password: formik.values.password,
			};
			const res = await onLogin(postData);
			if (res) {
				dispatch(
					setUserValues({
						token: res.data.token,
						username: res.data.username,
					})
				);
				navigate("/movies");
				toast.success(`${res.data.username} ${res.data.message}`);
			}
		} catch (err) {
			console.log(err);
			// if (err.response) {
			// 	const errorData = err.response.data;
			// 	console.log(errorData);
			// 	if (errorData.error === "Username and Password Mis-Match") {
			// 		formik.setErrors({username: "Invallid username or password."});
			// 	} else if (errorData.error === "username_exists") {
			// 		formik.setErrors({username: "Username already taken."});
			// 	} else {
			// 		toast.error("There was an error logging in.");
			// 	}
			// } else {
			// 	toast.error("There was an error logging in.");
			// }
		} finally {
			setLoading(false);
		}
	};
	return (
		<form onSubmit={formik.handleSubmit}>
			{loading && (
				<div className="loading-container">
					<div className="loading-ring"></div>
					<p className="loading-text">Logging in...</p>
				</div>
			)}

			<label htmlFor="username">
				<input
					className="w-full border rounded-3xl px-4 py-2 mb-4"
					id="username"
					// value={username}
					// onChange={(e) => setUsername(e.target.value)}
					type="text"
					placeholder="Username"
					onChange={formik.handleChange}
					value={formik.values.username}
					onBlur={formik.handleBlur}
				/>
				{formik.touched.username && formik.errors.username ? (
					<div className="text-red-500 -mt-4 mb-4">
						{" "}
						{formik.errors.username}{" "}
					</div>
				) : null}
			</label>

			<label htmlFor="password">
				<input
					className="w-full border rounded-3xl px-4 py-2 mb-4"
					id="password"
					// value={password}
					// onChange={(e) => se  tPassword(e.target.value)}
					type="password"
					placeholder="Password"
					onChange={formik.handleChange}
					value={formik.values.password}
					onBlur={formik.handleBlur}
				/>
				{formik.touched.password && formik.errors.password ? (
					<div className="text-red-600 -mt-4 mb-4">
						{" "}
						{formik.errors.password}{" "}
					</div>
				) : null}
			</label>
			<div className="flex flex-col">
				<div className="flex mb-4 w-full items-baseline">
					<span className="border-b-2 border-red-300 text-blue-500 w-[13%] md:w-[20%] lg:w-[30%] "></span>
					<span className="flex justify-center  text-white text-sm  w-[90%]  md:w-[50%] lg:w-[50%] ">
						Don't have an account ?{" "}
						<span className="text-blue-500 ml-2 ">
							<Link to="/signup">Sign up</Link>
						</span>
					</span>
					<span className="border-b-2 border-red-300 text-blue-500 w-[13%] md:w-[20%] lg:w-[30%] "></span>
				</div>

				<button
					className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-300"
					type="submit"
					onClick={handleLogin}
				>
					Sign In
				</button>
			</div>
		</form>
	);
};

export default Login;
