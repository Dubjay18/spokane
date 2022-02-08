import React from "react";
import { BsArrowRight } from "react-icons/bs";
import About1 from "../images/about1.jpg";
import About2 from "../images/about2.jpg";
import MainLayout from "../layouts/MainLayout";
const About = () => {
	return (
		<MainLayout>
			<section className="bg-pur py-10">
				<div className="lg:grid lg:grid-cols-2">
					<div className="text-white px-4 md:px-10 xl:px-16 py-0 md:py-4">
						<h2 className="text-2xl md:text-3xl lg:pt-4 text-center lg:text-left xl:text-5xl font-bold">
							All you need to know about our website
						</h2>
						<p className="py-7 text-justify md:text-left">
							Every day, Hosts on Airbnb open their homes and
							extend warmth to strangers - including people facing
							incredible hardship. This natural generosity of
							Airbnb Hosts is the foundation of Airbnb.org. In
							2012, a single Host named Shell asked Airbnb to help
							her open her home to people impacted by Hurricane
							Sandy for free. This sparked a movement and marked
							the beginning of a program that allows Hosts on
							Airbnb to provide stays for evacuees, relief
							workers, refugees, asylum seekers and more in times
							of need. Airbnb's Open Homes and Frontline Stays
							programs evolved to become Airbnb.org, and with the
							help of Hosts and donors, the impact continues to
							grow.
						</p>
						<div className="flex flex-wrap gap-2 md:mt-7">
							<button className="py-2 md:py-2.5 px-2 md:px-5 bg-white text-black rounded-lg">
								Find Apartment
							</button>
							<button className="py-2 md:px-5 flex gap-1 items-center rounded-lg">
								Become an Agent <BsArrowRight />
							</button>
						</div>
					</div>
					<div className="relative hidden lg:block pl-3">
						<div className="bg-about-bg absolute top-24 rounded-bl-3xl filte h-500 bg-cover  bg-center">
							<img
								src={About1}
								alt="apartment"
								className="w-1/2 invisible"
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="pt-8 lg:pt-52 container px-3 md:px-8">
				<div className="lg:grid grid-cols-2">
					<div className="z-20 mb-5 lg:mb-0">
						<img
							src={About1}
							alt="apartment"
							className="w-full lg:h-485 object-cover filte rounded-t-4xl"
						/>
					</div>
					<div className="md:pl-3 lg:pl-14">
						<h4 className="text-2xl md:text-3xl pt-2 lg:text-4xl text-pur font-bold">
							Apartment Renting
						</h4>
						<p className="py-7 font-roboto text-justify lg:text-left">
							Every day, Hosts on Airbnb open their homes and
							extend warmth to strangers - including people facing
							incredible hardship. This natural generosity of
							Airbnb Hosts is the foundation of Airbnb.org. In
							2012, a single Host named Shell asked Airbnb to help
							her open her home to people impacted by Hurricane
							Sandy for free. This sparked a movement and marked
							the beginning of a program that allows Hosts on
							Airbnb to provide stays for evacuees, relief
							workers, refugees, asylum seekers and more in times
							of need. Airbnb's Open Homes and Frontline Stays.
						</p>
						<div className="flex flex-wrap gap-2 md:mt-4 lg:mt-7">
							<button className="py-2 md:py-2.5 px-2 md:px-5 bg-pur text-white rounded-lg">
								Find Apartment
							</button>
							<button className="py-2 px-2 md:px-5 flex gap-1 text-pur items-center rounded-lg">
								Learn more <BsArrowRight />
							</button>
						</div>
					</div>
				</div>
			</section>
			<section className="pt-14 mt-8 lg:mt-0 lg:pt-32 px-3 md:px-10 xl:px-20 adjust-bg bg-pinkg relative lg:bottom-14">
				<div className="grid lg:grid-cols-2 gap-6 lg:gap-0">
					<div className="md:pr-8 xl:pr-14">
						<h4 className="text-2xl pt-2 md:text-3xl lg:text-4xl text-pur font-bold">
							Renting out Apartment
						</h4>
						<p className="py-7 font-roboto text-justify lg:text-left">
							Every day, Hosts on Airbnb open their homes and
							extend warmth to strangers - including people facing
							incredible hardship. This natural generosity of
							Airbnb Hosts is the foundation of Airbnb.org. In
							2012, a single Host named Shell asked Airbnb to help
							her open her home to people impacted by Hurricane
							Sandy for free. This sparked a movement and marked
							the beginning of a program that allows Hosts on
							Airbnb to provide stays for evacuees, relief
							workers, refugees, asylum seekers and more in times
							of need. Airbnb's Open Homes and Frontline Stays.
						</p>
						<div className="flex flex-wrap gap-2 md:4 lg:mt-7 mb-10 lg:mb-0">
							<button className="py-2 md:py-2.5 px-2 md:px-5 bg-pur text-white rounded-lg">
								Let out Apartment
							</button>
							<button className="py-2 md:px-5 flex gap-1 text-pur items-center rounded-lg">
								Learn more <BsArrowRight />
							</button>
						</div>
					</div>
					<div className="order-first lg:order-last">
						<img
							src={About2}
							alt="apartment"
							className="w-full md:h-80 lg:h-485 object-cover filte rounded-t-4xl"
						/>
					</div>
				</div>
			</section>
			<section className="pt-10 lg:pt-5 pb-14 container px-3 md:px-8">
				<div className="grid lg:grid-cols-2 ">
					<div className="z-20">
						<img
							src={About2}
							alt="apartment"
							className="w-full md:h-80 lg:h-485 object-cover filte rounded-t-4xl"
						/>
					</div>
					<div className="lg:pl-14 pt-8">
						<h4 className="text-2xl md:text-3xl lg:text-4xl text-pur font-bold">
							Being an Agent
						</h4>
						<p className="py-7 font-roboto text-justify lg:text-left">
							Every day, Hosts on Airbnb open their homes and
							extend warmth to strangers - including people facing
							incredible hardship. This natural generosity of
							Airbnb Hosts is the foundation of Airbnb.org. In
							2012, a single Host named Shell asked Airbnb to help
							her open her home to people impacted by Hurricane
							Sandy for free. This sparked a movement and marked
							the beginning of a program that allows Hosts on
							Airbnb to provide stays for evacuees, relief
							workers, refugees, asylum seekers and more in times
							of need. Airbnb's Open Homes and Frontline Stays.
						</p>
						<div className="flex flex-wrap gap-2 md:4 lg:mt-7">
							<button className="py-2 md:py-2.5 px-2 md:px-5 bg-pur text-white rounded-lg">
								Become an Agent
							</button>
							<button className="py-2 px-2 md:px-5 flex gap-1 text-pur items-center rounded-lg">
								Learn more <BsArrowRight />
							</button>
						</div>
					</div>
				</div>
			</section>
		</MainLayout>
	);
};

export default About;
