import React, {useState} from "react";
import Input from "../input/input";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import {Link} from "react-router-dom";
import {clearToken} from "../../redux/authSlice";
import {useDispatch} from "react-redux";

function Header() {
	const [showProfile, setShowProfile] = useState(false);
	const [showHamProfile, setShowHamProfile] = useState(false);
	const dispatch = useDispatch();
	const handleLogout = () => {
		dispatch(clearToken()); // Dispatch the clearToken action
		setShowProfile(false); // Hide the profile section after logout
	};
	return (
		<div className="flex items-center  p-2 flex-col  fixed z-50 top-0 w-full md:flex-col lg:flex-row md:items-center bg-gradient-to-b from-black to-gray-600">
			<div className="w-[90%] flex justify-center  lg:w-1/2">
				<div className="w-full md:w-[70%] flex justify-between items-baseline ">
					<span className=" text-2xl text-red-500 font-bold mr-2 lg:text-3xl">
						MovieMentor
					</span>{" "}
					<Link>
						<span className="font-bold hidden lg:block text-white mr-2">
							HOME
						</span>
					</Link>
					<Link>
						<span className="font-bold hidden lg:block text-white mr-2">
							About
						</span>
						<span>
							<button
								onClick={() => {
									setShowHamProfile(!showHamProfile);
								}}
								className="block cursor-pointer  text-white md:block lg:hidden "
							>
								<MenuIcon />
							</button>
							{showHamProfile && (
								<div className=" w-80 top-16 right-16 text-gray-900 bg-slate-200 rounded-lg min-h-[10rem] absolute">
									<h3 className="profileHover">sdfnkjjk</h3>
									<h3 className="profileHover">sdfnkjjk</h3>
									<h3 className="profileHover">sdfnkjjk</h3>
									<h3 className="profileHover">sdfnkjjk</h3>
									<h3 className="profileHover">sdfnkjjk</h3>
									<button onClick={handleLogout} className="profileHover">
										log out
									</button>
								</div>
							)}
						</span>
					</Link>
					<select
						value="option1"
						className="  border text-white hidden lg:block  font-bold text-sm outline-none border-white  px-2 bg-transparent rounded-3xl "
					>
						<option value="option1">MOVIES</option>
						<option value="option1">ACTION</option>
						<option value="option2">HORROR</option>
						<option value="option3">COMEDY</option>
					</select>
				</div>
			</div>
			<div className=" flex items-center w-[80%] md:ml-28 lg:w-1/2 relative  h-auto justify-between ">
				<Input
					placeholder="SEARCH"
					inputClassName="w-full md:w-[526px] h-full h-[70%] mt-2 pl-4  flex items-center  md:pl-20 text-gray-50 bg-transparent border white-border-focus"
				/>

				<div className=" relative text-white  flex items-center w-44 h-20    ">
					<button
						onClick={() => {
							setShowProfile(!showProfile);
						}}
						className=" w-full hidden lg:block cursor-pointer"
					>
						<AccountCircleIcon className="  text-white  text-[10rem]" />
					</button>
					{showProfile && (
						<div className=" w-80 top-16 right-16 text-gray-900 bg-slate-200 rounded-lg min-h-[10rem] absolute">
							<h3 className="profileHover">sdfnkjjk</h3>
							<h3 className="profileHover">sdfnkjjk</h3>
							<h3 className="profileHover">sdfnkjjk</h3>
							<h3 className="profileHover">sdfnkjjk</h3>
							<h3 className="profileHover">sdfnkjjk</h3>
							<button onClick={handleLogout} className="profileHover">
								log out
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Header;
