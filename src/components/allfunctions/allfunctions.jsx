import {Link} from "react-router-dom";
import cn from "classnames";

Link;
// Define functions
export function myFunction() {
	// Function logic here
}

export function mappedCard() {
	// Another function logic here
}

// function to map all movies com
export function mapMovie({api, startIndex, endIndex, mappedCard}) {
	const movieList = api.slice(startIndex, endIndex); // get the slice of array between 2 indexes (inclusive)
	return (
		<div
			className={cn("flex", {
				"flex-wrap justify-center gap-8": startIndex !== 8 && endIndex !== 1, // Default style
				"w-[100%] gap-4 justify-center flex-wrap":
					startIndex === 8 && endIndex === 11,
			})}
		>
			{movieList.map((items) => {
				return (
					<div className="w-full md:w-[283px] lg:w-[283px] p-4" key={items._id}>
						<Link to={`/single-movies/${items?._id}`}>
							<div className="bg-gray-900 rounded-lg overflow-hidden  transform hover:scale-105 transition duration-300">
								<div className="relative">
									<img
										className="w-full h-[300px] md:h-[383px] object-cover"
										src={items?.portraitImage}
										alt={items?.name}
									/>
									<div className="absolute inset-0 bg-black bg-opacity-40 hover:bg-opacity-80 transition-opacity duration-300">
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
			})}
		</div>
	);
}
