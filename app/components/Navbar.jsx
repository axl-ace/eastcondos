import React from "react";
import Link from "next/link";
import { Navlinks } from "@app/Constants/side-nav";
import { usePathname } from "next/navigation";


const Navbar = () => {
     const pathname = usePathname();
	// const navlist = [
	// 	{ id: 1, link: "About us" },
	// 	{ id: 2, link: "Property" },
	// 	{ id: 3, link: "Agent" },
	// ];
	return (
		<div className=" py-6 hidden desktop:block">
			<nav className="flex items-center justify-between ">
				<div>
					<span className="font-bold text-[24px]">Eastate</span>
				</div>
				<div className="flex justify-between items-center gap-6 text-[14px] font-medium">
					{Navlinks.map((link,index) => {
						return (
							<div key={index} className="">
									<Link
										href={link.path}
										// onClick={() => toggleOpen()}
										className={` ${
											link.path === pathname ? "font-bold" : ""
										}`}
									>
										{link.title}
									</Link>
							</div>
						);
					})}
					<button className="bg-[#282828] text-white py-2 px-6 rounded-[50px]">
						<Link href={'/contact-us'}>Contact us</Link>
					</button>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
