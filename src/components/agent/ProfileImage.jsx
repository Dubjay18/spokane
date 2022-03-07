import React from "react";
import { Link } from "react-router-dom";
import { MdEdit } from "react-icons/md";

const ProfileImage = () => {
	return (
		<section>
			<div className="relative">
				<img
					className="object-cover w-full h-32 md:h-60 rounded-lg"
					src="https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?"
					alt="profile"
				/>
				<div className="flex justify-between flex-wrap mt-5">
					<div className="flex items-center gap-2 pl-5 relative bottom-8">
						<img
							className="object-cover h-14 w-14 md:h-24 md:w-24 rounded-full"
							src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg"
							alt="profile"
						/>
						<div>
							<h6 className="me:text-lg font-medium pt-1 md:pt-0">
								Ajala Onile
							</h6>
							<p className="text-sm text-ash-50">Ikeja, Lagos</p>
						</div>
					</div>
					<div className="flex ml-5 md:ml-0 gap-5 mb-6 md:mb-0">
						<div>
							<Link to="/add-product">
								<button className="text-center text-sm text-pur shadow-btn-2 lg:text-lg py-2 px-5 rounded-xl justify-center">
									Add Product
								</button>
							</Link>
						</div>
						<div>
							<Link to='/edit-profile'>
								<button className="flex gap-2 text-sm items-center lg:text-lg py-2 px-5 bg-pur text-center rounded-xl text-white">
									<span>Edit Profile</span>{" "}
									<span>
										<MdEdit />
									</span>
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProfileImage;
