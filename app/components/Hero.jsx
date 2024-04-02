'use client'

import React from "react";
import { useState } from "react";
import Image from "next/image";
import building from "../../public/building.jpg";


const Hero = () =>  {
	const [active, setActive] = useState(true)

	return (
		<section
			className={`relative flex items-center justify-center h-[60rem] overflow-hidden rounded-xl`}
		>
			<Image
				src={building}
				alt="building"
				// fill
				width={1440}
				height={1080}
				className=" z-0 object-cover w-[100%]"
			/>
			<div className=" text-white absolute   inset-0 z-10 flex items-center justify-center">
				<div className="flex flex-col items-center justify-center">
					<div className="flex flex-col items-center mb-6">
						<h1 className="font-bold text-[70px]">
							Journey To Your Perfect Home
						</h1>
						<p className="text-md text-center">
							Let our expert team guide you through the magic of real estate and
							help you find the <br />
							perfect home where your dreams take light.
						</p>
					</div>
					<div className="flex flex-col items-center justify-center">
						<div>
							<div className="flex">
								<div className="bg-[#FAFAFA] text-[#282828] cursor-pointer py-1 px-4 text-sm rounded-ss-xl">Buy</div>
								<div className="bg-[#7F7F7F] text-[#FAFAFA] hover:bg-[#FAFAFA] hover:text-[#282828] cursor-pointer py-1 px-4 text-sm">
									Rent
								</div>
								<div className="bg-[#7F7F7F] text-[#FAFAFA] hover:bg-[#FAFAFA] cursor-pointer hover:text-[#282828] py-1 px-4 text-sm rounded-se-xl">
									Sell
								</div>
							</div>
							<div className=" flex items-center gap-12 bg-[#FAFAFA] max-w-max max-h-max py-2 pl-4 pr-2 rounded-r-xl  rounded-es-xl">
								<div>
									<h5 className="text-[#282828] text-sm">Property Type</h5>
									<p className="text-gray-500 text-[12px] italic">
										Select Propery Type
									</p>
								</div>
								<div className="border-l-2 pl-6">
									<h5 className="text-[#282828] text-sm">Location</h5>
									<p className="text-gray-500 text-[12px] italic">
										e.g Gambir, JakartaPusat
									</p>
								</div>
								<div className=" border-l-2 pl-6">
									<h5 className="text-[#282828] text-sm">Price Range</h5>
									<p className="text-gray-500 text-[12px] italic">
										Min.Price - Max.Price
									</p>
								</div>
								<div>
									<button className="text-white bg-[#282828] py-2 px-4 rounded-xl text-sm">Search</button>
								</div>
							</div>
						</div>
						<div className="mt-6 flex items-center gap-4">
							<div><span className="font-medium text-sm">Popular Search :</span></div>
							<div className="bg-[#FAFAFA]/70 text-[#282828] cursor-pointer py-1 px-4 text-sm rounded-md">Resident House</div>
							<div className="bg-[#FAFAFA]/70 text-[#282828] cursor-pointer py-1 px-4 text-sm rounded-md">Studio Apartment</div>
							<div className="bg-[#FAFAFA]/70 text-[#282828] cursor-pointer py-1 px-4 text-sm rounded-md">Countryside</div>
							<div className="bg-[#FAFAFA]/70 text-[#282828] cursor-pointer py-1 px-4 text-sm rounded-md">Farmland House</div>


						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
