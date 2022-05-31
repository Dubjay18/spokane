import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import {Link} from 'react-router-dom'

const CardType = ({apartment_id, price, category, location, agent, apartment_title, image}) => {
  return (
		<Link to={`/apartment/${apartment_id}`}>
			<img
				src={image}
				alt={apartment_title}
				className="w-full object-cover h-72 rounded-xl"
			/>
			<footer className="flex justify-between items-center">
				<div className="grid gap-px pt-2">
					<p>{apartment_title}</p>
					<p className="text-ash-50 text-sm">{location}</p>
					<p className="text-ash-50 text-sm">Agent: {agent}</p>
				</div>
				<div className="pt-2 text-right">
					<p>{price}</p>
					<p className="text-ash-50 text-sm">{category}</p>
					<button className="text-ash-50 text-sm">
						<FaRegHeart size={17} />
					</button>
				</div>
			</footer>
		</Link>
  );
};

export default CardType;
