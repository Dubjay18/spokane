import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";

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
			className={`shadow py-4 px-4 md:px-8 lg:px-5 trans ${
				menuBar ? "h-auto " : "h-16  overflow-hidden"
			}`}
		>
			<div className="lg:grid grid-cols-3  container items-center">
				<div className="flex col-span-1 items-center justify-between">
					<h1 className="text-2xl font-bold">Spokane Blinds</h1>
					<button className="lg:hidden" onClick={handleMenu}>
						<FaBars size={20} />
					</button>
				</div>
				<nav className="lg:grid grid-cols-2 gap-20 col-span-2 text-md pl-3 lg:pl-0">
					<ul className="flex flex-col lg:flex-row gap-y-3 justify-around mt-5 lg:mt-0">
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
					<ul className="flex flex-col lg:flex-row mt-3 lg:mt-0 gap-y-3 justify-between">
						<li>
							<Link to="/">Become an Agent</Link>
						</li>
						<li>
							<Link to="/">Profile</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
