import React from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Dropdown = ({value, setValue, toggle, setToggle, data}) => {
  return (
		<div className="relative">
			<span className="pl-3">Price Range</span>
			<div
				onClick={() => setToggle(!toggle)}
				className="flex px-3 text-ash-50 items-center cursor-pointer justify-between"
			>
				<span>{value}</span>
				<span>
					<MdOutlineKeyboardArrowDown size={20} />
				</span>
			</div>
			{toggle && (
				<div className="absolute z-10 w-full shadow-xl bg-white h-32 overflow-scroll rounded-b-md top-14">
					<div className="flex py-3 gap-3  flex-col">
						{data.map((item, index) => {
							return (
								<span
									key={index}
									className="hover:bg-purple-200 cursor-pointer px-2"
									onClick={(e) => {
										setValue(e.currentTarget.textContent);
										setToggle(false);
									}}
								>
									{item}
								</span>
							);
						})}
					</div>
				</div>
			)}
		</div>
  );
};

export default Dropdown;
