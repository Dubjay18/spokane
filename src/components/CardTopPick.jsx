import React from "react";

const CardTopPick = ({ price, location, name, img }) => {
	return (
		<article>
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
		</article>
	);
};

export default CardTopPick;
