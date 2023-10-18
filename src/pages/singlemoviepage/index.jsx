import React from "react";
import {useGetMoviesByIdQuery} from "../../app/api";
import {useParams} from "react-router-dom";
import Header from "../../components/header/header";
export const SingleMoviePage = () => {
	const {id} = useParams();
	const {data} = useGetMoviesByIdQuery({
		id: id,
	});
	console.log(data);
	return (
		<div className="movieContainerStyle">
			<Header />
			<div className="flex">
				<div></div>
				<div>
					<h2>SUMMARY</h2>
					{/* <P>{data.summary}</P> */}
				</div>
			</div>
		</div>
	);
};
