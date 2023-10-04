import {backgroundImage, logo} from "../../components/exports";
import SignUpForm from "../../components/form/signup";
function SignUpContainer() {
	// bg-[url('./src/assets/bgcontainer.png')
	// bg-[url('./src/components/assets/bgcontainer.png')]

	return (
		<div className="bg-cover h-[1050px] md:h-[1050px] lg:h-screen w-full bg-bgContainer">
			<div className="bg-black md:h-[1050px] bg-opacity-70 flex flex-col md:flex-row items-center">
				{/* Left Side - Image and Text */}
				<div className="lg:flex items-center justify-center  w-full md:w-1/2">
					<div className=" ml-10 mb-16 flex justify-center flex-col h-[55vh] w-[80%] text-white">
						<div className=" animate-pulse  transition-transform duration-[0.5s] ">
							<img className="  w-[37.6rem] h-[24.8rem]" src={logo} alt="" />
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
				<div className="w-full mt-20 md:w-[50%] flex items-center flex-col justify-center">
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
