import React from "react";
import "./mainbanner.css";
import Leftbanner from "../leftbanner/leftbanner";
import Rightbanner from "../rightbanner/rightbanner";

function Mainbanner() {
	const bannerStyle = {
		backgroundSize: "cover",
		backgroundPosition: "center",
	};

	return (
		<div className="mainbanner">
			<div
				className="relative flex flex-col md:flex-row   lg:min-h-[73vh] carousel"
				style={bannerStyle}
			>
				<div className="bg-black w-full bg-opacity-50 absolute h-full"></div>

				<Leftbanner className="w-full md:w-1/2" />
				<Rightbanner className="w-full md:w-1/2" />
			</div>
		</div>
	);
}

export default Mainbanner;
