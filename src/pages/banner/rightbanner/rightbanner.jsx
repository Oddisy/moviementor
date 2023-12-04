import React, {useState, useEffect} from "react";
import {Cursor, useTypewriter} from "react-simple-typewriter";

function Rightbanner({item, activeIndex}) {
	const [storedActiveIndex, setStoredActiveIndex] = useState(null);
	const [words, setWords] = useState(item.words);
	const [typing, setTyping] = useState(true);
	const [key, setKey] = useState(0); // State to reset the typewriter

	useEffect(() => {
		setStoredActiveIndex(activeIndex); // Update storedActiveIndex when activeIndex changes
	}, [activeIndex]);

	useEffect(() => {
		setWords(item.words); // Update words when item changes
	}, [item]);

	useEffect(() => {
		// Toggle typing based on storedActiveIndex changes
		if (storedActiveIndex === null) {
			setTyping(true);
		} else {
			setTyping(false);
		}
	}, [storedActiveIndex]);

	useEffect(() => {
		// Reset the typing animation when item.title changes
		setKey((prevKey) => prevKey + 1);
	}, [item.title]);

	const [text] = useTypewriter({
		key: key, // Key change restarts typewriter
		words: words,
		loop: true,
		typeSpeed: 80,
		deleteSpeed: 20,
		delaySpeed: 4000,
		typing: typing,
	});

	return (
		<div className="min-h-[62vh] lg:absolute lg:right-0 mt-0 lg:mt-12 md:min-h-[70vh] lg:min-h-[80vh] w-full md:w-1/2 lg:w-1/2 p-4">
			<div className="border h-[60%] md:h-[70%] lg:h-[80%] border-white p-4 shadow-inner rounded-lg">
				<h2 className="text-lg md:text-2xl lg:text-3xl xl:text-4xl mt-0 md:mt-15 lg:mt-20 text-white font-bold">
					<span className="text-white">{text}</span>
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
