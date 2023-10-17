import React from "react";
import {useGetMoviesQuery} from "../../app/api";
import {Link} from "react-router-dom";
function Allmovies() {
	const {data} = useGetMoviesQuery();

	return (
		<div className=" bg-gradient-to-b rounded-tl-[2rem] from-gray-800 to-black   flex flex-wrap  justify-center w-[100%]  py-10 gap-4">
			{data?.data?.movies?.map((items) => {
				return (
					<div className="w-full md:w-[283px] lg:w-[283px]" key={items?._id}>
						<Link to={`/single-movies/${items?._id}`}>
							<div
								className="flex items-end w-[90%] md:w-[283px] lg:w-[283px]  mx-auto  bg-cover rounded-[68px] h-[383px]"
								style={{backgroundImage: `url(${items?.portraitImage})`}}
							>
								<div className="w-full h-1/3">
									<h6>{items?.name}</h6>
								</div>
							</div>
						</Link>
					</div>
				);
			})}
		</div>
	);
}

export default Allmovies;
