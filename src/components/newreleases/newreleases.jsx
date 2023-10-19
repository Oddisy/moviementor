import React from "react";
import {useGetMoviesQuery} from "../../app/api";
import {mapMovie} from "../allfunctions/allfunctions";
function Newreleases({title}) {
	const {data, isError, isLoading} = useGetMoviesQuery();

	// If there is an error or the data is loading, display a loading message
	if (isError || isLoading) {
		return (
			<div>
				<h2 className="p-4 text-white ml-8 font-semibold">NO API</h2>
				<p>Loading...</p>
			</div>
		);
	}
	const mappedMovies = mapMovie({
		api: data?.data?.movies,
		startIndex: 8,
		endIndex: 11,
	});

	return (
		<div>
			<h2 className="p-4 text-white ml-8 font-semibold">{title}</h2>
			<div className=" fleX flex-col flex-wrap  justify-center w-[100%]  py-10 gap-8 md:flex lg:flex">
				{mappedMovies}
			</div>
		</div>
	);
}

export default Newreleases;
