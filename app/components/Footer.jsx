import React from "react";

const Footer = () => {
	return (
		<section className="bg-[#282828] rounded-xl">
			<div className="desktop:px-[4rem] desktop:py-[4rem] p-6 ">
				<div className="flex justify-between items-center border-b-[0.3px] border-white pb-8">
					<div>
						<h1 className="font-bold text-[34px] tablet:text-[48px] text-white">
							Ready To Work With Us?
						</h1>
						<p className="text-white text-sm">
							Experience top-notch customer service and let us guide you on your
							property journey
						</p>
					</div>
				</div>
				<div className="flex flex-col justify-between mt-8  text-white">
					<div className="mb-4">
						<span className="font-bold text-[1.5rem]">Eastate</span>
					</div>
					<div className="flex flex-col desktop:flex-row justify-between">
						<div className="max-w-[15rem] mb-6">
							<p className="text-xs">
								A cutting-edge real eastate agent that offers a seamless and
								immersive experience for finding your dream home
							</p>
							<div className="border border-gray-400 max-w-max p-2 rounded-md mt-4">
								<form action="" className="flex gap-4">
									<input
										type="text"
										name="write"
										placeholder="Write your email here"
										id=""
										className="bg-transparent text-xs"
									/>
									<input
										type="submit"
										value="Submit"
										className="bg-[#B18A5C] px-4 py-2 rounded-md text-xs"
									/>
								</form>
							</div>
						</div>
						<div className="text-gray-300 text-xs flex flex-wrap  desktop:flex-nowrap gap-12 w-[40%]">
							<div className="flex flex-1 flex-col gap-3">
								<span className="text-white text-sm">Home</span>
								<span>About us</span>
								<span>Collection</span>
								<span>Blog & news</span>
							</div>
							<div className="flex flex-1 flex-col gap-3">
								<span className="text-white text-sm">Security</span>
								<span>Privacy Policy</span>
								<span>User Agreement</span>
								<span>Copyright</span>
							</div>
							<div className="flex flex-1  flex-col gap-3">
								<span className="text-white text-sm">Social Media</span>
								<span>Instagram</span>
								<span>Facebook</span>
								<span>Twitter</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
