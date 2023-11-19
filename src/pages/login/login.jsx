// import {useState} from "react";
// import {useDispatch} from "react-redux";
// import {useLoginMutation} from "../../app/api";
// import {toast} from "react-hot-toast";
// import {setUserValues} from "../../redux/authSlice";
// import {useNavigate} from "react-router-dom";
// import {logo} from "../../components/exports";
// import Input from "../../components/input/input";
// // import Login from "../../components/form/login";
// export const LoginScreen = () => {
// 	const navigate = useNavigate();
// 	const dispatch = useDispatch();
// 	const [loading, setLoading] = useState(false);
// 	const [password, setPassword] = useState("");
// 	const [username, setUsername] = useState("");
// 	const [email, setEmail] = useState("");
// 	const [onLogin] = useLoginMutation();

// 	const handleLogin = async () => {
// 		setLoading(true);
// 		try {
// 			const postData = {
// 				username: username,
// 				password: password,
// 			};
// 			const res = await onLogin(postData);
// 			if (res) {
// 				dispatch(
// 					setUserValues({
// 						token: res.data.token,
// 						email: res.data.email,
// 						username: res.data.username,
// 					})
// 				);
// 				navigate("/movies");
// 				toast.success(`${res.data.username} ${res.data.message}`);
// 			}
// 		} catch (err) {
// 			console.error("Error logging in:", err);
// 			toast.error("There was an error logging in.");
// 		} finally {
// 			setLoading(false);
// 		}
// 	};

// 	return (
// 		<div className=" bg-bgcontainer flex h-[1050px] md:h-screen lg:h-screen bg-cover w-full">
// 			{loading && (
// 				<div className=" h-[550px] md:h-screen lg:h-screen absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center">
// 					<p className="text-white font-serif font-bold">
// 						{" "}
// 						Please wait... while we create an account{" "}
// 					</p>
// 				</div>
// 			)}
// 			<div className="bg-black h-full w-full bg-opacity-70 flex flex-col md:flex-row items-center">
// 				<div className=" ml-10 flex justify-center flex-col  h-[80vh] w-[80%] text-white">
// 					<div className=" animate-pulse  transition-transform duration-[0.5s] ">
// 						<img className="  w-[37.6rem] h-[24.8rem]" src={logo} alt="" />
// 					</div>
// 					<div className="mt-4 text-white md:mt-8 lg:mt:10">
// 						<h1 className=" mb-4 text-3xl  md:text-5xl">HOME OF MOVIES</h1>
// 						<ul className=" text-gray-300">
// 							<li className="list-disc">WATCH MOVIES FOR FREE</li>
// 							<li className="list-disc">DOWNLOAD MOVIES TO WATCH OFFLINE</li>
// 							<li className="list-disc">WATCH MOVIES ANYWHERE</li>
// 						</ul>
// 					</div>
// 				</div>
// 				<div className=" w-[95%] md:w-1/2 lg:w-1/2 flex items-center flex-col">
// 					<div className="text-4xl md:text-6xl bg-gradient-to-tr  text-[#ff1717] text-center mb-8">
// 						<span className="bg-clip-text text-transparent bg-gradient-to-tr from-[#ff5e00] via-red-400 to-red-500">
// 							Login
// 						</span>
// 					</div>
// 					<div className="w-[80%]">
// 						{/* <Login /> */}
// 						{/* <Input
// 							inputClassName="w-[80%]"
// 							value={username}
// 							onChange={(e) => setUsername(e.target.value)}
// 							type="text"
// 							placeholder="Username"
// 						/>
// 						<Input
// 							value={password}
// 							onChange={(e) => setPassword(e.target.value)}
// 							type="password"
// 							placeholder="Password"
// 						/>
// 						<button
// 							className="w-full bg-red-600  text-white py-2 rounded-3xl hover:bg-red-700 transition duration-300"
// 							onClick={handleLogin}
// 						>
// 							Sign In
// 						</button> */}
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };
