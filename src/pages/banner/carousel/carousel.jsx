import React, {useState, useEffect} from "react";
import "./mainbanner.css";
import Leftbanner from "../leftbanner/leftbanner";
import Rightbanner from "../rightbanner/rightbanner";

function Mainbanner() {
	const [currentIndex, setCurrentIndex] = useState(0);

	// Define your banners here or fetch them from an array or API
	const banners = [
		{
			Left: <Leftbanner className="w-full md:w-1/2" />,
			Right: <Rightbanner className="w-full md:w-1/2" />,
		},
		{
			Left: <Leftbanner className="w-full md:w-1/2" />,
			Right: <Rightbanner className="w-full md:w-1/2" />,
		},
		// Add more banner objects as needed
	];

	useEffect(() => {
		const interval = setInterval(() => {
			// Increment the index to display the next banner
			setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
		}, 5000); // Change banners every 5 seconds (adjust as needed)

		return () => clearInterval(interval);
	}, [banners.length]);

	return (
		<div className="mainbanner">
			<div className="relative flex flex-col md:flex-row lg:min-h-[73vh] carousel">
				<div className="bg-black w-full bg-opacity-50 absolute h-full"></div>
				<div className="banner-container">
					<div
						className="banner-left"
						style={{
							opacity: currentIndex === 0 ? 1 : 0,
							transition: "opacity 1s ease-in-out",
						}}
					>
						{banners[currentIndex].Left}
					</div>
					<div
						className="banner-right"
						style={{
							opacity: currentIndex === 0 ? 1 : 0,
							transition: "opacity 1s ease-in-out",
						}}
					>
						{banners[currentIndex].Right}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Mainbanner;
