import React, {useRef, useEffect} from "react";
import Header from "../../components/header/header";
import {Allmovies} from "../../components/exports";
import Mainbanner from "../banner/mainbanner/mainbanner";

export const WelcomePage = () => {
	return (
		<div className=" movieContainerStyle">
			<Header />
			<div className="flex flex-col pt-40 md:pt-24 lg:pt-20 ">
				<div>
					<Mainbanner />
				</div>
				{/* All movies  */}
				<Allmovies />
			</div>
		</div>
	);
};
