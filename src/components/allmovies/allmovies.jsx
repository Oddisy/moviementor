import React from "react";
import Mostpopular from "../mostpopular/mostpopular";
import Trending from "../trending/trending";
import Newreleases from "../newreleases/newreleases";

function Allmovies() {
	return (
		<div className="bg-gradient-to-b rounded-tl-[1rem] from-gray-800 mt-72 md:-mt-6 lg:-mt-8 to-black">
			<div className="border-b-[1px] mt-4 border-gray-500 rounded-lg ">
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
