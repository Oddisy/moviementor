import {logo} from "../exports";
import Form from "../form/signup";

function SignUp() {
	return (
		<div className=" bg-[url('./src/assets/bgcontainer.png')] h-[1050px] md:h-screen lg:h-screen bg-cover w-full">
			<div className="bg-black h-full bg-opacity-80 flex flex-col md:flex-row items-center">
				{/* Left Side - Image and Text */}
				<div className="lg:flex flex-col-reverse items-center justify-center h-screen w-full md:w-1/2">
					<div className=" ml-14 flex justify-center flex-col  h-[80vh] w-[80%] text-white text-center">
						<div className="flex ">
							<img className="  w-[37.6rem] h-[24.8rem]" src={logo} alt="" />
						</div>
						<div className="mt-5 text-white md:mt-8 lg:mt:10">
							<h1 className="text-3xl md:text-5xl">HOME OF MOVIES</h1>
							<ul className="text-gray-300">
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
						<span className="bg-clip-text text-transparent bg-gradient-to-tr from-[#ff5e00] via-red-400 to-red-500">
							SIGN UP
						</span>
					</div>
					{/* Form section */}
					<Form />
					{/* Form ends here */}
				</div>
			</div>
		</div>
	);
}

export default SignUp;
