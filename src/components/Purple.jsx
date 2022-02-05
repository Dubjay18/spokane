import React from "react";
import { MdFace } from "react-icons/md";

const Purple = () => {
	return (
		<section className="bg-purple-bg xl:py-0 py-10 px-5 md:px-16">
			<div className="grid md:grid-cols-2 lg:grid-cols-3 items-center container">
				<div className="lg:col-span-2 text-white">
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
					<div className="flex mt-5 gap-4">
						<span className="bg-white p-1 rounded-full"></span>
						<span className="bg-white opacity-60 p-1 rounded-full"></span>
						<span className="bg-white opacity-60 p-1 rounded-full"></span>
						<span className="bg-white opacity-60 p-1 rounded-full"></span>
						<span className="bg-white opacity-60 p-1 rounded-full"></span>
						<span className="bg-white opacity-60 p-1 rounded-full"></span>
					</div>
				</div>
				<div className="lg:col-span-1 order-first md:order-last">
					<div className="">
						<div className="relative bg-laptop h-64 bg-cover bg-center">
							<div className="absolute top-24 ml-16 xl:text-3xl bg-ash rounded-full p-1">
								<MdFace />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Purple;
