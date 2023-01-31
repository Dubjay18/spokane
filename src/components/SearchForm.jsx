import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Dropdown from "./Dropdown";

const SearchForm = () => {
	const [price, setPrice] = useState("300k to 500k");
    const [sprice, setSprice] = useState(false)
	const [apartment, setApartment] = useState("2 bedroom flat");
    const [sment, setSment] = useState(false)
	const priceList = [
		"200k to 300k",
		"400k to 500k",
		"600k to 700k",
		"800k to 900k",
	]
    const mentList = ["2 bedroom flat", "skyscraper", "Bugalow"];
    
	const handleSearch = (e) => {
		e.preventDefault();
		console.log(3);
	};
	return (
		<div className="pb-40 lg:pb-0">
			<form
				onSubmit={handleSearch}
				className="bg-white md:pl-3 lg:mx-auto p-1 rounded-lg  w-90vw lg:w-769"
			>
				<div className="grid grid-cols-1 gap-5 md-gap-0 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x gap-">
					<div className="flex md:block flex-col px-3 md:px-0">
						<label htmlFor="location">Location</label>
						<input
							type="text"
							className="bg-white text-ash-50 outline-0 "
							name="location"
							placeholder="E.g Ojota, Lagos"
						/>
					</div>
					<Dropdown
						title={'Price Range'}
						value={price}
						setValue={setPrice}
						toggle={sprice}
						setToggle={setSprice}
						data={priceList}
					/>
					<Dropdown
						title={'Apartment Type'}
						value={apartment}
						setValue={setApartment}
						toggle={sment}
						setToggle={setSment}
						data={mentList}
					/>
					<button
						className="flex lg:ml-5 justify-center items-center gap-4 btn bg-pur text-white"
						type="submit"
					>
						<span className="text-lg">Search</span>
						<span>
							<FaSearch />
						</span>
					</button>
				</div>
			</form>
		</div>
	);
};

export default SearchForm;
