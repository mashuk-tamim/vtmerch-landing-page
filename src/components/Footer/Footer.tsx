import Image from "next/image";
import React from "react";
import logo from "@/assets/Logo/red-logo.svg";
import Subscribe from "./subscribe";
import FooterLinks from "./footer-links";
import FooterPayments from "./footer-payments";

export default function Footer() {
	return (
		<footer className="bg-black w-screen max-w-8xl mx-auto px-5 md:px-10 lg:px-20 py-5">
			<div className="">
				{/* logo section */}
				<div className="border-b border-[#535351] pb-5">
					<div className="flex items-center gap-2">
						<Image
							className="size-6 md:size-8 lg:size-16"
							src={logo}
							alt="logo"
						/>
						<h1 className="text-[20px] md:text-[30px] lg:text-[60px] text-white font-extrabold tracking-widest">
							VTMERCH
						</h1>
					</div>
				</div>
				{/* links section */}
				<div className="flex flex-col lg:flex-row gap-10 lg:gap-20 pt-10">
					<div className="lg:w-[35%]">
						<Subscribe />
					</div>
					<div className="lg:w-[65%]">
						<FooterLinks />
					</div>
				</div>
				{/* footer section */}
				<FooterPayments />
			</div>
		</footer>
	);
}
