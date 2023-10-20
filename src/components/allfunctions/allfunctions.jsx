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
					startIndex === 8 && endIndex === 11, // Additional style
			})}
		>
			{movieList.map((items) => {
				return (
					<div className="  w-full md:w-[283px] lg:w-[283px] " key={items._id}>
						{/*  mapping logic here */}
						<div key={items?._id}>
							<Link to={`/single-movies/${items?._id}`}>
								<div
									className="flex items-end w-[90%] md:w-[283px] lg:w-[283px]  mx-auto  bg-cover rounded-[30px] h-[383px] relative cardHover"
									style={{backgroundImage: `url(${items?.portraitImage})`}}
								>
									<div className=" flex items-end w-full h-full absolute p-4 rounded-[30px]   top-0 bg-black bg-opacity-30 ">
										<div className="w-full h-1/3 relative">
											<div className="text-white  font-bold">
												<h6>{items?.name}</h6>
												<span>{items?.releaseYear}</span>
											</div>
										</div>
									</div>
								</div>
							</Link>
						</div>
					</div>
				);
			})}
		</div>
	);
}
