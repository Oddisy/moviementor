import React from "react";

function Card() {
	return (
		<div className="w-full md:w-[283px] lg:w-[283px] p-4" key={items._id}>
			<Link to={`/single-movies/${items?._id}`}>
				<div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300">
					<div className="relative">
						<img
							className="w-full h-[300px] md:h-[383px] object-cover"
							src={items?.portraitImage}
							alt={items?.name}
						/>
						<div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300">
							<div className="flex flex-col justify-end h-full p-4 text-white">
								<h6 className="text-2xl font-semibold">{items?.name}</h6>
								<span className="text-sm">{items?.releaseYear}</span>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
}

export default Card;
