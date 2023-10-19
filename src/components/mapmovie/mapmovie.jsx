import React from "react";

function Mapmovie({movies, startIndex, endIndex}) {
	return (
		<div>
			{movies.slice(startIndex, endIndex).map((items) => {
				return (
					// mapping logic here
					<div className="w-full md:w-[283px] lg:w-[283px]" key={items?._id}>
						<Link to={`/single-movies/${items?._id}`}>
							<div
								className="flex items-end w-[90%] md:w-[283px] lg:w-[283px]  mx-auto  bg-cover rounded-[68px] h-[383px] relative cardHover"
								style={{backgroundImage: `url(${items?.portraitImage})`}}
							>
								<div className=" flex items-end w-full h-full absolute p-4 rounded-[68px]   top-0 bg-black bg-opacity-30 ">
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
	);
}

export default Mapmovie;
