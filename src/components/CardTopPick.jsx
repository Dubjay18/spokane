import React from "react";
import { Link } from "react-router-dom";

const CardTopPick = ({ id, price, location, name, img }) => {
	return (
		<Link to={`/apartment/${id}`}>
			<img
				src={img}
				alt={name}
				className="w-full object-cover h-44 rounded-xl"
			/>
			<footer className="pt-2">
				<p>{name}</p>
				<p className="text-ash-50 text-sm">{location}</p>
				<p className="font-bold">{price}</p>
			</footer>
		</Link>
	);
};

export default CardTopPick;
