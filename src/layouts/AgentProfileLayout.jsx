import React, { useState } from "react";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Purple from "../components/Purple";
import AgentSidebar from "../components/agent/AgentSidebar";

const AgentProfileLayout = ({ children }) => {
	const [mobileTab, setMobileTab] = useState(false);
	const showTab = () => {
		setMobileTab(!mobileTab);
	};
	return (
		<>
			<Header />
			<main className="px-3 mt-16 md:px-8 container py-5 md:py-10">
				<div className="flex text-pur justify-between items-center">
					<h1 className="text-2xl md:text-3xl font-bold ">
						Agent Page
					</h1>
					<button className="lg:hidden text-xl" onClick={showTab}>
						{mobileTab ? (
							<FaChevronCircleUp />
						) : (
							<FaChevronCircleDown />
						)}
					</button>
				</div>
				<section className="flex flex-col lg:flex-row gap-5 mt-5">
					<div className="lg:hidden">
						{mobileTab && (
							<AgentSidebar setMobileTab={setMobileTab} />
						)}
					</div>
					<div className="lg:w-1/5 hidden lg:block">
						<AgentSidebar />
					</div>
					<div className="lg:w-4/5">
						<section>
							<div className="relative">
								<img
									className="object-cover w-full h-32 md:h-60 rounded-lg"
									src="https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?"
									alt=""
								/>
								<div className="flex justify-between flex-wrap mt-5">
									<div className="flex items-center gap-2 pl-5 relative bottom-8">
										<img
											className="object-cover h-20 w-20 md:h-24 md:w-24 rounded-full"
											src="https://images.pexels.com/photos/2955375/pexels-photo-2955375.jpeg"
											alt="profile"
										/>
										<div>
											<h6 className="text-lg font-medium">
												Ajala Onile
											</h6>
											<p className="text-sm text-ash-50">
												Ikeja, Lagos
											</p>
										</div>
									</div>
									<div className="flex ml-5 md:ml-0 gap-5 mb-6 md:mb-0">
										<div>
											<button className="text-center text-sm text-pur shadow-btn-2 lg:text-lg py-2 px-5 rounded-xl justify-center">
												Add Product
											</button>
										</div>
										<div>
											<button className="flex gap-2 text-sm items-center lg:text-lg py-2 px-5 bg-pur text-center rounded-xl text-white">
												<span>Edit page</span>{" "}
												<span>
													<MdEdit />
												</span>
											</button>
										</div>
									</div>
								</div>
							</div>
						</section>
						{children}
					</div>
				</section>
			</main>
			<Purple />
			<Footer />
		</>
	);
};

export default AgentProfileLayout;
