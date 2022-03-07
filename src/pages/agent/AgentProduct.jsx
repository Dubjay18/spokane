import React from "react";

import AgentProfileLayout from "../../layouts/AgentProfileLayout";

const AgentProduct = () => {
	return (
		<AgentProfileLayout>
			<section>
				<h1 className="text-xl text-pur md:text-2xl font-bold ">
					All Products
				</h1>
				<table className="overflow-x-auto w-full mt-5 bg-pur-50 text-xs md:text-sm lg:text-base font-poppins"></table>
			</section>
		</AgentProfileLayout>
	);
};

export default AgentProduct;
