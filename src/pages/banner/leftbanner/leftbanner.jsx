import React, {useEffect, useRef} from "react";
import {gsap} from "gsap";
import alligator from "../../../assets/AlligatorBg.jpg";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Button from "../../../components/button/button";
gsap.registerPlugin(ScrollTrigger);

function Leftbanner() {
	const videoUrl = "https://www.youtube.com/watch?v=4_f3-h4tGFQ";

	const openVideo = () => {
		window.open(videoUrl, "_blank");
	};
	let insecure = useRef(null);
	let pText = useRef(null);
	let btn = useRef(null);
	useEffect(() => {
		// Define the animation
		const trigger = gsap.timeline({
			scrollTrigger: {
				trigger: pText,
				start: "top 0%",
				toggleActions: "reverse none none play",
			},
		});

		trigger.fromTo(
			[insecure, pText, btn],
			{opacity: 0, y: "25"},
			{
				opacity: 1,
				y: 0,
				stagger: 0.4,
				ease: "power2.out",
			}
		);

		// Cleanup when the component unmounts
		return () => {
			if (trigger.scrollTrigger) {
				trigger.scrollTrigger.kill();
			}
		};
	}, [insecure, pText, btn]);
	return (
		<div className="w-full md:w-1/2 px-4 lg:px-8 pt-16 flex items-start flex-col min-h-full">
			<img
				src={alligator}
				className="h-96 w-[40rem] object-cover rounded-lg "
				alt=""
			/>
			<h1
				ref={(el) => (insecure = el)}
				className=" mb-4 mt-8 md:mt-12 lg:mt-16 font-bold text-white text-2xl lg:text-5xl"
			>
				Aligator
			</h1>
			<div className="h-[50vh] lg:h-[80vh] mb-0  md:mb-15 lg:mb-20 w-full">
				<p
					ref={(el) => (pText = el)}
					className="font-bold   mb-4 md:mb-8 text-white text-base md:text-lg"
				>
					"Alligator" has a dedicated fanbase and is appreciated for its unique
					approach to the creature feature genre.
				</p>
				<span className="text-white ">
					2hrs.45m <span>Action Movie</span>
				</span>
				<span ref={(el) => (btn = el)} className=" flex gap-4">
					<span>
						<Button
							icon={<PlayCircleIcon className="mr-2" />}
							buttonClassName="buttonStyle"
							text="PLAY NOW"
						/>
					</span>
					<span>
						<Button
							buttonClassName=" buttonStyle bg-gray-700 "
							text="WATCH TRAILER"
							icon={<PlayCircleIcon className="mr-2" />}
							onClick={openVideo}
						/>
					</span>
					<span>
						<Button
							buttonClassName=" buttonStyle bg-transparent border-2 cursor-pointer"
							text="ADD TO WATCHLIST"
							icon={<PlayCircleIcon className="mr-2" />}
						/>
					</span>
				</span>
			</div>
		</div>
	);
}
export default Leftbanner;
