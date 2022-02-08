import React from 'react';
import { FaRegHeart } from 'react-icons/fa';

const CardType = ({price, type, location, agent, name, img}) => {
  return (
		<article>
			<img src={img} alt={name} className="w-full object-cover h-72 rounded-xl" />
			<footer className="flex justify-between items-center">
				<div className="grid gap-px pt-2">
					<p>{name}</p>
					<p className="text-ash-50 text-sm">{location}</p>
					<p className="text-ash-50 text-sm">Agent: {agent}</p>
				</div>
				<div className="pt-2 text-right">
					<p>{price}</p>
					<p className="text-ash-50 text-sm">{type}</p>
					<button className="text-ash-50 text-sm">
						<FaRegHeart size={17}/>
					</button>
				</div>
			</footer>
		</article>
  );
};

export default CardType;
