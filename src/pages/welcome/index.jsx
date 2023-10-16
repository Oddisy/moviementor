import React from "react";
import Header from "../../components/header/header";
import Button from "../../components/button/button";
import {useGetMoviesQuery} from "../../app/api";
import {Link} from "react-router-dom";

export const WelcomePage = () => {
	const {data, status, isError} = useGetMoviesQuery();
	return (
		<div className="bg-blue-500  w-full h-[1050px] p-8  md:h-screen lg:h-screen">
			<Header />
			<div>
				<div className="flex items-start flex-col h-[80vh] w-full">
					<h1 className="mb-4 mt-24 font-bold text-white text-[3rem] ">
						INSECURE
					</h1>
					<div className="h-[50vh] sm:w-full md:w-1/2 lg:w-1/3 ">
						<p className=" mb-12 text-white text-lg ">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Reprehenderit quos numquam doloremque quisquam nulla incidunt
							cumque natus inventore? Quo illo perferendis libero eum, placeat
							aut at doloribus voluptates explicabo suscipit animi commodi unde
							nemo cupiditate, aliquam ipsum reprehenderit vel. Officia, amet
							reprehenderit! Maxime commodi blanditiis rem aliquam molestias
							debitis hic.
						</p>
						<span className="flex gap-4">
							<Button
								buttonClassName="bg-white px-8 py-2 rounded-3xl hover:bg-[#FFA484] text-sm"
								text="DOWNLOAD"
							/>
							<Button
								buttonClassName="bg-white px-8 py-2 rounded-3xl hover:bg-[#FFA484] text-sm"
								text="WATCH TRAILER"
							/>
						</span>
					</div>
				</div>
				<div>
					{data?.data?.movies?.map((items) => {
						console.log(items);
						return (
							<>
								<div key={items?._id}>
									<Link
										to={`/single-movies/${items?._id}`}
										className="w-full h-[400px]"
									>
										<img src={items?.portraitImage} alt="" />
										<h6>{items?.name}</h6>
									</Link>
								</div>
							</>
						);
					})}
				</div>
			</div>
		</div>
	);
};
