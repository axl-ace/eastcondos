import React from "react";
import Image from "next/image";
import second from "../../public/city.jpg";

// import { BeakerIcon } from '@heroicons/react/24/solid'

// function MyComponent() {
//   return (
//     <div>
//       <BeakerIcon className="h-6 w-6 text-blue-500" />
//       <p>...</p>
//     </div>
//   )
// 

const Achievements = () => {
	return (
		<section className="desktop:my-[4rem] desktop:mx-[4rem] my-14">
			<div className="flex flex-col desktop:flex-row gap-4 desktop:justify-between items-center mb-8">
				<div className=" desktop:max-w-max">
					<h1 className="font-bold text-[34px] desktop:text-[48px] leading-tight">
						Your Trusted Real <br className="hidden desktop:block"/> Estate Advisors
					</h1>
				</div>
				<div className="">
					<p>
						A cutting-edge real state agent that offers a seamless <br className="hidden desktop:block" /> and
						immersive experience for finding your dream home <br className="hidden desktop:block" /> in the heart
						of the city{" "}
					</p>
				</div>
			</div>

			<div className="flex flex-col desktop:flex-row w-full items-center justify-between h-full desktop:h-[25rem] gap-4">
				<div className="desktop:w-[50%] w-full h-full flex flex-col justify-between gap-4 ">
					<div className="gap-4 flex h-[50%] items-center justify-between">
						<div className=" bg-white w-[50%] h-full flex flex-col p-4 desktop:pl-8 justify-center rounded-xl">
							<h1 className="font-bold text-[48px]">17k+</h1>
							<span className="font-medium">Satisfied<br className="desktop:hidden block"/> Customers</span>
						</div>
						<div className=" bg-[#282828] text-white w-[50%] h-full flex flex-col p-4 desktop:pl-8 justify-center rounded-xl">
							<h1 className="font-bold text-[48px]">25+</h1>
							<span className="font-medium">Years of<br className="desktop:hidden block"/> Experience</span>
						</div>
					</div>
					<div className="gap-4  flex h-[50%] justify-between rounded-xl">
						<div className="bg-[#F0EFED] w-[50%] h-full flex flex-col p-4 desktop:pl-8 justify-center rounded-xl">
							<h1 className="font-bold text-[48px]">150+</h1>
							<span className="font-medium ">Award <br className="desktop:hidden block"/>Winning</span>
						</div>
						<div className="bg-[#F0EFED] w-[50%] h-full flex flex-col p-4 desktop:pl-8 justify-center rounded-xl">
							<h1 className="font-bold text-[48px]">25+</h1>
							<span className="font-medium">Property<br className="desktop:hidden block"/> Collections</span>
						</div>
					</div>
				</div>
				<div className="bg-[#F0EFED] desktop:w-[50%] h-full flex flex-col desktop:flex-row gap-4 p-4 rounded-xl ">
					<div className=" desktop:w-[50%] pr-4">
						<div>
							<p className="">
								We have witnessed the ever-evolving landscape of the real estate
								market and become a trusted partner by thousands of clients.
							</p>
						</div>
					</div>
					<div
						style={{
							// use the src property of the image object
							backgroundImage: `url(${second.src})`,
							// other styles
							backgroundPosition: "center",
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
						}}
						className="bg-black overflow-hidden desktop:h-full desktop:w-[50%] h-[15rem] w-full rounded-xl  flex items-center justify-center"
					>

					</div>
				</div>
			</div>
		</section>
	);
};

export default Achievements;
