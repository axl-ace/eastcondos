import React from "react";
import firstHouse from "../../public/firstHouse.jpg";
import secondHouse from "../../public/secondHouse.jpg";
import thirdHouse from "../../public/thirdHouse.jpg";
import forthHouse from "../../public/forthHouse.jpg";
import { HeartIcon } from "@heroicons/react/24/outline";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

const Discover = () => {
	return (
		<section className="mx-[4rem]">
			<div className="flex justify-between items-center">
				<div className="max-w-max">
					<h1 className="font-bold text-[48px] leading-tight">
						Discover Your Perfect
						<br /> Property Match
					</h1>
				</div>
				<div className="">
					<p className=" leading-tight">
						Embark on a journey of discovery through exclusive <br />
						Collections of homes, luxury properties to fulfill your
						<br /> aspirations and inspire your imagination.
					</p>
				</div>
			</div>
			<div className=" flex justify-between gap-4 h-[45rem] mt-8">
				<div
					style={{
						backgroundImage: `url(${firstHouse.src})`,
						backgroundPosition: "center",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
					}}
					className="relative w-[50%] overflow-hidden h-full rounded-xl p-4 flex flex-col justify-end"
				>
					<div className="bg-black flex items-center justify-center absolute top-4 right-4 p-2 rounded-full">
						<HeartIcon className="h-[22px] w[22px] text-red-600  stroke-5" />
					</div>
					<div className="flex flex-col justify-between rounded-xl w-full h-[10rem] p-4 bg-[#282828]">
						<div className="flex justify-between items-center relative">
							<span className="font-bold text-white text-[40px]">
								$1,200,000
							</span>
							<div className="bg-[#B18A5C] flex items-center justify-center absolute top-0 right-0 p-3 rounded-full">
								<ArrowUpRightIcon className="h-[22px] w[22px] text-white" />
							</div>
						</div>
						<div className="flex justify-between">
							<div className="flex flex-col text-white">
								<span className="block">21 Gotham Road</span>
								<span className="block">Belmont. MA 0248</span>
							</div>
							<div className="flex gap-4 text-[#fff4e7]">
								<div>
									<p>10,169</p>
									<p>Sq.Ft</p>
								</div>
								<div className=" border-l border-r px-3 border-white">
									<p>6</p>
									<p>Beds.</p>
								</div>
								<div>
									<p>8</p>
									<p>Baths.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-4 justify-between overflow-hidden w-[50%] h-full rounded-xl">
					<div
						style={{
							backgroundImage: `url(${secondHouse.src})`,
							backgroundPosition: "center",
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
						}}
						className="h-[50%] relative w-full overflow-hidden rounded-xl"
					>
						<div className="bg-black flex items-center justify-center absolute top-4 right-4 p-2 rounded-full">
							<HeartIcon className="h-[22px] w[22px] text-red-600  stroke-5" />
						</div>
					</div>
					<div className=" flex justify-between h-[50%] w-full overflow-hidden rounded-xl gap-4">
						<div
							style={{
								backgroundImage: `url(${forthHouse.src})`,
								backgroundPosition: "center",
								backgroundSize: "cover",
								backgroundRepeat: "no-repeat",
							}}
							className="w-[50%] h-full relative overflow-hidden rounded-xl"
						>
							<div className="bg-black flex items-center justify-center absolute top-4 right-4 p-2 rounded-full">
								<HeartIcon className="h-[22px] w[22px] text-red-600  stroke-5" />
							</div>
						</div>

						<div
							style={{
								backgroundImage: `url(${thirdHouse.src})`,
								backgroundPosition: "center",
								backgroundSize: "cover",
								backgroundRepeat: "no-repeat",
							}}
							className="h-full relative w-[50%] overflow-hidden rounded-xl"
						>
							<div className="bg-black flex items-center justify-center absolute top-4 right-4 p-2 rounded-full">
								<HeartIcon className="h-[22px] w[22px] text-red-600  stroke-5" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Discover;
