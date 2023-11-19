import React from "react";
import alligator from "../../../assets/alligatorBgT.jpg";
import Rightbanner from "../rightbanner/rightbanner";
import Leftbanner from "../leftbanner/leftbanner";

function Mainbanner() {
	const bannerStyle = {
		backgroundImage: `url(${alligator})`,
		backgroundSize: "contain",
		backgroundPosition: "center",
	};
	return (
		<div
			className=" relative flex flex-col md:flex-row min-h-[73vh]"
			style={bannerStyle}
		>
			<div className=" bg-black w-full bg-opacity-60 absolute h-full"></div>
			{/* <img src={alligator} alt="" /> */}
			<Leftbanner className="w-full md:w-1/2" />
			<Rightbanner className="w-full md:w-1/2" />
		</div>
	);
}

export default Mainbanner;
