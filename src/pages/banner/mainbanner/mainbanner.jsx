import React from "react";
import Rightbanner from "../rightbanner/rightbanner";
import Leftbanner from "../leftbanner/leftbanner";

function Mainbanner() {
	return (
		<div className="flex flex-col md:flex-row min-h-[73vh]">
			<Leftbanner className="w-full md:w-1/2" />
			<Rightbanner className="w-full md:w-1/2" />
		</div>
	);
}

export default Mainbanner;
