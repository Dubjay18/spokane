import React from "react";
import {
	BsGrid1X2Fill,
	BsBell,
} from "react-icons/bs";
import { IoMdSettings, IoMdChatboxes, IoMdPaper } from "react-icons/io";
import { BiTransfer } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const UserSidebar = ({ setMobileTab }) => {
	const location = useLocation();
	const { pathname } = location;
	const splitLocation = pathname.split("/");
	const sidebar = [
		{
			title: "Overview",
			icon: <BsGrid1X2Fill />,
			link: "user-profile",
		},
		{
			title: "Notifications",
			icon: <BsBell />,
			link: "user-notification",
		},
		{
			title: "Messages",
			icon: <IoMdChatboxes />,
			link: "user-messages",
		},
		{
			title: "Transactions",
			icon: <BiTransfer />,
			link: "user-transactions",
		},
		{
			title: "Policy",
			icon: <IoMdPaper />,
			link: "user-policy",
		},
		{
			title: "Settings",
			icon: <IoMdSettings />,
			link: "user-settings",
		},
	];
	return (
		<div className="rounded-lg py-8 px-5 bg-pur-50 lg:h-full">
			{sidebar.map((item, index) => {
				return (
					<button
						key={index}
						className="w-full"
						onClick={() => setMobileTab(false)}
					>
						<Link
							to={`/${item.link}`}
							className={`flex gap-5 text-secondary items-center mb-3 p-3 ${
								splitLocation[1] === item.link
									? "user-sidebar"
									: ""
							}`}
						>
							<span className="text-base">{item.icon}</span>
							<span>{item.title}</span>
						</Link>
					</button>
				);
			})}
		</div>
	);
};

export default UserSidebar;
