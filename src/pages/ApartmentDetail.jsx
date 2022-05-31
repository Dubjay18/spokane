import React, { useState, useEffect } from "react";
import {
	FaChevronRight,
	FaChevronLeft,
	FaStar,
	FaRegStar,
	FaShieldVirus,
	FaRegHeart,
} from "react-icons/fa";
import { BiChat } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Info from "../components/Info";
import CardTopPick from "../components/CardTopPick";
import tags from "../database/apartmentTags";
import { data } from "../database/data";
import ApartmentCarousel from "../components/ApartmentCarousel";
import { useCarousel } from "../context/CarouselApi";
import request from "../async/request";
import { useDispatch, useSelector } from "react-redux";
import { setApartment } from "../redux/actions/apartmentActions";

const ApartmentDetail = () => {
	const dispatch = useDispatch()
	const par = useParams()
	const apartment = useSelector(state => state.apartment)
	const { listRef, scrollLeft, scrollRight, showbtn, showScroll } =
		useCarousel();
	const [imgSlide, setImgSlide] = useState(0);
	const slideShow = [apartment.image];

	const checkIndex = (index) => Math.abs(index % slideShow.length);
	const handleNext = () => {
		let result = imgSlide + 1;
		setImgSlide(checkIndex(result));
	};
	const handlePrev = () => {
		let result = imgSlide - 1;
		setImgSlide(checkIndex(result));
	};
	const handleChange = (index) => {
		setImgSlide(index);
	};
	const info = [
		{
			title: "Descriptions",
			text: apartment.descriptions,
		},
		{
			title: "Features",
			text: apartment.feautures,
		},
		{
			title: "Location Info",
			text: apartment.location_info
		},
		{
			title: "Reviews",
			text: apartment.reviews
		},
	];

	async function fresh(){
		request.get('/apartment/'+par.id)
		.then(res=>dispatch(setApartment(res.data)))
		.catch(err=>console.log(err))
	}

	useEffect(()=>{
		fresh()
	}, [])

	return (
		<MainLayout>
			<main className="px-3 md:px-8 container py-5 md:py-10">
				<nav className="flex items-center gap-3 text-sm md:text-base">
					<Link
						to="/"
						className="flex text-ash-50 items-center md:gap-3"
					>
						Home <FaChevronRight />
					</Link>
					<button className="flex text-ash-50 items-center md:gap-3">
						Self contain <FaChevronRight />
					</button>
					<button className="">Room and Palor</button>
				</nav>
				<section className="flex gap-4 flex-col lg:flex-row">
					<div className="lg:w-3/5">
						<div className="relative mt-2">
							<img
								src={slideShow[imgSlide]}
								className="w-full object-cover h-52 md:h-72 lg:h-485 overflow-hidden cursor-zoom-in trans"
								alt="apartment"
							/>
							<button
								onClick={handlePrev}
								className="absolute top-1/3 lg:top-44 left-0 py-3 md:py-9 md:px-1.5 bg-black text-white opacity-70"
							>
								<FaChevronLeft size={20} />
							</button>
							<button
								onClick={handleNext}
								className="absolute top-1/3 lg:top-44 right-0 py-3 md:py-9 md:px-1.5 bg-black text-white opacity-70"
							>
								<FaChevronRight size={20} />
							</button>
						</div>
						<div className="flex justify-center my-3 gap-3">
							{slideShow.map((img, index) => {
								return (
									<button
										key={index}
										onClick={() => handleChange(index)}
									>
										<img
											src={img}
											alt={`slide ${index}`}
											className="w-20 md:w-24 object-cover"
										/>
									</button>
								);
							})}
						</div>
						<div className="mt-2">
							{info.map((items) => {
								return <Info key={items.title} {...items} />;
							})}
						</div>
					</div>
					<div className="lg:w-2/5">
						<div className="flex flex-col gap-y-2 md:flex-row md:justify-between md:items-center">
							<div className="flex items-center justify-between md:justify-start text-sm gap-3">
								<p className="text-pur font-medium">
									Managed by:{" "}
									<span className="font-bold">
										{apartment.agent}
									</span>
								</p>
								<div className="flex items-center gap-1">
									<span className="text-secondary">4.0</span>
									<span className="text-yel">
										<FaStar />
									</span>
									<span className="text-yel">
										<FaStar />
									</span>
									<span className="text-yel">
										<FaStar />
									</span>
									<span className="text-yel">
										<FaStar />
									</span>
									<span className="text-secondary">
										<FaRegStar />
									</span>
								</div>
							</div>
							<span className="text-sm flex items-center gap-1 text-orange-450">
								<FaShieldVirus /> Top Agent
							</span>
						</div>
						<div className="border-b-2 pb-3">
							<h2 className="my-7 font-bold text-2xl md:text-3xl">
								Kings Castle Self Contain
							</h2>
							<p className="text-secondary">
								Location:{" "}
								<span className="font-medium text-black">
									{apartment.location}
								</span>
							</p>
						</div>
						<div className="flex justify-between my-7 items-center">
							<h3 className="text-2xl md:text-3xl">
								₦500,000.00
							</h3>
							<p className="text-ash-300 text-sm">
								Available Apartments: 10
							</p>
						</div>
						<div className="flex gap-8 justify-between">
							<button className="flex gap-2 items-center shadow-btn-2 md:text-lg py-2 w-2/5 lg:w-1/2 rounded-xl justify-center">
								<FaRegHeart /> <span>Save</span>
							</button>
							<button className="md:text-lg py-2 bg-pur text-center rounded-xl text-white w-2/5 lg:w-1/2">
								Rent Now
							</button>
						</div>
						<div className="grad-p flex flex-wrap gap-y-4 mt-7 p-4 justify-between rounded items-center">
							<div className="flex gap-2 items-center">
								<img
									className="w-12 h-12 rounded-lg object-cover"
									src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
									alt="profile"
								/>
								<div className="text-sm text-white">
									<h5 className="font-bold">{apartment.agent}</h5>
									<p>Lagos, Nigeria</p>
								</div>
							</div>
							<div>
								<button className="flex items-center rounded-xl gap-2 py-2 md:py-3 px-3 text-sm md:px-6 bg-white">
									<BiChat />
									<span>Chat with agent</span>
								</button>
							</div>
						</div>
						<div className="border text-sm mt-5">
							<p className="text-ash-300 p-4">Apartment Tags</p>
							<div className="flex flex-wrap gap-3 p-4 pb-10 border-t">
								{tags.map((item, index) => {
									return (
										<button
											key={index}
											className="px-6 py-2 border text-pur font-medium bg-pur-200 rounded-xl"
										>
											{item}
										</button>
									);
								})}
							</div>
						</div>
						<div className="mt-7">
							<div className="flex justify-between mb-4 flex-wrap">
								<h4 className="text-xl font-medium ">
									Other Apartments by the agent
								</h4>
								<button className="text-pur">View all</button>
							</div>
							<div className="relative">
								<ApartmentCarousel
									listRef={listRef}
									showScroll={showScroll}
								/>
								{showbtn && (
									<button
										onClick={scrollRight}
										className="absolute top-20 left-0 py-6 px-px bg-black text-white opacity-70"
									>
										<FaChevronLeft />
									</button>
								)}
								<button
									onClick={scrollLeft}
									className="absolute top-20 right-0 py-6 px-px bg-black text-white opacity-70"
								>
									<FaChevronRight />
								</button>
							</div>
						</div>
					</div>
				</section>
				<section className="mb-5 mt-14 border-t-2 pt-8">
					<div className="flex justify-between pb-4 flex-wrap">
						<h4 className="text-xl font-medium ">
							Inspired by your browsing history
						</h4>
						<button className="text-pur">View all</button>
					</div>
					<div className="grid md:grid-cols-3 grid-cols-2 py-3 gap-5 md:gap-8 lg:grid-cols-6">
						{data.slice(0, 6).map((typ, index) => {
							return <CardTopPick key={index} {...typ} />;
						})}
					</div>
				</section>
			</main>
		</MainLayout>
	);
};
export default ApartmentDetail;
