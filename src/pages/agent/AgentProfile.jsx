import React, { useState } from "react";
import { Link } from "react-router-dom";

import AgentProfileLayout from "../../layouts/AgentProfileLayout";
import CardType from "../../components/CardType";
import { data } from "../../database/data";

const AgentProfile = () => {
	const subMenu = ["All", ...new Set(data.map((menu) => menu.type))];
	const [list, setList] = useState(data);

	const handleChange = (item) => {
		if (item === "All") {
			setList(data);
			return;
		}
		const newData = data.filter((ele) => ele.type === item);
		setList(newData);
	};
	return (
		<AgentProfileLayout>
			<section className="container pb-8 lg:px-7">
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
				<div className="grid py-3 gap-y-10 gap-x-6 md:grid-cols-3">
					{list.map((typ, index) => {
						const name = typ.name.replace(/\s+/g, "-");
						return (
							<Link to={`/detail/${name}`}>
								<CardType key={index} {...typ} />
							</Link>
						);
					})}
				</div>
				<div className="text-center pb-8">
					<button className="text-pur shadow-btn py-2.5 px-14 text-lg mt-8 rounded-lg">
						Load More
					</button>
				</div>
			</section>
		</AgentProfileLayout>
	);
};

export default AgentProfile;
