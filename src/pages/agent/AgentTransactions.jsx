import React from "react";
import { FaTimes, FaCheck } from "react-icons/fa";

import AgentProfileLayout from "../../layouts/AgentProfileLayout";
import { agentTransaction } from "../../database/transactions";

const AgentTransactions = () => {

    const tableHead = ["status", "description", "amount","type", "date"]
	return (
		<AgentProfileLayout>
			<h1 className="text-xl text-pur md:text-2xl font-bold">
				{agentTransaction.length} Transactions
			</h1>
			<table class="overflow-x-auto w-full mt-5 bg-pur-50 text-xs md:text-sm lg:text-base">
				<thead>
					<tr>
						{tableHead.map((item, index) => (
							<th key={index} className='capitalize p-3 md:p-5 font-bold'>{item}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{agentTransaction.map((item, index) => {
						const {
							status,
							description: desc,
							amount,
							date,
							type,
						} = item;
						return (
							<tr
								key={index}
								className="border-b-2 bg-white text-center"
							>
								<td className="py-3 md:py-4">
									<button
										className={`text-white  rounded-full p-1 bg-green-500 ${
											status
												? "bg-green-500"
												: "bg-red-500"
										}`}
									>
										{status ? (
											<FaCheck size={10} />
										) : (
											<FaTimes size={10} />
										)}
									</button>
								</td>
								<td className="py-3 md:py-4">{desc}</td>
								<td className="py-3 md:py-4 font-medium">
									₦{amount}
								</td>
								<td className="py-3 md:py-4">{type}</td>
								<td className="py-3 md:py-4">{date}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</AgentProfileLayout>
	);
};

export default AgentTransactions;
