import React, {useRef, useEffect} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Header from "../../components/header/header";
import Button from "../../components/button/button";
// import homeVideo from "../../assets/sea.mp4";
import {Allmovies} from "../../components/exports";

export const WelcomePage = () => {
	let container = useRef(null);
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
				stagger: 0.3,
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
		<div ref={(el) => (container = el)} className=" movieContainerStyle">
			<Header />
			<div className="flex flex-col ">
				<div className="flex">
					<div className="flex px-8 items-start flex-col min-h-[73vh] w-full">
						<h1
							ref={(el) => (insecure = el)}
							className=" opacity-[1] mb-4 mt-8 md:mt-12 lg:mt-20 font-bold text-white text-[3rem] "
						>
							INSECURE
						</h1>
						<div className="h-[50vh] sm:w-full md:w-1/2 lg:w-1/3 ">
							<p
								ref={(el) => (pText = el)}
								className=" opacity-[1] mb-12 text-white text-lg "
							>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit.
								Reprehenderit quos numquam doloremque quisquam nulla incidunt
								cumque natus inventore? Quo illo perferendis libero eum, placeat
								aut at doloribus voluptates explicabo suscipit animi commodi
								unde nemo cupiditate, aliquam ipsum reprehenderit vel. Officia,
								amet reprehenderit! Maxime commodi blanditiis rem aliquam
								molestias debitis hic.
							</p>
							<span
								ref={(el) => (btn = el)}
								className=" opacity-[1] flex gap-4"
							>
								<Button
									buttonClassName="bg-[#FFA470] flex items-center px-8 py-2 rounded-3xl hover:bg-[#FFA494] text-sm"
									text="DOWNLOAD"
								/>
								<Button
									buttonClassName="bg-[#FFA470] items-center px-8 py-2 rounded-3xl hover:bg-[#FFA494] text-sm"
									text="WATCH TRAILER"
								/>
							</span>
						</div>
					</div>
					{/* change this video  */}
					{/* <div className=""> */}
					{/* <video className="" autoPlay loop muted id="myVideo"> */}
					{/* Set the src attribute to the imported video asset */}
					{/* <source src={homeVideo} type="video/mp4" />
							Your browser does not support the video tag.
						</video> */}
					{/* </div> */}
				</div>
				{/* All movies  */}
				<Allmovies />
			</div>
		</div>
	);
};
