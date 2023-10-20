import React from "react";
import Mostpopular from "../mostpopular/mostpopular";
import Trending from "../trending/trending";
import Newreleases from "../newreleases/newreleases";

function Allmovies() {
	return (
		<div className="bg-gradient-to-b rounded-tl-[2rem] from-gray-800 to-black">
			<Mostpopular title="MOST POPULAR" />
			<Newreleases title="NEW RELEASES" />
			<Trending title="Trending" />
		</div>
	);
}

export default Allmovies;
