import React, {useEffect, useState} from "react";
import alligator from "../../../assets/alligatorActImage.jpg";
import spiderMan from "../../../assets/SpiderManBg.jpg";
// import alligatorImage2 from "../../../assets/alligatorBgM.jpg";
// import alligatorBg1 from "../../../assets/alligatorBgN.jpg";
import alligatorBg2 from "../../../assets/alligatorBgT.jpg";
import "./mainbanner.css";
import Leftbanner from "../leftbanner/leftbanner";
import Rightbanner from "../rightbanner/rightbanner";

function Mainbanner() {
	const [activeIndex, setActiveIndex] = useState(0);
	console.log(activeIndex);
	const items = [
		{
			title: "Alligator",
			time: "2hrs.45m",
			movieType: "horror",
			image: alligator,
			bgImage: alligatorBg2,
			description:
				"'Alligator' has a dedicated fanbase and is appreciated for its unique approach to the creature feature genre. ",

			buttonTrailer: "WATCH TRAILER",
			trailerUrl: "https://www.youtube.com/watch?v=4_f3-h4tGFQ",
			buttonPlay: "PLAY NOW",
			buttonWatch: "ADD TO WATCHLIST",
			words: [
				" Alligator is a cult horror movie released in 1980. Directed by Lewis Teague, the film features a storyline centered around a giant alligator that terrorizes the streets of Chicago after being flushed down a toilet as a baby alligator and growing to enormous proportions due to exposure to experimental growth hormones in the city's sewer system.",

				"Download More movies  at movie mentor .",
			],
		},
		{
			title: "Walking",
			time: "1hrs.45m",
			// image: alligatorImage1,
			bgImage: spiderMan,
			description:
				"'Alligator' has a dedicated fanbase and is appreciated for its unique approach to the creature feature genre. ",
			buttonTrailer: "WATCH TRAILER",
			buttonPlay: "PLAY NOW",
			buttonWatch: "ADD TO WATCHLIST",
			words: [
				" 'Spider-Man' centers on student Peter Parker (Tobey Maguire) who, after being bitten by a genetically-altered spider, gains superhuman strength and the spider-like ability to cling to any surface. He vows to use his abilities to fight crime, coming to understand the words of his beloved Uncle Ben: 'With great power comes great responsibility.'",

				"Download More movies  at movie mentor .",
			],
		},

		// {
		// 	title: "Weights",
		// 	time: "0hrs.45m",
		// 	image: alligatorImage2,
		// 	bgImage: alligatorBg1,
		// 	description:
		// 		"'Alligator' has a dedicated fanbase and is appreciated for its unique approach to the creature feature genre. ",
		// 	buttonTrailer: "WATCH TRAILER",
		// 	buttonPlay: "PLAY NOW",
		// 	buttonWatch: "ADD TO WATCHLIST",
		// 	words: [
		// 		" Alligator is a cult horror movie released in 1980. Directed by Lewis Teague, the film features a storyline centered around a giant alligator that terrorizes the streets of Chicago after being flushed down a toilet as a baby alligator and growing to enormous proportions due to exposure to experimental growth hormones in the city's sewer system.",

		// 		"The movie follows a police officer and a reptile expert who team up to try and stop the rampaging alligator before it causes more destruction and chaos in the city. 'Alligator' is known for its mix of horror, humor, and social commentary and has gained a following among fans of creature-feature films .",

		// 		"Download More movies  at movie mentor .",
		// 	],
		// },
		// {
		// 	title: "Wegfbgfbghts",
		// 	time: "1hrs.15m",
		// 	image: alligator,
		// 	bgImage: alligatorBg1,
		// 	description:
		// 		"'Alligator' has a dedicated fanbase and is appreciated for its unique approach to the creature feature genre. ",
		// 	buttonTrailer: "WATCH TRAILER",
		// 	buttonPlay: "PLAY NOW",
		// 	buttonWatch: "ADD TO WATCHLIST",
		// 	words: [
		// 		" Alligator is a cult horror movie released in 1980. Directed by Lewis Teague, the film features a storyline centered around a giant alligator that terrorizes the streets of Chicago after being flushed down a toilet as a baby alligator and growing to enormous proportions due to exposure to experimental growth hormones in the city's sewer system.",

		// 		"The movie follows a police officer and a reptile expert who team up to try and stop the rampaging alligator before it causes more destruction and chaos in the city. 'Alligator' is known for its mix of horror, humor, and social commentary and has gained a following among fans of creature-feature films .",

		// 		"Download More movies  at movie mentor .",
		// 	],
		// },
		// {
		// 	title: "fdsbm l b",
		// 	time: "3hrs.45m",
		// 	image: alligatorImage2,
		// 	bgImage: alligatorBg2,
		// 	description:
		// 		"'Alligator' has a dedicated fanbase and is appreciated for its unique approach to the creature feature genre. ",
		// 	buttonTrailer: "WATCH TRAILER",
		// 	buttonPlay: "PLAY NOW",
		// 	buttonWatch: "ADD TO WATCHLIST",
		// 	words: [
		// 		" Alligator is a cult horror movie released in 1980. Directed by Lewis Teague, the film features a storyline centered around a giant alligator that terrorizes the streets of Chicago after being flushed down a toilet as a baby alligator and growing to enormous proportions due to exposure to experimental growth hormones in the city's sewer system.",

		// 		"The movie follows a police officer and a reptile expert who team up to try and stop the rampaging alligator before it causes more destruction and chaos in the city. 'Alligator' is known for its mix of horror, humor, and social commentary and has gained a following among fans of creature-feature films .",

		// 		"Download More movies  at movie mentor .",
		// 	],
		// },
		// {
		// 	title: "Weights",
		// 	time: "1hrs.05m",
		// 	image: alligator,
		// 	bgImage: alligatorBg1,
		// 	description:
		// 		"'Alligator' has a dedicated fanbase and is appreciated for its unique approach to the creature feature genre. ",
		// 	buttonTrailer: "WATCH TRAILER",
		// 	buttonPlay: "PLAY NOW",
		// 	buttonWatch: "ADD TO WATCHLIST",
		// 	words: [
		// 		" Alligator is a cult horror movie released in 1980. Directed by Lewis Teague, the film features a storyline centered around a giant alligator that terrorizes the streets of Chicago after being flushed down a toilet as a baby alligator and growing to enormous proportions due to exposure to experimental growth hormones in the city's sewer system.",

		// 		"The movie follows a police officer and a reptile expert who team up to try and stop the rampaging alligator before it causes more destruction and chaos in the city. 'Alligator' is known for its mix of horror, humor, and social commentary and has gained a following among fans of creature-feature films .",

		// 		"Download More movies  at movie mentor .",
		// 	],
		// },
	];

	useEffect(() => {
		const interval = setInterval(() => {
			const newIndex = (activeIndex + 1) % items.length;
			setActiveIndex(newIndex);
		}, 35000);

		return () => clearInterval(interval);
	}, [activeIndex, items.length]);

	return (
		<div className="mainbanner  overflow-hidden">
			<div
				className=" relative flex flex-col md:flex-row   lg:min-h-[73vh] carousel"
				// style={bannerStyle}
				style={{
					display: "inline-flex",
					width: `${items.length * 100}%`,
					// transform: `translate(-${activeIndex * (100 / items.length)}%)`,
					transform: `translateX(-${(100 / items.length) * activeIndex}%)`,
				}}
			>
				{items.map((item, index) => (
					<div
						key={index}
						className="flex relative"
						style={{
							// this style made the css item take the full page
							flex: `0 0 ${100 / items.length}%`,
							opacity: index === activeIndex ? 1 : 0,
							transition: "opacity 4s ease-in-out",
							backgroundImage: `url(${item.bgImage})`,
							backgroundRepeat: "no-repeat",
							backgroundSize: "cover",
						}}
					>
						{console.log(activeIndex)}
						<div className="bg-black w-full bg-opacity-50 absolute h-full"></div>

						<Leftbanner
							item={item}
							activeIndex={activeIndex}
							className="w-full md:w-1/2 lg:w-1/2"
						/>

						<Rightbanner
							item={item}
							activeIndex={activeIndex}
							className="w-full md:w-1/2 lg:w-1/2"
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default Mainbanner;
