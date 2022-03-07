import React, { useState } from "react";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Purple from "../components/Purple";
import UserSidebar from "../components/user/UserSidebar";

const UserProfileLayout = ({ children }) => {
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
							<UserSidebar setMobileTab={setMobileTab} />
						)}
					</div>
					<div className="lg:w-1/5 hidden lg:block">
						<UserSidebar />
					</div>
					<div className="lg:w-4/5">
						{children}
					</div>
				</section>
			</main>
			<Purple />
			<Footer />
		</>
	);
};

export default UserProfileLayout;
