import React from 'react'
import { FaCamera } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { ImAttachment, ImMic } from "react-icons/im";

const MessageForm = () => {
  return (
		<>
			<div className="relative w-95%">
				<input
					className="bg-pur-50 w-full rounded-xl outline-ash-400 py-2 px-8 pr-14"
					type="text"
					placeholder="Type in your message here"
				/>
				<ImMic className="absolute left-2 top-3 text-ash-400 cursor-pointer" />
				<ImAttachment className="absolute top-3 right-10 text-ash-400 cursor-pointer" />
				<FaCamera className="absolute top-3 right-5 text-ash-400 cursor-pointer" />
			</div>
			<button className="text-pur bg-pur-50 p-2 rounded-full">
				<IoIosSend size={20} />
			</button>
		</>
  );
}

export default MessageForm