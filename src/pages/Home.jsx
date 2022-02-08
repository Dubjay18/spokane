import React, { useState } from "react";

import { data } from "../database/data";
import HeadlessLayout from "../layouts/HeadlessLayout";
import CardType from "../components/CardType";
import CardTopPick from "../components/CardTopPick";
import SearchForm from "../components/SearchForm";

const Home = () => {
	const subMenu = ["All", ...new Set(data.map((menu) => menu.type))];
	const [list, setList] = useState(data);
	const homeCard = [
		{
			text: "Search Apartment",
			bg: "bg-find-bg",
			btn: "Find Now",
		},
		{
			text: "Contact the Agent",
			bg: "bg-contact-bg",
			btn: "Contact Now",
		},
		{
			text: "Complete Transaction",
			bg: "bg-transaction-bg",
			btn: "Start Now",
		},
	];

	const handleChange = (item) => {
		if (item === "All") {
			setList(data);
			return;
		}
		const newData = data.filter((ele) => ele.type === item);
		setList(newData);
	};

	return (
		<HeadlessLayout>
			<main>
				<section className="bg-hero-bg bg-cover bg-center pt-14">
					<div className="flex pt-14 items-center min-h-screen gap-14 flex-col ">
						<h1 className="font-bold text-white text-center pt-3 text-2xl md:text-4xl">
							A Better Home Makes <br /> a Better Family
						</h1>
						<p className="text-white">Find your next home</p>
						<SearchForm/>
					</div>
				</section>
				<section className="container px-2 md:px-7 ">
					<div className="px-5 py-5 md:py-9 md:px-10 bg-ash-200  rounded-lg relative -mt-24">
						<h3 className="font-medium  text-2xl lg:text-4xl text-center">
							Better Experience on Here
						</h3>
						<div className="grid mt-8 md:grid-cols-3 gap-5 lg:gap-10">
							{homeCard.map((items, index) => {
								const { bg, btn, text } = items;
								return (
									<div
										key={index}
										className={`rounded-lg bg-cover bg-no-repeat bg-bottom p-8 md:p-3 lg:p-8
									${bg}`}
									>
										<div className="flex flex-col justify-between h-52">
											<h4 className="text-2xl lg:text-4xl text-white font-medium">
												{text}
											</h4>
											<button className="py-3 rounded-lg md:w-full lg:w-48 bg-white">
												{btn}
											</button>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</section>
				<section className="container py-8 px-2 md:px-7">
					<h4 className="text-xl font-medium ">Categories</h4>
					<div className="flex gap-1 justify-evenly md:justify-start flex-wrap py-3 text-ash-300">
						{subMenu.map((item, index) => {
							return (
								<button
									className={`px-2 md:px-5 pb-2 transition duration-500 ${
										(list !== data && item === list[0].type
											? "active-type"
											: "") ||
										(list === data && item === "All"
											? "active-type"
											: "")
									}`}
									onClick={() => handleChange(item)}
									key={index}
								>
									{item}
								</button>
							);
						})}
					</div>
					<div className="grid md:grid-cols-3 py-3 gap-y-10 gap-x-6 lg:grid-cols-4">
						{list.map((typ, index) => {
							return <CardType key={index} {...typ} />;
						})}
					</div>
					<div className="text-center pb-8 border-b-2">
						<button className="text-pur shadow-btn py-2.5 px-14 text-lg mt-8 rounded-lg">
							Load More
						</button>
					</div>
				</section>
				<section className="container pt-1 md:pb-16 pb-8 px-2 md:px-7">
					<div className="flex justify-between pb-4">
						<h4 className="text-xl font-medium ">Top Picks</h4>
						<button className="text-pur">View all</button>
					</div>
					<div className="grid md:grid-cols-3 grid-cols-2 py-3 gap-5 md:gap-8 lg:grid-cols-6">
						{data.slice(0, 6).map((typ, index) => {
							return <CardTopPick key={index} {...typ} />;
						})}
					</div>
				</section>
			</main>
		</HeadlessLayout>
	);
};

export default Home;
