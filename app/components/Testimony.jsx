import React from "react";

const Testimony = ({Image, Qoute, Name, Stars, QouteIcon}) => {
	return (
		<div className="relative rounded-xl px-4 pb-4 pt-12 flex flex-col bg-[#F7F7F7]">
			<div className="absolute top-[-1rem] left-[3rem] bg-yellow-500 h-[60px] w-[60px] border-4 border-[#FAFAFA] rounded-full"></div>

			<div className="flex flex-col">
				<div>
					<p className=" text-gray-400 text-[17px]">{Qoute}</p>
				</div>
				<div className="flex justify-between w-full">
					<div className="flex flex-col justify-between">
						<span className="block font-medium">{Name}</span>
						<div>Stars</div>
					</div>
					<div>Qoute Icon</div>
				</div>
			</div>
		</div>
	);
};

export default Testimony;
