import React from "react";
import {useGetMoviesByIdQuery} from "../../app/api";
import {useParams} from "react-router-dom";
export const SingleMovie = () => {
	const {id} = useParams();
	const {data} = useGetMoviesByIdQuery({
		id: id,
	});
	return <div>illlndex</div>;
};
