import React from "react";

import MainLayout from "../layouts/MainLayout";

const Contact = () => {
	return (
		<MainLayout>
			<main className="px-5 md:px-16 xl:px-52 pt-2">
				<div className="grid md:grid-cols-2 shadow mt-6 mb-16 md:h-600 pb-8 md:pb-0">
					<div className="flex flex-col justify-center py-3 px-5 lg:px-10 bg-form-bg text-white">
						<h1 className="text-4xl lg:text-5xl font-bold pb-7">
							Contact Us
						</h1>
						<p className="md:text-xl lg:text-2xl leading-8">
							Send us a message now, and we will respond as soon
							as possible
						</p>
					</div>
					<div className="pt-5 md:pt-10 px-3 md:px-6">
						<h4 className="font-bold text-center md:text-left text-2xl lg:text-3xl mb-5">
							Send us a message
						</h4>
						<form className="pt-3">
							<input
								className="input-box italic mb-4 bg-ash-100 outline-gray-400"
								type="email"
								placeholder="Enter your email address..."
							/>
							<textarea
								rows="8"
								className="input-box italic mb-4 bg-ash-100 outline-gray-400"
								placeholder="Enter your message here..."
								style={{ resize: "none" }}
							></textarea>
							<button className="btn text-white font-bold md:text-lg bg-pur h-btn mt-8 w-full">
								Send Message
							</button>
						</form>
					</div>
				</div>
			</main>
		</MainLayout>
	);
};

export default Contact;
