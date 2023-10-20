import React from "react";
import Mostpopular from "../mostpopular/mostpopular";
import Trending from "../trending/trending";
import Newreleases from "../newreleases/newreleases";

function Allmovies() {
	return (
		<div className="bg-gradient-to-b rounded-tl-[2rem] from-gray-800 -mt-14 to-black">
			<div className="border-b-[1px] border-gray-500 rounded-lg p-4">
				<Mostpopular title="MOST POPULAR" />
			</div>
			<div className="border-b-[1px] border-gray-500 rounded-lg p-4">
				<Newreleases title="NEW RELEASES" />
			</div>
			<div className="border-b-[1px] border-gray-500 rounded-lg p-4">
				<Trending title="Trending" />
			</div>
		</div>
	);
}

export default Allmovies;
