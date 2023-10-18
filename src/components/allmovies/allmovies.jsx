import React from "react";
import {useGetMoviesQuery} from "../../app/api";
import {Link} from "react-router-dom";
function Allmovies() {
	const {data} = useGetMoviesQuery();

	return (
		<div className="bg-gradient-to-b rounded-tl-[2rem] from-gray-800 to-black">
			<h2 className="p-4 text-white ml-8 font-semibold">MOST POPULAR</h2>

			<div className="    flex flex-wrap  justify-center w-[100%]  py-10 gap-4">
				{data?.data?.movies?.map((items) => {
					return (
						<div className="w-full md:w-[283px] lg:w-[283px]" key={items?._id}>
							<Link to={`/single-movies/${items?._id}`}>
								<div
									className="flex items-end w-[90%] md:w-[283px] lg:w-[283px]  mx-auto  bg-cover rounded-[68px] h-[383px] relative cardHover"
									style={{backgroundImage: `url(${items?.portraitImage})`}}
								>
									<div className=" flex items-end w-full h-full absolute p-4 rounded-[68px]   top-0 bg-black bg-opacity-50 ">
										<div className="w-full h-1/3 relative  ">
											<div className="text-white font-bold">
												<h6>{items?.name}</h6>
												<span>{items?.releaseYear}</span>
											</div>
										</div>
									</div>
								</div>
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Allmovies;
