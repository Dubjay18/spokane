import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

import UserProfileLayout from "../../layouts/UserProfileLayout";
import MessageForm from "../../components/MessageForm";
import MessageBox from "../../components/MessageBox";
import MessageList from "../../components/MessageList";
import { messages } from "../../database/messages";

const UserMessage = () => {
	const [msgIndex, setMsgIndex] = useState(0);
	const displayMsg = messages[msgIndex].text;

	const showMessage = (id) => {
		setMsgIndex(id);
	};

	return (
		<UserProfileLayout>
			<div className="bg-pur-50 p-5 rounded-lg font-poppins">
				<div className="flex gap-5">
					<section className="xl:w-30% md:w-2/5 w-full">
						<h3 className="text-ash-400 pb-4">
							All Conversations ({messages.length})
						</h3>
						<div className="mb-3 relative">
							<input
								className="rounded-lg p-2 pr-7 outline-0 w-full"
								type="text"
								name="searchMessage"
								id="searchMessage"
								placeholder="Search"
							/>
							<FaSearch className="absolute top-3 right-2 text-ash-400" />
						</div>
						<div className="text-ash-400 h-80vh overflow-auto">
							{messages.map((items) => {
								return (
									<MessageList
										key={items.id}
										{...items}
										msgIndex={msgIndex}
										showMessage={showMessage}
									/>
								);
							})}
						</div>
					</section>
					<section className="hidden md:block md:w-3/5 xl:w-70% bg-white rounded-lg p-5 relative">
						<div className="flex gap-3 items-center border-b-2 pb-4">
							<img
								src={require("../../images/about1.jpg")}
								alt="name"
								className="h-12 w-12 object-cover rounded-full"
							/>
							<div>
								<h4 className="text-sm font-medium text-black">
									{messages[msgIndex].name}
								</h4>
								<p className="text-xs text-ash-400">
									Last Seen yesterday 11:45 am
								</p>
							</div>
						</div>
						<div className="flex flex-col gap-5 mt-3 h-80vh overflow-auto">
							{displayMsg.map((item, index) => {
								return <MessageBox key={index} {...item} />;
							})}
						</div>
						<div className="w-full pt-4">
							<div className="flex items-center gap-3">
								<MessageForm />
							</div>
						</div>
					</section>
				</div>
			</div>
		</UserProfileLayout>
	);
};

export default UserMessage;
