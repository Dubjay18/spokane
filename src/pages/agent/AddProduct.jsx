import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import FileUpload from "../../components/FileUpload";

import AgentProfileLayout from "../../layouts/AgentProfileLayout";

const AddProduct = () => {
	const [tags, setTags] = useState([]);
	const [tagvalue, setTagValue] = useState("");
	const cat = [
		"-- Select category --",
		"Bungalow",
		"Hotels",
		"skyscraper",
		"Flats",
		"Duplex",
		"Self",
		"contain",
	];

	const addTags = (e) => {
		if (e.key === "Enter" && tagvalue) {
			setTags((prevTags) => [
				...prevTags,
				{ value: tagvalue, id: Date.now() },
			]);
			setTagValue("");
		}
	};

	const removeTag = (id) => {
		setTags(tags.filter((tag) => tag.id !== id));
	};

	const handleAdd = (e) => {
		e.preventDefault();
	};
	return (
		<AgentProfileLayout>
			<section>
				<h1 className="text-xl text-pur md:text-2xl font-bold ">
					Add Product
				</h1>
				<form onSubmit={handleAdd}>
					<div className="grid md:grid-cols-2 gap-5">
						<div>
							<div className="grid mt-8">
								<label
									htmlFor="productName"
									className="font-poppins"
								>
									Product Name
								</label>
								<input
                                placeholder="Name"
									type="text"
									name="ProductName"
									id="productName"
									className="add-product-input"
								/>
							</div>
							<div className="grid mt-8">
								<label
									htmlFor="category"
									className="font-poppins"
								>
									Category
								</label>
								<select
									name="category"
									id="category"
									className="add-product-input"
								>
									{cat.map((item) => (
										<option key={item} value={item}>
											{item}
										</option>
									))}
								</select>
							</div>
							<div className="grid mt-8">
								<label htmlFor="price" className="font-poppins">
									Price
								</label>
								<div className="relative">
									<input
										type="text"
										placeholder="price in naira"
										name="price"
										id="price"
										className="px-14 py-2 w-full rounded-xl bg-pur-50 outline-0"
									/>
									<span className="absolute bg-pur text-white pt-2 px-4 rounded-tl-xl rounded-bl-xl left-0 bottom-0 top-0 bg-">
										₦
									</span>
								</div>
							</div>
							<div className="grid mt-8">
								<label
									htmlFor="location"
									className="font-poppins"
								>
									Location
								</label>
								<input
									type="text"
									name="location"
                                    placeholder="Full address"
									id="location"
									className="add-product-input"
								/>
							</div>
							<div className="grid mt-8">
								<label htmlFor="tags" className="font-poppins">
									Tags
								</label>
								<input
									onKeyDown={addTags}
									onChange={(e) =>
										setTagValue(e.target.value)
									}
									value={tagvalue}
									type="text"
									name="tags"
                                    placeholder="Tags"
									id="tags"
									className="add-product-input"
								/>
								{tags.length !== 0 && (
									<div className="flex flex-wrap gap-3 p-4 pb-10 border mt-3">
										{tags.map((item) => {
											const { id, value } = item;
											return (
												<span
													key={id}
													className="px-6 relative py-1.5 border text-pur font-medium bg-pur-200 rounded-xl"
												>
													{value}
													<span
														className="absolute top-2 cursor-pointer right-1"
														onClick={() =>
															removeTag(id)
														}
													>
														<FaTimes size={12} />
													</span>
												</span>
											);
										})}
									</div>
								)}
							</div>
						</div>
						<div>
							<FileUpload/>
                            
						</div>
					</div>
					<div className="text-center mt-8">
						<button className="bg-pur w-1/2 font-medium text-white py-2 px-10 rounded-lg">
							Add
						</button>
					</div>
				</form>
			</section>
		</AgentProfileLayout>
	);
};

export default AddProduct;
