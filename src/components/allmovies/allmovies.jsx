import React from "react";
import {Link} from "../exports";
function Allmovies() {
	return (
		<div>
			<Link to={`/single-movies/${items?._id}`}>
				<div
					className="flex items-end w-[283px] p-4  bg-cover rounded-[68px] h-[383px]"
					style={{backgroundImage: `url(${items?.portraitImage})`}}
				>
					<div className="w-full h-1/3">
						<h6>{items?.name}</h6>
					</div>
				</div>
			</Link>
		</div>
	);
}

export default Allmovies;
