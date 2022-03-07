import React, { useState } from "react";
import ImageUpload from "../../components/ImageUpload";
import AgentProfileLayout from "../../layouts/AgentProfileLayout";

const AgentEditProfile = () => {
	const [profileImage, setProfileImage] = useState({
		primary: "",
		secondary: "",
	});
	const handleEdit = (e) => {
		e.preventDefault();
	};
	return (
		<AgentProfileLayout>
			<section>
				<div className="relative">
					<div className="relative w-full h-32 md:h-60 bg-black">
						<div className="absolute right-1/2 top-1/2">
							<ImageUpload />
						</div>
						<img
							className="object-cover opacity-50 w-full h-32 md:h-60 rounded-lg"
							src="https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?"
							alt="profile"
						/>
					</div>
					<div className="flex justify-between flex-wrap mt-5">
						<div className="flex items-center gap-2 pl-5 relative bottom-8">
							<div className="relative bg-black h-14 w-14 md:h-24 md:w-24 rounded-full">
								<div className="absolute left-1/3 top-1/3">
									<ImageUpload />
								</div>
								<img
									className="object-cover opacity-40 h-14 w-14 md:h-24 md:w-24 rounded-full"
									src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg"
									alt="profile"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<form onSubmit={handleEdit}>
					<div className="grid md:justify-center md:grid-cols-2 gap-8">
						<div className="grid">
							<label htmlFor="firstName" className="font-poppins">
								First Name
							</label>
							<input
								placeholder="First Name"
								type="text"
								name="firstName"
								id="firstName"
								value="tolulope"
								className="add-product-input"
							/>
						</div>
						<div className="grid">
							<label htmlFor="lastName" className="font-poppins">
								Last Name
							</label>
							<input
								placeholder="Last Name"
								type="text"
								name="lastName"
								id="lastName"
								value="tolulope"
								className="add-product-input"
							/>
						</div>
						<div className="grid">
							<label htmlFor="email" className="font-poppins">
								Email
							</label>
							<input
								placeholder="email"
								disabled
								type="email"
								name="email"
								id="email"
								value="tolulope@gmail.com"
								className="add-product-input text-ash-400"
							/>
						</div>

						<div className="grid">
							<label htmlFor="location" className="font-poppins">
								Location
							</label>
							<input
								type="text"
								name="location"
								placeholder="Full address"
								id="location"
								value="Ikeja, Lagos"
								className="add-product-input"
							/>
						</div>
					</div>
					<div className="text-center mt-10">
						<button className="bg-pur md:w-1/2 font-medium text-white py-2 px-10 rounded-lg">
							Save Changes
						</button>
					</div>
				</form>
			</section>
		</AgentProfileLayout>
	);
};

export default AgentEditProfile;
