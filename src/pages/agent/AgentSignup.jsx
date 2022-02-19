import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

import MainLayout from '../../layouts/MainLayout'

const AgentSignup = () => {
	return (
		<MainLayout>
			<main className="px-5 md:px-16 xl:px-52 pt-2">
				<div className="grid md:grid-cols-2 shadow mt-6 mb-14 md:h-630 pb-8 md:pb-0">
					<div className="flex flex-col justify-center py-3 px-5 lg:px-10 bg-form-bg text-white">
						<h1 className="text-4xl lg:text-5xl font-bold pb-7">
							Sign Up
						</h1>
						<p className="md:text-xl lg:text-2xl leading-8">
							Sign up now to become an agent
						</p>
					</div>
					<div className="pt-5 md:pt-10 px-3 md:px-6">
						<h4 className="font-bold text-center md:text-left text-2xl lg:text-3xl mb-5">
							Create Account
						</h4>
						<button className="flex items-center rounded-xl justify-center gap-4 border input-box text-center">
							<span>
								<FcGoogle size={25} />
							</span>
							<span className="tracking-tight">
								Sign up with Google
							</span>
						</button>
						<p className="py-5 text-center font-medium text-lg text-secondary">
							- OR -
						</p>
						<form className="">
							<input
								className="input-box italic mb-4 bg-ash-100 outline-gray-400"
								type="text"
								placeholder="Full Name"
							/>
							<input
								className="input-box italic mb-4 bg-ash-100 outline-gray-400"
								type="email"
								placeholder="Email Address"
							/>
							<input
								className="input-box italic mb-4 bg-ash-100 outline-gray-400"
								type="text"
								placeholder="Home Address"
							/>
							<input
								className="input-box italic mb-4 bg-ash-100 outline-gray-400"
								type="text"
								placeholder="Country"
							/>
							<input
								className="input-box italic bg-ash-100 outline-gray-400"
								type="password"
								placeholder="Password"
							/>

							<button className="btn text-white font-bold md:text-lg h-btn bg-pur mt-8 w-full">
								Create Account
							</button>
						</form>
						<p className="text-secondary mt-4 md:pb-3">
							Already have an account?{"  "}
							<Link
								className="text-pur font-medium md:text-lg"
								to="/agent-profile"
							>
								Log In
							</Link>
						</p>
					</div>
				</div>
			</main>
		</MainLayout>
	);
};

export default AgentSignup;
