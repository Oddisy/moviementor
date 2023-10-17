import React from "react";

function Allmovies(portraitImage, myName) {
	return (
		<div>
			<div
				className="flex items-end w-[283px] p-4  bg-cover rounded-[68px] h-[383px]"
				style={{backgroundImage: `url(${portraitImage})`}}
			>
				<div className="w-full h-1/3">
					<h6>{myName}</h6>
				</div>
			</div>
		</div>
	);
}

export default Allmovies;
