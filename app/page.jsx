"use client";

import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Achievements from "./components/Achievements";
import Discover from "./components/Discover";
import International from "./components/International";
import Latest from "./components/Latest";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

import HeaderMobile from "./components/Mobile-navs";

const Page = () => {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;

			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);

	return (
		<div className="w-full px-6 pb-6 pt-[4rem] desktop:pt-0">
			<div className="  border-b-[0.5px] overflow-visible border-gray-800/20 desktop:hidden flex justify-between items-center mb-8 z-50 fixed w-full h-12 inset-0">
				<HeaderMobile />
				<div><span className='font-bold z-50 text-[24px] ml-4'>Eastate</span></div>
				<div className="absolute z-[-1] inset-0 bg-skin-white/50 backdrop-blur-lg"/>
			</div>
			<Navbar />
			<Hero />
			<Achievements />
			<Discover />
			<International />
			<Latest />
			<Testimonials />
			<Footer />
		</div>
	);
};

export default Page;
