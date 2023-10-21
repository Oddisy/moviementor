import {useState} from "react";
import {useDispatch} from "react-redux";
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
function SignUpForm() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	// const userInfo = useSelector((state) => state.auth);
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [emailAddress, setEmailAddress] = useState("");
	const [loading, setLoading] = useState(false);
	const [onSignup] = useSignupMutation();
	const handleSubmit = async () => {
		setLoading(true);
		const postData = {
			username: userName,
			confirmPassword: confirmPassword,
			emailAddress: emailAddress,
			password: password,
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
					<Input
						value={userName}
						onChange={(e) => setUserName(e.target.value)}
						type="text"
						placeholder="NAME"
					/>
				</label>
				<label htmlFor="email">
					<Input
						value={emailAddress}
						onChange={(e) => setEmailAddress(e.target.value)}
						type="email"
						placeholder="EMAIL"
					/>
				</label>
				<label htmlFor="password">
					<Input
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						type="password"
						placeholder="PASSWORD"
					/>
				</label>
				<label htmlFor="confirmPassword">
					<Input
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						type="password"
						placeholder="CONFIRM PASSWORD"
					/>
				</label>
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
