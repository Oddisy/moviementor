import React from "react";
import Input from "../input/input";

function Header() {
	return (
		<div className="flex flex-col md:flex-row md:items-center">
			<div className="md:w-1/2">
				<div className="w-full md:w-[70%] flex justify-between items-baseline ">
					<span className=" text-2xl text-red-500 font-bold mr-2 lg:text-3xl">
						MovieMentor
					</span>{" "}
					<span className="font-bold text-white mr-2">HOME</span>
					<select className="border font-bold text-sm outline-none border-white  px-2 bg-transparent rounded-3xl ">
						<option value="" disabled selected>
							MOVIES
						</option>
						<option value="movies">ACTION</option>
						<option value="movies">HORROR</option>
						<option value="movies">COMEDY</option>
					</select>
				</div>
			</div>
			<div className="relative w-full md:w-1/2 mt-4 md:mt-0">
				<Input
					placeholder="SEARCH"
					inputClassName="w-full md:w-[526px] pl-4 md:pl-20 text-gray-50 bg-transparent border border-white focus:border-white"
				/>
			</div>
		</div>
	);
}

export default Header;
