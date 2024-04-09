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

const Page = () => {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;

			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);

	return (
		<div className="w-full px-6">
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
