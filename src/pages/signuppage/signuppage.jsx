import {logo} from "../../components/exports";
import SignUpForm from "../../components/form/signup";
function SignUpContainer() {
	return (
		<div className="bg-cover md:h-screen lg:h-screen w-full bg-bgcontainer">
			<div className="bg-black sm:h-[900px] md:h-screen bg-opacity-[0.82] flex flex-col md:flex-row items-center">
				{/* Left Side - Image and Text */}
				<div className="lg:flex items-center justify-center  w-full md:w-1/2">
					<div className=" ml-10 mb-16 md:mb-8 lg:mb-4 flex justify-center flex-col h-[50vh] w-[80%] text-white">
						<div className=" animate-pulse  transition-transform duration-[0.5s] ">
							<img className="  w-[37.6rem] h-[15.8rem]" src={logo} alt="" />
						</div>
						<div className=" mt-0 md:mt-4 lg:mt-10">
							<h1 className="text-3xl md:text-5xl">HOME OF MOVIES</h1>
							<ul>
								<li className="text-sm list-disc">WATCH MOVIES FOR FREE</li>
								<li className="text-sm list-disc">
									DOWNLOAD MOVIES TO WATCH OFFLINE
								</li>
								<li className="text-sm list-disc">WATCH MOVIES ANYWHERE</li>
							</ul>
						</div>
					</div>
				</div>

				{/* Right Side - Signup Form */}
				<div className="w-full md:w-[50%] lg:w-[70%] flex items-center flex-col justify-center">
					<div className="text-4xl md:text-6xl  text-[#ff1717] text-center mb-4">
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
