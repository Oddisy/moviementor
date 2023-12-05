import {useState} from "react";
import {useDispatch} from "react-redux";
import {useFormik} from "formik";
import * as Yup from "yup";
import {useSignupMutation} from "../../../app/api";
import "./signup.css";
import {
	setLoginEmailValues,
	setLoginUserNameValues,
} from "../../../redux/authSlice";
import {useNavigate} from "react-router-dom";
import {toast} from "react-hot-toast";
import Input from "../../input/input";
import {Link} from "react-router-dom";
const initialValues = {
	username: "",
	email: "",
	password: "",
	confirmPassword: "",
};

function SignUpForm() {
	// logic for form validation
	const validationSchema = Yup.object().shape({
		username: Yup.string().required("Username is required"),
		email: Yup.string()
			.email("Invalid email address.")
			.required("Email is required."),
		password: Yup.string()
			.min(8, "Password must be at least 8 characters.")
			.required("Password is required."),

		confirmPassword: Yup.string()
			.oneOf([Yup.ref("password."), null], "Passwords must match.")
			.required("Please confirm your password."),
	});
	//   validationSchema ends here
	const navigate = useNavigate();
	const dispatch = useDispatch();
	// const userInfo = useSelector((state) => state.auth);
	const [loading, setLoading] = useState(false);
	const [onSignup] = useSignupMutation();
	const formik = useFormik({
		initialValues,
		validationSchema,
	});
	const handleSubmit = async () => {
		setLoading(true);
		const postData = {
			username: formik.values.username,
			confirmPassword: formik.values.confirmPassword,
			emailAddress: formik.values.emailAddress,
			password: formik.values.password,
		};
		try {
			const res = await onSignup(postData);
			if (res) {
				dispatch(
					setLoginEmailValues({
						email: res?.data.data.newUser.emailAddress,
					})
				);
				dispatch(
					setLoginUserNameValues({
						username: res?.data.data.newUser.username,
					})
				);
				navigate("/");
				setLoading(false);
				toast.success(res.status ?? "you have successfully created an account");
			}
		} catch (err) {
			toast.error("there was an error: ", err);
			setLoading(false);
		}
	};

	return (
		<>
			{loading && (
				<div className="loading-container">
					<div className="loading-ring"></div>
					<p className="loading-text">
						Please wait while we create your account
					</p>
				</div>
			)}
			<div className="flex p-[20px] lg:p-0 w-[95%] flex-col gap-4 ">
				<label htmlFor="text">
					x{" "}
					<Input
						value={formik.values.username}
						onBlur={formik.handleBlur("username")}
						onChange={formik.handleChange("username")}
						type="text"
						placeholder="username"
					/>
					{formik.touched.username && formik.errors.username ? (
						<div className="text-red-700 text-[0.8rem] italic  -mt-2">
							{" "}
							{formik.errors.username}{" "}
						</div>
					) : null}
				</label>
				<label htmlFor="email">
					<Input
						value={formik.values.emailaddress}
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
						type="email"
						placeholder="email"
					/>
					{formik.touched.email && formik.errors.email ? (
						<div className="text-red-700 text-[0.8rem] italic mt-1">
							{" "}
							{formik.errors.email}{" "}
						</div>
					) : null}
				</label>
				{/* <label htmlFor="password">
					<Input
						value={formik.values.password}
						onBlur={formik.handleBlur("password")}
						// onChange={formik.handleChange("password")}
						type="password"
						placeholder="password"
					/>
				</label> */}
				{/* <label htmlFor="confirmPassword">
					<Input
						value={formik.values.confirmPassword}
						onBlur={formik.handleBlur}
						onChange={formik.handleChange}
						type="password"
						placeholder="confirm password"
					/>
					{formik.touched.confirmPassword && formik.errors.confirmPassword ? (
						<div className="text-red-700 text-[0.8rem] italic  mt-1">
							{" "}
							{formik.errors.confirmPassword}{" "}
						</div>
					) : null}
				</label> */}
				<div className="flex flex-col">
					<div className="flex mb-4 w-full items-baseline">
						<span className="border-b-2 border-red-300 text-blue-500 w-[13%] md:w-[20%] lg:w-[30%] "></span>
						<span className="flex justify-center  text-white text-sm  w-[90%]  md:w-[50%] lg:w-[50%] ">
							Already have an account ?{" "}
							<span className="text-blue-500 ml-2 ">
								<Link to="/">Login</Link>
							</span>
						</span>
						<span className="border-b-2 border-red-300 text-blue-500 w-[13%] md:w-[20%] lg:w-[30%] "></span>
					</div>
					<button
						className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-300"
						onClick={handleSubmit}
					>
						Sign In
					</button>
				</div>
			</div>
		</>
	);
}

export default SignUpForm;
