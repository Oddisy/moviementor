import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
const AutoSlideCarousel = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 2500, // Slide transition duration
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true, // Enable autoplay
		autoplaySpeed: 3000, // Set autoplay speed to 1 second (1000ms)
	};

	return (
		<Slider className="h-44 flex items-center mt-20" {...settings}>
			<div>
				<div className="card">
					<h3>Card 1</h3>
					<p>Description for Card 1</p>
				</div>
			</div>
			<div>
				<div className="card">
					<h3>Card 2</h3>
					<p>Description for Card 2</p>
				</div>
			</div>
			<div>
				<div className="card">
					<h3>Card 3</h3>
					<p>Description for Card 3</p>
				</div>
			</div>
			{/* Add more slides as needed */}
		</Slider>
	);
};

export default AutoSlideCarousel;
