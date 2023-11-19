import React from "react";
import {Cursor, useTypewriter} from "react-simple-typewriter";

function Rightbanner() {
	const [text] = useTypewriter({
		words: [
			" Alligator is a cult horror movie released in 1980. Directed by Lewis Teague, the film features a storyline centered around a giant alligator that terrorizes the streets of Chicago after being flushed down a toilet as a baby alligator and growing to enormous proportions due to exposure to experimental growth hormones in the city's sewer system.",

			"The movie follows a police officer and a reptile expert who team up to try and stop the rampaging alligator before it causes more destruction and chaos in the city. 'Alligator' is known for its mix of horror, humor, and social commentary and has gained a following among fans of creature-feature films .",

			"Download More movies  at movie mentor .",
		],
		loop: true,
		typeSpeed: 80,
		deleteSpeed: 20,
		delaySpeed: 4000,
	});
	return (
		<div className="min-h-[50vh] md:min-h-[70vh] lg:min-h-[80vh] w-full md:w-1/2 p-4">
			<div className="border h-[60%] md:h-[70%] lg:h-[80%] border-white p-4 shadow-inner rounded-lg">
				<h2 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl mt-0 md:mt-15 lg:mt-20 text-white font-bold">
					<span className=" bg-opacity-90">{text}</span>
					<Cursor
						cursorBlinking="false"
						cursorStyle="|"
						cursorColor="#ff014f"
					/>
				</h2>
			</div>
		</div>
	);
}

export default Rightbanner;
