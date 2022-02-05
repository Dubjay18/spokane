import React from 'react';
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

import Social1 from '../images/social1.jpg'
import Social2 from '../images/social2.jpg'
import Social3 from '../images/social3.jpg'
import Social4 from '../images/social4.jpg'

const Footer = () => {
  return (
		<footer>
			<div className="py-10 md:pt-16 md:pb-24 shadow bg-ash">
				<div className="container grid lg:grid-cols-4 md:grid-cols-2 px-4 gap-8">
					<div>
						<h4 className="text-zinc-800 font-bold text-2xl pb-8">
							About Our website
						</h4>
						<p className="text-secondary mb-6">
							Our mission is to bring quality to apartment
							renting.
						</p>
						<ul className="text-secondary">
							<li className="mb-2">Our Apartments</li>
							<li className="mb-2">Our tourism</li>
							<li className="mb-2">Our Blog</li>
							<li className="mb-2">Our Trends</li>
						</ul>
					</div>
					<div>
						<h4 className="text-zinc-800 font-bold text-2xl pb-8">
							Our Services
						</h4>
						<ul className="text-secondary">
							<li className="mb-2">House renting</li>
							<li className="mb-2">Apartment renting</li>
							<li className="mb-2">Tourism</li>
							<li className="mb-2">Agent and contracts</li>
						</ul>
					</div>
					<div>
						<h4 className="text-zinc-800 font-bold text-2xl pb-8">
							Contact Us
						</h4>
						<ul className="text-secondary">
							<li className="mb-2">
								Call:{" "}
								<span className="underline">509-822-5898</span>
							</li>
							<li className="mb-2">
								Email: <br /> contact@houseFree.com
							</li>
							<div
								className="pt-px my-5"
								style={{ background: "#C4C4C4" }}
							></div>
						</ul>
						<div className="">
							<h5 className="pb-3 font-medium">
								Subscribe for inspiration
							</h5>
							<form className="flex">
								<input
									type="email"
									name="subcribe"
									id="subcribe"
									placeholder="Email"
									className="w-3/3 lg:w-1/2 xl:w-3/3  py-2 outline-0 px-3 rounded-l-lg"
								/>
								<button className="bg-pur h-btn text-white p-2 rounded-md">
									Subscribe
								</button>
							</form>
						</div>
					</div>
					<div>
						<h4 className="text-zinc-800 font-bold text-2xl pb-8">
							Follow Us
						</h4>
						<div className="flex gap-3 text-white pb-6">
							<span className="social-icons">
								<FaFacebookF />
							</span>
							<span className="social-icons">
								<FaInstagram />
							</span>
							<span className="social-icons">
								<FaYoutube />
							</span>
						</div>
						<p className="pb-5 font-medium">
							Our Top Selling Apartments
						</p>
						<div className="flex gap-4 flex-wrap">
							<img
								src={Social3}
								className="social-img"
								alt="apartment"
							/>
							<img
								src={Social2}
								className="social-img"
								alt="apartment"
							/>
							<img
								src={Social1}
								className="social-img"
								alt="apartment"
							/>
							<img
								src={Social4}
								className="social-img "
								alt="apartment"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="flex flex-col text-center md:text-right gap-2 md:flex-row justify-between lg:py-5 py-8 container px-5 text-secondary font-semibold">
				<span>©2021 houseFree. All Rights Reserved.</span>
				<span>Privacy Policy | Terms & Conditions</span>
			</div>
		</footer>
  );
};

export default Footer;
