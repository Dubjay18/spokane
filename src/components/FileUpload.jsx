import React, { useState } from "react";
import { FaTimes, FaFileUpload } from "react-icons/fa";

const FileUpload = () => {
	const [images, setImages] = useState([]);

	const handleUpload = (e) => {
		if (e.target.files) {
			const uploadedArray = Array.from(e.target.files);

			const imageArray = uploadedArray.map((img) =>
				URL.createObjectURL(img)
			);
			setImages((prevImage) => [...prevImage, ...imageArray]);
            Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
		}
	};

	const handleDrop = (id) => {
		setImages(images.filter((img) => img !== id));
	};
	return (
		<div className="flex flex-col justify-center mt-14 gap-10">
			<label
				htmlFor="productImage"
				className="border self-center cursor-pointer rounded-lg w-64 h-32 flex flex-col items-center justify-center"
			>
				<span className="text-pur mb-2">
					<FaFileUpload size={20}/>
				</span>
                <span>Upload products</span>
				<input
					onChange={handleUpload}
					className="hidden"
					multiple
					type="file"
					name="productImage"
					id="productImage"
					accept="image/png, image/jpeg, image/webp"
				/>
			</label>
			<div className="flex flex-wrap justify-center gap-4">
				{images.map((img) => {
					return (
						<div key={img} className="relative">
							<img
								src={img}
								alt={img}
								className="w-24 rounded-lg h-20 object-cover"
							/>
							<button
								onClick={() => handleDrop(img)}
								className="absolute  top-1 right-1 text-red-700"
							>
								<FaTimes size={15} />
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default FileUpload;
