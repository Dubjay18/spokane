import React, {useState} from "react";
import {FaChevronUp, FaChevronDown} from 'react-icons/fa'

const Info = ({title, text}) => {
    const [tab, setTab] = useState(false)
    return (
		<div className="border mb-4">
			<div className="flex border-b justify-between text-ash-300 items-center p-4">
				<h3 className="font-bold text-lg lg:text-xl">{title}</h3>
				{tab ? (
					<button onClick={()=>setTab(false)}>
						<FaChevronDown />
					</button>
				) : (
					<button onClick={()=>setTab(true)}>
						<FaChevronUp />
					</button>
				)}
			</div>
			{tab && (
				<p className="p-4 text-sm bg-pur-100 text-secondary">{text}</p>
			)}
		</div>
	);
}

export default Info;