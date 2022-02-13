import React from 'react'

import MainLayout from '../layouts/MainLayout'
import CardTopPick from '../components/CardTopPick'
import CardType from '../components/CardType'
import {data} from '../database/data'

const SearchResult = () => {
    const se = ["Self contain", "Flats", "Bugalow", "Skyscraper"]
    return (
		<MainLayout>
			<main className="px-3 md:px-8 container py-5 md:py-10">
				<section>
					<h1 className="text-2xl text-pur md:text-3xl font-bold ">
						Two Bedroom Flat
					</h1>
					<p className="font-medium pt-5 md:text-lg">
						People also search
					</p>
					<div className="flex flex-wrap gap-3 mt-3">
						{se.map((item) => {
							return (
								<button
									className="border rounded-md py-1 text-sm md:text-base md:py-2 w-24 md:w-140 text-center"
									key={item}
								>
									{item}
								</button>
							);
						})}
					</div>
				</section>
				<section className='mt-4'>
					<div className="grid md:grid-cols-3 py-3 gap-y-10 gap-x-6 lg:grid-cols-4">
						{data.map((typ, index) => {
							return <CardType key={index} {...typ} />;
						})}
					</div>
					<div className="text-center pb-8 border-b-2">
						<button className="text-pur shadow-btn py-2.5 px-14 text-lg mt-8 rounded-lg">
							Load More
						</button>
					</div>
				</section>
				<section className="container md:pt-9 md:pb-14 pb-8 px-2 md:px-7">
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
}
export default SearchResult