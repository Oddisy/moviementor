import React, {useState} from "react";
import CarouselItem from "./CarouselItem";

function Carousel() {
	const [activeIndex, setActiveIndex] = useState(0);
	const Items = [
		{
			title: "Baseball",
			description: "Basefknvkjsfbnjnsdfjkbnjdfjbgkjndf",
		},
		{
			title: "tennisball",
			description: "Basefknvkjsfbnjnsdfjkbnjdfjbgkjndf",
		},
		{
			title: "volleyball",
			description: "Basefknvkjsfbnjnsdfjkbnjdfjbgkjndf",
		},
	];

	const updateIndex = (newIndex) => {
		if (newIndex < 0) {
			newIndex = 0;
		} else if (newIndex >= items.length) {
			newIndex = items.length - 1;
		}

		setActiveIndex(newIndex);
	};

	return (
		<div className="w-full flex flex-col items-center h-28 bg-red-500">
			<div
				style={{transform: `translate(-${activeIndex * 100}%)`}}
				className="inner"
			></div>
			{Items.map((item) => {
				return <CarouselItem className="carousel-item" item={item} />;
			})}
		</div>
	);
}

export default Carousel;
