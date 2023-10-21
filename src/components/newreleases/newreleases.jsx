import React from "react";
import {useGetMoviesQuery} from "../../app/api";
import {mapMovie} from "../allfunctions/allfunctions";
import {Link} from "react-router-dom";
function Newreleases({title}) {
	const {data, isError, isLoading} = useGetMoviesQuery();

	// If there is an error or the data is loading, display a loading message
	if (isError || isLoading) {
		return (
			<div className="absolute top-0 left-0 w-full bg-opacity-[0.96] min-h-[100vh] z-[200] overflow-y-hidden  bg-black flex flex-col justify-center items-center">
				<div className="text-center text-lg -mt-40 ">
					<h2 className="text-red-500 italic ">session timed out</h2>
					<span className="text-white">
						{" "}
						please
						<span className="text-blue-500 italic ml-2">
							<Link to="/">login</Link>{" "}
						</span>
					</span>
				</div>
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
