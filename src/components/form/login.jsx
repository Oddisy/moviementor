import React from "react";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {useLoginMutation} from "../../app/api";
import {toast} from "react-hot-toast";
import {setUserValues} from "../../redux/authSlice";
import {useNavigate} from "react-router-dom";
import {useFormik} from "formik";
import * as Yup from "yup";
import {Link} from "react-router-dom";

const initialValues = {
	username: "",
	password: "",
};
const onSubmit = (values) => {
	console.log("form value", values);
};

const validationSchema = Yup.object({
	username: Yup.string().required("Required!"),
	password: Yup.string().required("Required!"),
});
const Login = () => {
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
						email: res.data.email,
						username: res.data.username,
					})
				);
				navigate("/movies");
				toast.success(`${res.data.username} ${res.data.message}`);
			}
		} catch (err) {
			console.error("Error logging in:", err);
			toast.error("There was an error logging in.");
		} finally {
			setLoading(false);
		}
	};
	return (
		<form onSubmit={formik.handleSubmit}>
			{loading && (
				<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
					<p className="text-white">Please wait while we log you in...</p>
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
				<div className="flex mb-4 w-full items-center">
					<span className="border-b-2 border-red-300 text-blue-500 w-[28%] md:w-[20%] lg:w-[40%] "></span>
					<span className="flex justify-center  text-white text-sm  w-[70%]  md:w-[50%] lg:w-[50%] ">
						Don't have an account ?{" "}
						<span className="text-blue-500 ml-2 ">
							<Link to="/signup">Sign up</Link>
						</span>
					</span>
					<span className="border-b-2 border-red-300 text-blue-500 w-[28%] md:w-[20%] lg:w-[40%] "></span>
				</div>
				<button
					className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-300"
					onClick={handleLogin}
				>
					Sign In
				</button>
			</div>
		</form>
	);
};

export default Login;
