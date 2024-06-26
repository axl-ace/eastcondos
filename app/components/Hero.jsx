"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import seventhHouse from "../../public/hero.jpg";
import seventhHouses from "../../public/seventhHouse.jpg";
import Link from "next/link";


const Hero = () => {
	const [active, setActive] = useState(true);

	return (
		<section>
			<div className="desktop:hidden relative">
				<div className=" relative w-full h-[18rem] rounded-xl overflow-hidden flex items-center justify-center bg-black">
					<Image
						priority
						width={1000}
						height={900}
						src={seventhHouses}
						alt="House"
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="flex flex-col justify-center mt-6">
					<h1 className="font-bold text-[34px]  leading-tight text-skin-dark">
						Journey To Your Perfect Home
					</h1>
					<p className=" text-skin-dark">
						Let our expert team guide you through the magic of real estate and
						help you find the perfect home where your dreams take light.
					</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 w-full mt-6">
                         <button className="bg-skin-dark w-full rounded-md p-4 text-center text-skin-base cursor-pointer">Learn More</button>
                         <button  className="bg-blue-600 w-full rounded-md p-4 text-center text-skin-base cursor-pointer"><Link href={'/properties'}>Browse Properties</Link></button>
                    </div>
			</div>
			<div
				// style={{
				// 	// use the src property of the image object
				// 	backgroundImage: `url(${seventhHouse.src})`,
				// 	// other styles
				// 	backgroundPosition: "center",
				// 	backgroundSize: "cover",
				// 	backgroundRepeat: "no-repeat",
				// }}
				className={` hidden relative desktop:flex items-center justify-center h-[60rem] overflow-hidden rounded-xl`}
			>
				<Image
					priority
					width={1080}
					height={960}
					src={seventhHouses}
					alt="House"
					className=" w-auto h-full object-cover"
				/>
				<div className=" text-skin-base absolute inset-0  flex items-center justify-center">
					<div className="flex flex-col items-center justify-center">
						<div className="flex flex-col items-center mb-6">
							<h1 className="font-bold text-[70px]">
								Journey To Your Perfect Home
							</h1>
							<p className="text-md text-center">
								Let our expert team guide you through the magic of real estate
								and help you find the <br />
								perfect home where your dreams take light.
							</p>
						</div>
						<div className="flex flex-col items-center justify-center">
							<div>
								<div className="flex">
									<div className="bg-skin-offwhite text-skin-dark cursor-pointer py-1 px-4 text-sm rounded-ss-xl">
										Buy
									</div>
									<div className="bg-skin-greenmutted text-skin-base hover:bg-skin-offwhite hover:text-skin-dark cursor-pointer py-1 px-4 text-sm">
										Rent
									</div>
									<div className="bg-skin-greenmutted text-skin-base hover:bg-skin-offwhite cursor-pointer hover:text-skin-dark py-1 px-4 text-sm rounded-se-xl">
										Sell
									</div>
								</div>
								<div className=" flex items-center gap-12 bg-skin-offwhite max-w-max max-h-max py-2 pl-4 pr-2 rounded-r-xl  rounded-es-xl">
									<div>
										<h5 className="text-skin-dark text-sm">Property Type</h5>
										<p className="text-skin-mutted text-[12px] font-italic">
											Select Propery Type
										</p>
									</div>
									<div className="border-l-2 pl-6">
										<h5 className="text-skin-dark text-sm">Location</h5>
										<p className="text-skin-mutted text-[12px] font-italic">
											e.g Gambir, JakartaPusat
										</p>
									</div>
									<div className=" border-l-2 pl-6">
										<h5 className="text-skin-dark text-sm">Price Range</h5>
										<p className="text-skin-mutted text-[12px] font-italic">
											Min.Price - Max.Price
										</p>
									</div>
									<div>
										<button className="text-skin-base bg-skin-dark py-2 px-4 rounded-xl text-sm">
											Search
										</button>
									</div>
								</div>
							</div>
							<div className="mt-6 flex items-center gap-4">
								<div>
									<span className="font-medium text-sm">Popular Search :</span>
								</div>
								<div className="bg-black/10 text-skin-brown cursor-pointer py-1 px-4 text-sm rounded-md backdrop-blur-md">
									Resident House
								</div>
								<div className="bg-black/10 text-skin-brown cursor-pointer py-1 px-4 text-sm rounded-md backdrop-blur-md">
									Studio Apartment
								</div>
								<div className="bg-black/10 text-skin-brown cursor-pointer py-1 px-4 text-sm rounded-md backdrop-blur-md">
									Countryside
								</div>
								<div className="bg-black/10 text-skin-brown cursor-pointer py-1 px-4 text-sm rounded-md backdrop-blur-md">
									Farmland House
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
