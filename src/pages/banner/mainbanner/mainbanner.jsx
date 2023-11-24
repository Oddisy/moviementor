import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./mainbanner.css";
import Leftbanner from "../leftbanner/leftbanner";
import Rightbanner from "../rightbanner/rightbanner";

function Mainbanner() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 2500, // Slide transition duration
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true, // Enable autoplay
		autoplaySpeed: 3000, // Set autoplay speed to 3 seconds (3000ms)
	};
	const bannerStyle = {
		backgroundSize: "cover",
		backgroundPosition: "center",
	};

	return (
		<div
			className="relative flex flex-col md:flex-row   lg:min-h-[73vh] carousel"
			style={bannerStyle}
		>
			<div className="bg-black w-full bg-opacity-50 absolute h-full"></div>

			<Leftbanner className="w-full md:w-1/2" />
			<Rightbanner className="w-full md:w-1/2" />
		</div>
	);
}

export default Mainbanner;
