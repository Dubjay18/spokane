import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";

const ImageUpload = ({img}) => {
	const [image, setImage] = useState(img);

	const handleUpload = (e) => {
		
	};

	return (
		<div className="flex flex-col justify-center gap-10">
			<label
				htmlFor="productImage"
				className="cursor-pointer bg-pur-50 rounded-full w-10 h-10 shadow flex flex-col items-center justify-center"
			>
				<span className="text-pur">
					<FaCamera size={15} />
				</span>
				<input
					onChange={handleUpload}
					className="hidden"
					type="file"
					name="profileImage"
					multiple="false"
					id="profileImage"
					accept="image/png, image/jpeg, image/webp"
				/>
			</label>
		</div>
	);
};

export default ImageUpload;
