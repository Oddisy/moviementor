import React from "react";
import {useGetMoviesQuery} from "../../app/api";
import Header from "../../components/header/header";

export const WelcomePage = () => {
	const {data, isLoading} = useGetMoviesQuery();
	console.log(data);
	return (
		<div className="bg-red-500 w-full h-screen">
			<Header />
		</div>
	);
};
