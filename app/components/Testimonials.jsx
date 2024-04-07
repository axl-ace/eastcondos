import React from "react";
import Testimony from "./Testimony";
import { testimonies } from "@app/Constants/testimonies";
const Testimonials = () => {
	return (
		<section className="m-[4rem]">
			<div className="flex flex-col  justify-between items-center">
				<div className="max-w-max mb-4">
					<h1 className="font-bold text-[48px] leading-tight">
						Discover Your Perfect Property Match
					</h1>
				</div>
				<div className="">
					<p className=" leading-tight text-center">
						Discover heartfelt accounts of joy and fulfilment as our valued
						clients embark on <br /> the quest for their dream homes and prime
						investments
					</p>
				</div>
			</div>
			<div className="flex flex-wrap gap-4 justify-between ">
				{testimonies.map((testimony, key) => (
					<div key={key} className="w-[50%]">
						<Testimony Name={testimony.Author} Qoute={testimony.Quote} />
					</div>
				))}
			</div>
		</section>
	);
};

export default Testimonials;
