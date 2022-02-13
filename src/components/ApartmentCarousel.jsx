import React from "react";

import { data } from "../database/data";
import CardTopPick from "./CardTopPick";

const ApartmentCarousel = ({ listRef, showScroll }) => {
	
	return (
		<div className="flex max-w-4xl overflow-y-auto">
			<div
				className="flex overflow-y-hidden gap-5 remove-scroll scroll-smooth"
				ref={listRef}
				onScroll={showScroll}
			>
				{data.map((typ, index) => {
					return (
						<div className="min-w-11 cursor-pointer">
							<CardTopPick key={index} {...typ} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ApartmentCarousel;
