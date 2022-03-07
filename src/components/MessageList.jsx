import React from "react";

const MessageList = ({
	id,
	name,
	img,
	unread,
	time,
	showMessage,
	msgIndex,
}) => {
	return (
		<div
			onClick={() => showMessage(id)}
			className={`border-b-2 text-xs px-2 cursor-pointer py-3 flex justify-between items-center ${
				id === msgIndex ? "active-msg" : ""
			}`}
		>
			<div className="flex items-center gap-2">
				<img
					className="w-10 h-10 rounded-full object-cover"
					src={img}
					alt={name}
				/>
				<div>
					<h4 className="text-sm font-medium text-black">{name}</h4>
					<p>How far about the paper</p>
				</div>
			</div>
			<div className="text-right">
				<p className="pb-2">{time} mins</p>
				<span className="bg-pur text-white text-xs rounded-full px-1.5 py-px">
					{unread}
				</span>
			</div>
		</div>
	);
};

export default MessageList;
