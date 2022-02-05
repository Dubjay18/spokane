import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import Profile from '../images/profile.png'

const Header = () => {
	const location = useLocation();
	const { pathname } = location;
	const splitLocation = pathname.split("/");
	const [menuBar, setMenuBar] = useState(false);

	const handleMenu = () => {
		setMenuBar(!menuBar);
	};

	return (
		<header
			className={`shadow py-3 md:py-0 md:pt-3.5 px-4 md:px-8 md:px-5 overflow-hidden trans  ${
				menuBar ? "h-72 md:h-18" : "md:h-18 h-16"
			}`}
		>
			<div className="lg:grid md:flex md:justify-between grid-cols-3 container items-center">
				<div className="flex col-span-1 items-center justify-between">
					<Link
						to="/"
						className="text-3xl text-pur font-roboto font-bold logo"
					>
						houseFree
					</Link>
					<button className="md:hidden" onClick={handleMenu}>
						<FaBars size={20} />
					</button>
				</div>
				<nav className="md:grid grid-cols-2 col-span-2 lg:gap-20 pl-3 md:pl-0">
					<ul className="flex flex-col md:items-center md:flex-row gap-y-3 md:gap-5 md:justify-evenly lg:justify-between mt-5 md:mt-0">
						<li
							className={
								splitLocation[1] === "login" ? "active-nav" : ""
							}
						>
							<Link to="/login">Login</Link>
						</li>
						<li
							className={
								splitLocation[1] === "signup"
									? "active-nav"
									: ""
							}
						>
							<Link to="/signup">Sign Up</Link>
						</li>
						<li
							className={
								splitLocation[1] === "contact-us"
									? "active-nav"
									: ""
							}
						>
							<Link to="/contact-us">Contact Us</Link>
						</li>
					</ul>
					<ul className="flex flex-col md:flex-row md:items-center mt-3 md:mt-0 gap-y-3 gap-x-4 lg:justify-end">
						<li className="xl:mr-4">
							<Link to="/">Become an Agent</Link>
						</li>
						<li className="text-3xl hidden md:block text-gray-400">
							|
						</li>
						<li className="border border-gray-300 pl-3 pr-1 py-1 flex md:gap-x-1 xl:gap-x-3 justify-between items-center rounded-lg">
							<Link to="/signup">Sign Up </Link>
							<Link to="/">
								<img
									className="w-8 border border-gray-300 rounded-xl object-cover"
									src={Profile}
									alt="profile"
								/>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
