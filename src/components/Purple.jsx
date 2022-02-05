import React from "react";
import { MdFace } from "react-icons/md";

import Laptop from "../images/p-laptop.png";

const Purple = () => {
	return (
		<section className="bg-purple-bg xl:py-0 py-10 px-5 md:px-16">
			<div className="lg:grid grid-cols-3 items-center container">
				<div className="col-span-2 text-white">
					<h2 className="font-medium text-2xl">
						Build a strong online Agent reputation
					</h2>
					<p className="pt-4">
						Communicate with buyers and show them values in the
						apartment you are managing
					</p>
					<button className="btn h-btn text-black bg-white mt-10">
						Learn More
					</button>
					<div className="flex mt-5 gap-3">
						<span className="bg-white p-1 rounded-full"></span>
						<span className="bg-white opacity-60 p-1 rounded-full"></span>
						<span className="bg-white opacity-60 p-1 rounded-full"></span>
						<span className="bg-white opacity-60 p-1 rounded-full"></span>
						<span className="bg-white opacity-60 p-1 rounded-full"></span>
					</div>
				</div>
				<div className="col-span-1 hidden lg:block">
					<div className="relative">
						<img src={Laptop} alt="apartment" className="w-full" />
						<span className="absolute top-24 left-16 bg-ash rounded-full p-1">
							<MdFace size={30} />
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Purple;
