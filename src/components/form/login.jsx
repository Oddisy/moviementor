import React from "react";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {useLoginMutation} from "../../app/api";
import {toast} from "react-hot-toast";
import {setUserValues} from "../../redux/authSlice";
import {useNavigate} from "react-router-dom";
function Login() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(false);
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [onLogin] = useLoginMutation();

	const handleLogin = async () => {
		setLoading(true);
		try {
			const postData = {
				username: username,
				password: password,
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
		<div>
			{loading && (
				<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
					<p className="text-white">Please wait while we log you in...</p>
				</div>
			)}
			<input
				className="w-full border rounded-lg px-4 py-2 mb-4"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				type="text"
				placeholder="Username"
			/>
			<input
				className="w-full border rounded-lg px-4 py-2 mb-4"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				type="password"
				placeholder="Password"
			/>
			<button
				className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-300"
				onClick={handleLogin}
			>
				Sign In
			</button>
		</div>
	);
}

export default Login;
