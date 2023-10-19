import React from "react";
import {useGetMoviesQuery} from "../../app/api";
import {Link} from "react-router-dom";
function Mostpopular() {
	const {data} = useGetMoviesQuery();
	console.log(data);
	return (
		<div>
			<h2 className="p-4 text-white ml-8 font-semibold">MOST POPULAR</h2>

			<div className="    flex flex-wrap  justify-center w-[100%]  py-10 gap-8">
				{data?.data?.movies?.slice(0, 8).map((items) => {
					return (
						<div className="w-full md:w-[283px] lg:w-[283px]" key={items?._id}>
							<Link to={`/single-movies/${items?._id}`}>
								<div
									className="flex items-end w-[90%] md:w-[283px] lg:w-[283px]  mx-auto  bg-cover rounded-[30px] h-[383px] relative "
									style={{backgroundImage: `url(${items?.portraitImage})`}}
								>
									<div className=" flex items-end w-full h-full  cardHover absolute p-4 rounded-[30px]    top-0 bg-black bg-opacity-40 ">
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

export default Mostpopular;
