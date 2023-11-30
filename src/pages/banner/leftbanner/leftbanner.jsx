import React, {useEffect, useRef} from "react";
import {gsap} from "gsap";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Button from "../../../components/button/button";
gsap.registerPlugin(ScrollTrigger);

function Leftbanner({item, activeIndex}) {
	console.log(activeIndex);
	const trailerUrl = item.trailerUrl;
	const openTrailerVideo = () => {
		window.open(trailerUrl, "_blank");
	};
	let insecure = useRef(null);
	let pText = useRef(null);
	let Image = useRef(null);
	let btn = useRef(null);
	let time = useRef(null);
	useEffect(() => {
		// Define the animation
		const trigger = gsap.timeline({
			scrollTrigger: {
				trigger: Image,
				start: "bottom 0%",
				toggleActions: "play none none reverse",
			},
		});

		trigger.fromTo(
			[insecure, pText, btn, time],
			{opacity: 1, y: "25"},
			{
				opacity: 0,
				y: 10,
				stagger: 0.2,
				ease: "power2.out",
			}
		);

		// Cleanup when the component unmounts
		return () => {
			if (trigger.scrollTrigger) {
				trigger.scrollTrigger.kill();
			}
		};
	}, [activeIndex]);
	return (
		<div className="w-full md:w-1/2 px-4 lg:px-8 pt-16 flex items-start flex-col min-h-full">
			<img
				ref={(el) => (Image = el)}
				src={item.image}
				className="h-96  w-[40rem] object-cover rounded-lg "
				alt=""
			/>
			<h1
				ref={(el) => (insecure = el)}
				className=" mb-4 mt-8 md:mt-4 lg:mt-0 font-bold text-white text-2xl lg:text-5xl"
			>
				{item.title}
			</h1>
			<div className="h-[50vh] lg:h-[80vh] mb-0  md:mb-15 lg:mb-20 w-full">
				<p
					ref={(el) => (pText = el)}
					className="font-bold   mb-4 md:mb-8 text-white text-base md:text-lg"
				>
					{item.description}
				</p>
				<span ref={(el) => (time = el)} className="text-white ">
					{item.time} <span>{item.movieType} Movie</span>
				</span>
				<span ref={(el) => (btn = el)} className=" flex gap-4">
					<span>
						<Button
							icon={<PlayCircleIcon className="mr-2" />}
							buttonClassName="buttonStyle
							hover:bg-blue-900"
							text={item.buttonPlay}
						/>
					</span>
					<span>
						<Button
							buttonClassName=" buttonStyle hover:bg-gray-900 bg-gray-700 "
							text={item.buttonTrailer}
							icon={<PlayCircleIcon className="mr-2" />}
							onClick={openTrailerVideo}
						/>
					</span>
					<span>
						<Button
							buttonClassName=" buttonStyle hover:bg-transparent hover:text-blue-500
							hover:border-blue-500
							 bg-transparent border-2 cursor-pointer"
							text={item.buttonWatch}
							icon={<PlayCircleIcon className="mr-2" />}
						/>
					</span>
				</span>
			</div>
		</div>
	);
}
export default Leftbanner;
