import React, {useRef, useEffect} from "react";
import Header from "../../components/header/header";
import {Allmovies} from "../../components/exports";
// import AutoSlideCarousel from "../banner/carousel/carousel";
import Mainbanner from "../banner/mainbanner/mainbanner";

export const WelcomePage = () => {
	return (
		<div className=" movieContainerStyle">
			<Header />
			<div className="flex flex-col pt-32 md:pt-24 lg:pt-20 ">
				<Mainbanner />

				{/* All movies  */}
				<Allmovies />
			</div>
		</div>
	);
};
