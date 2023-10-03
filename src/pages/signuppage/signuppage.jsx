import {logo} from "../../components/exports";
import SignUpForm from "../../components/form/signup";
function SignUpContainer() {
	return (
		<div className=" bg-[url('./src/assets/bgcontainer.png')] h-[1100px] bg-cover w-full">
			<div className="bg-black h-screen bg-opacity-70 flex flex-col md:flex-row items-center">
				{/* Left Side - Image and Text */}
				<div className="lg:flex items-center justify-center h-screen w-full md:w-1/2">
					<div className="h-[80vh] w-[80%]   text-white text-center">
						<div className="animate-pulse transition-transform duration-1000 w-full ">
							<img
								className="w-[37.6rem] mx-auto h-[24.8rem]"
								src={logo}
								alt="logo"
							/>
						</div>
						<div className=" mt-10">
							<h1 className="text-3xl md:text-5xl">HOME OF MOVIES</h1>
							<ul>
								<li className="list-disc">WATCH MOVIES FOR FREE</li>
								<li className="list-disc">DOWNLOAD MOVIES TO WATCH OFFLINE</li>
								<li className="list-disc">WATCH MOVIES ANYWHERE</li>
							</ul>
						</div>
					</div>
				</div>

				{/* Right Side - Signup Form */}
				<div className="w-full md:w-[50%] flex items-center flex-col justify-center">
					<div className="text-4xl md:text-6xl  text-[#ff1717] text-center mb-8">
						SIGNUP
					</div>
					{/* Form section */}
					<SignUpForm />
					{/* Form ends here */}
				</div>
			</div>
		</div>
	);
}

export default SignUpContainer;
