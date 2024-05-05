import React from "react";
import firstHouse from "../../public/firstHouse.jpg";
import seventhHouse from "../../public/seventhHouse.jpg";
import sixthHouse from "../../public/sixthHouse.jpg";

import { HeartIcon } from "@heroicons/react/24/outline";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

const Latest = () => {
	return (
		<section className="desktop:my-14 desktop:mx-[4rem] my-14">
			<div className="flex flex-col desktop:flex-row desktop:justify-between items-center mb-[3rem]">
				<div className="max-w-max">
					<h1 className="font-bold text-[34px] desktop:text-[48px] leading-tight mb-4 text-skin-black">
						Uncover The Latest
						<br className="hidden desktop:block" /> Trends And Stories
					</h1>
				</div>
				<div className="">
					<p className=" leading-tight text-skin-black">
						Star informed and updated with the latest trends, home{" "}
						<br className="hidden desktop:block" />
						improvement ideas, and our clients story who have
						<br className="hidden desktop:block" /> achieved their real estate
						dreams
					</p>
				</div>
			</div>
			<div className="flex desktop:flex-row flex-col desktop:justify-between gap-4 h-full desktop:h-[40rem]">
				<div
					style={{
						backgroundImage: `url(${firstHouse.src})`,
						backgroundPosition: "center",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
					}}
					className="relative overflow-hidden h-[25rem]  desktop:h-full desktop:flex-1 rounded-xl p-4 flex flex-col justify-end"
				>
					<div className="bg-black flex items-center justify-center absolute top-4 right-4 p-2 rounded-full">
						<HeartIcon className="h-[22px] w[22px] text-red-600  stroke-5" />
					</div>
					<div className="flex flex-col justify-between rounded-xl w-full h-[11rem] p-4 bg-skin-dark">
						<div className="flex justify-between items-center relative">
							<div className="flex items-center">
								<span className="font-medium text-skin-mutted underline">
									Unigue House
								</span>
							</div>
							<div className=" ">
								<div className="bg-skin-green flex items-center justify-center p-3 rounded-full ">
									<ArrowUpRightIcon className="desktop:h-[22px] h-[18px] w-[18px] desktop:w[22px] text-skin-base" />
								</div>
							</div>
						</div>
						<div className="flex justify-between">
							<div className="flex flex-col text-skin-base gap-2 ">
								<p>
									Rustic Castle Retreatment in the French Countryside Offers a
									Fairytale Escape.
								</p>
								<span className="block text-skin-mutted">10 hours ago</span>
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
					className="relative desktop:h-full h-[25rem] desktop:flex-1  overflow-hidden rounded-xl"
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
					className=" relative desktop:h-full h-[25rem] desktop:flex-1 overflow-hidden rounded-xl"
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
