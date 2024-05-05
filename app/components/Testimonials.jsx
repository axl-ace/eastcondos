import React from "react";
import Testimony from "./Testimony";
import { testimonies } from "@app/Constants/testimonies";
const Testimonials = () => {
	return (
		<section className="desktop:m-[4rem] my-14">
			<div className="flex flex-col  justify-between items-center mb-8">
				<div className="max-w-max mb-4">
					<h1 className="font-bold text-[34px] desktop:text-[48px] text-skin-black leading-tight">
						Discover Your Perfect Property Match
					</h1>
				</div>
				<div className="">
					<p className=" leading-tight desktop:text-center text-skin-black">
						Discover heartfelt accounts of joy and fulfilment as our valued
						clients embark on <br className="hidden desktop:block"/> the quest for their dream homes and prime
						investments
					</p>
				</div>
			</div>
			<div className="flex  flex-col flex-wrap gap-4 justify-between ">
				{testimonies.map((testimony, key) => (
					<div key={key} className=" ">
						<Testimony Name={testimony.Author} Qoute={testimony.Quote} />
					</div>
				))}
			</div>
		</section>
	);
};

export default Testimonials;
