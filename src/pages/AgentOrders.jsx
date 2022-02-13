import React, { useState } from "react";

import AgentProfileLayout from "../layouts/AgentProfileLayout";
import ordersList from "../database/orders";

const AgentOrders = () => {
	const [orders, setOrders] = useState(ordersList);
	const orderMenu = [
		"All",
		...new Set(ordersList.map((menu) => menu.category)),
	];
	const subOrder = [
		"Image",
		"Apartment Name",
		"Address",
		"Type",
		"Date",
		"Buyer",
		"Amount (₦)",
	];
	const handleOrder = (item) => {
		if (item === "All") {
			setOrders(ordersList);
			return;
		}
		const newOrder = ordersList.filter((ele) => ele.category === item);
		setOrders(newOrder);
	};
	return (
		<AgentProfileLayout>
			<section className="flex gap-3 text-center flex-wrap">
				{orderMenu.map((item, index) => {
					return (
						<button
							key={index}
							className={`w-20 px-2 md:px-5 pb-2 transition duration-500 capitalize  ${
								(orders !== ordersList &&
								item === orders[0].category
									? "active-type"
									: "") ||
								(orders === ordersList && item === "All"
									? "active-type"
									: "")
							}`}
							onClick={() => handleOrder(item)}
						>
							{item}
						</button>
					);
				})}
			</section>
			<section className="bg-pur-50 p-5 rounded-md text-sm ">
				<div className="flex flex-wrap justify-between font-bold text-ash-400 px-2 lg:px-4">
					{subOrder.map((item, index) => {
						return (
							<span
								className={
									item === "Image" ||
									item === "Buyer" ||
									item === "Amount (₦)"
										? "block"
										: "hidden md:block"
								}
								key={index}
							>
								{item}
							</span>
						);
					})}
				</div>
				<div>
					{orders.map((item, index) => {
						const {
							type,
							img,
							amount,
							name,
							address,
							date,
							buyer,
							category,
						} = item;
						return (
							<div
								key={index}
								className="flex flex-wrap md:text-xs lg:text-sm justify-between items-center rounded-md font-bold text-ash-400 shadow mt-4 bg-white p-2 lg:p-4"
							>
								<img
									src={img}
									className="w-14 h-14 rounded-md object-cover"
									alt={name}
								/>
								<span className="text-pur table-sm">
									{name}
								</span>
								<span className="col-span-2 table-sm">
									{address}
								</span>
								<span className="table-sm">{type}</span>
								<span className="table-sm">{date}</span>
								<span className="text-black">{buyer}</span>
								<span
									className={
										category === "active"
											? "text-green-500"
											: "text-red-500"
									}
								>
									{amount}
								</span>
							</div>
						);
					})}
				</div>
			</section>
		</AgentProfileLayout>
	);
};

export default AgentOrders;
