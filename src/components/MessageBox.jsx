import React from "react";

const MessageBox = ({ msg, me }) => {
	return (
		<div className={`flex gap-2 ${me && "self-end"}`}>
			<img
				className="w-4 h-4 object-cover rounded-full self-end"
				src={require("../images/about1.jpg")}
				alt="name"
			/>
			<div
				className={`p-3 text-xs rounded-t-xl max-w-md ${
					me
						? "bg-pur text-white rounded-bl-xl"
						: "bg-pur-50 rounded-br-xl"
				}`}
			>
				<p>{msg}</p>
				<p
					className={`text-right text-ash-400 text-xs pt-2 ${
						me ? "" : ""
					}`}
				>
					12:22 PM 28/01/2022
				</p>
			</div>
		</div>
	);
};

export default MessageBox;
