import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Purple from "../components/Purple";

const HeadlessLayout = ({ children }) => {
	return (
		<>
			<Header
				headless={
					"text-white color "
				}
				bgpur={"bg-pur"}
				textwhite={"text-white"}
			/>
			{children}
			<Purple />
			<Footer />
		</>
	);
};

export default HeadlessLayout;
