import React from "react";
import Input from "../input/input";
import {Link} from "react-router-dom";

function Header() {
	return (
		<div className="flex items-center p-4 flex-col fixed z-50 top-0 w-full md:flex-row md:items-center bg-gradient-to-b from-black to-gray-600">
			<div className="md:w-1/2">
				<div className="w-full md:w-[70%] flex justify-between items-baseline ">
					<span className=" text-2xl text-red-500 font-bold mr-2 lg:text-3xl">
						MovieMentor
					</span>{" "}
					<Link>
						<span className="font-bold text-white mr-2">HOME</span>
					</Link>
					<Link>
						<span className="font-bold text-white mr-2">About</span>
					</Link>
					<select
						value="option1"
						className="border text-white  font-bold text-sm outline-none border-white  px-2 bg-transparent rounded-3xl "
					>
						<option value="option1">MOVIES</option>
						<option value="option1">ACTION</option>
						<option value="option2">HORROR</option>
						<option value="option3">COMEDY</option>
					</select>
				</div>
			</div>
			<div className=" relative w-full h-auto md:w-1/2 mt-8 md:mt-0">
				<Input
					placeholder="SEARCH"
					inputClassName="w-full md:w-[526px] pl-4 md:pl-20 text-gray-50 bg-transparent border white-border-focus"
				/>
			</div>
		</div>
	);
}

export default Header;
