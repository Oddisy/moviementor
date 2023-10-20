import React from "react";
import {useGetMoviesQuery} from "../../app/api";
import {mapMovie} from "../allfunctions/allfunctions";
function Trending({title}) {
	const {data, isError, isLoading} = useGetMoviesQuery();

	// If there is an error or the data is loading, display a loading message
	if (isError || isLoading) {
		return <div></div>;
	}
	const mappedMovies = mapMovie({
		api: data?.data?.movies,
		startIndex: 1,
		endIndex: 9,
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

export default Trending;
