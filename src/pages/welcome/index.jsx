import React from "react";
import Header from "../../components/header/header";
import Button from "../../components/button/button";

import {Allmovies} from "../../components/exports";

export const WelcomePage = () => {
	return (
		<div className=" bg-gradient-to-br from-black to-gray-800 w-full h-[820px]  md:h-screen lg:h-screen">
			<Header />
			<div className="flex flex-col ">
				<div className="flex px-8 items-start flex-col h-[80vh] w-full">
					<h1 className="mb-4 mt-8 md:mt-12 lg:mt-20 font-bold text-white text-[3rem] ">
						INSECURE
					</h1>
					<div className="h-[50vh] sm:w-full md:w-1/2 lg:w-1/3 ">
						<p className=" mb-12 text-white text-lg ">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Reprehenderit quos numquam doloremque quisquam nulla incidunt
							cumque natus inventore? Quo illo perferendis libero eum, placeat
							aut at doloribus voluptates explicabo suscipit animi commodi unde
							nemo cupiditate, aliquam ipsum reprehenderit vel. Officia, amet
							reprehenderit! Maxime commodi blanditiis rem aliquam molestias
							debitis hic.
						</p>
						<span className="flex gap-4">
							<Button
								buttonClassName="bg-[#FFA470] px-8 py-2 rounded-3xl hover:bg-[#FFA494] text-sm"
								text="DOWNLOAD"
							/>
							<Button
								buttonClassName="bg-[#FFA470] px-8 py-2 rounded-3xl hover:bg-[#FFA494] text-sm"
								text="WATCH TRAILER"
							/>
						</span>
					</div>
				</div>
				{/* All movies  */}
				<Allmovies />
			</div>
		</div>
	);
};
