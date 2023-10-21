import React, {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Button from "../../../components/button/button";
gsap.registerPlugin(ScrollTrigger);

function Leftbanner() {
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
	}, []);
	return (
		<div className="w-full md:w-1/2 px-4 lg:px-8 flex items-start flex-col min-h-full">
			<h1
				ref={(el) => (insecure = el)}
				className=" mb-4 mt-8 md:mt-12 lg:mt-16 font-bold text-white text-2xl lg:text-5xl"
			>
				Aligator
			</h1>
			<div className="h-[50vh] lg:h-[80vh] mb-0  md:mb-15 lg:mb-20 w-full">
				<p
					ref={(el) => (pText = el)}
					className="font-bold  mb-4 md:mb-8 text-gray-300 text-base md:text-lg"
				>
					"Alligator" has a dedicated fanbase and is appreciated for its unique
					approach to the creature feature genre. The film's success led to a
					sequel, "Alligator II: The Mutation," released in 1991. However, the
					sequel did not achieve the same level of popularity as the original.
					"Alligator" remains a cult classic that has endured over the years,
					and it's often recommended for fans of B-movie horror and creature
					films.
				</p>
				<span ref={(el) => (btn = el)} className=" flex gap-4">
					<Button buttonClassName="buttonStyle" text="DOWNLOAD" />
					<Button buttonClassName=" buttonStyle " text="WATCH TRAILER" />
				</span>
			</div>
		</div>
	);
}
export default Leftbanner;
