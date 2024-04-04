import React from "react";
import firstHouse from "../../public/firstHouse.jpg";
import seventhHouse from "../../public/seventhHouse.jpg";
import sixthHouse from "../../public/sixthHouse.jpg";


import { HeartIcon } from "@heroicons/react/24/outline";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

const Latest = () => {
	return (
		<section className="my-14 mx-[4rem]">
			<div className="flex justify-between items-center mb-[3rem]">
				<div className="max-w-max">
					<h1 className="font-bold text-[48px] leading-tight">
                              Uncover The Latest
						<br /> Trends And Stories
					</h1>
				</div>
				<div className="">
					<p className=" leading-tight">
						Star informed and updated with the latest trends, home <br />
                              improvement ideas, and our clients story who have
						<br /> achieved their real estate dreams
					</p>
				</div>
			</div>
			<div className="flex justify-between gap-4 h-[40rem]">
				<div
					style={{
						backgroundImage: `url(${firstHouse.src})`,
						backgroundPosition: "center",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
					}}
					className="relative overflow-hidden h-full flex-1 rounded-xl p-4 flex flex-col justify-end"
				>
					<div className="bg-black flex items-center justify-center absolute top-4 right-4 p-2 rounded-full">
						<HeartIcon className="h-[22px] w[22px] text-red-600  stroke-5" />
					</div>
					<div className="flex flex-col justify-between rounded-xl w-full h-[10rem] p-4 bg-[#282828]">
						<div className="flex justify-between items-center relative">
							<div className="flex items-center">
								<span className="font-medium text-gray-400 underline">Unigue House</span>
							</div>
							<div className=" ">
								<div className="bg-[#B18A5C] flex items-center justify-center p-3 rounded-full ">
									<ArrowUpRightIcon className="h-[22px] w[22px] text-white" />
								</div>
							</div>
						</div>
						<div className="flex justify-between">
							<div className="flex flex-col text-white gap-2">
                                        <p>Rustic Castle Retreatment in the French Countryside Offers a Fairytale Escape.</p>
								<span className="block text-gray-500">10 hours ago</span>
							</div>

						</div>
					</div>
				</div>
				<div
					style={{
						backgroundImage: `url(${seventhHouse.src})`,
						backgroundPosition: "center",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
					}}
					className="relative h-full flex-1  overflow-hidden rounded-xl"
				>
					<div className="bg-black flex items-center justify-center absolute top-4 right-4 p-2 rounded-full">
						<HeartIcon className="h-[22px] w[22px] text-red-600  stroke-5" />
					</div>
				</div>
				<div
					style={{
						backgroundImage: `url(${sixthHouse.src})`,
						backgroundPosition: "center",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
					}}
					className=" relative h-full flex-1 overflow-hidden rounded-xl"
				>
					<div className="bg-black flex items-center justify-center absolute top-4 right-4 p-2 rounded-full">
						<HeartIcon className="h-[22px] w[22px] text-red-600  stroke-5" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Latest;
