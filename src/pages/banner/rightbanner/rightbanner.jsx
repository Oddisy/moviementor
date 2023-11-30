import React, {useState, useEffect, useCallback} from "react";
import {Cursor, useTypewriter} from "react-simple-typewriter";

function Rightbanner({item, activeIndex}) {
	console.log(activeIndex);

	const [words, setWords] = useState(item.words);
	const [typing, setTyping] = useState(true);

	const handleTyping = useCallback(() => {
		setTyping(true);
		setTimeout(() => {
			setTyping(false);
		}, 4000);
	}, []);

	useEffect(() => {
		setWords(item.words);
		handleTyping();
	}, [item.words, handleTyping]);

	const [text] = useTypewriter({
		words: words,
		loop: true,
		typeSpeed: 80,
		deleteSpeed: 20,
		delaySpeed: 4000,
		typing: typing,
	});

	return (
		<div className="min-h-[62vh] lg:absolute lg:right-0  mt-0 lg:mt-12  md:min-h-[70vh] lg:min-h-[80vh] w-full md:w-1/2 lg:w-1/2 p-4">
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
