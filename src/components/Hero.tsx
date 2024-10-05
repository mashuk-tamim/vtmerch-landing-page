"use client";
import React from "react";
import { motion } from "framer-motion";
import { shirts } from "@/mockData/shirts";
import HeroCard from "./ui/hero-card";

export default function Hero() {
	return (
		<section className="w-screen bg-red-primary max-w-8xl mx-auto px-1 md:px-2 py-10 lg:py-20 font-montserrat">
			<h1 className="uppercase text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-[#f27a7d] font-actOfRejection px-2 md:px-5 lg:px-10 relative z-0">
				future looks brights!
			</h1>
			<div className="flex overflow-hidden -mt-3 lg:-mt-5 xl:-mt-8 mask-gradient relative z-10">
				<motion.div
					initial={{ x: "0%" }}
					animate={{ x: "-100%" }}
					transition={{
						duration: 30,
						repeat: Infinity,
						repeatType: "loop",
						repeatDelay: 0,
						ease: "linear",
					}}
					className="flex flex-shrink-0 justify-between"
				>
					{shirts.map((shirt) => {
						return <HeroCard key={shirt.id} shirt={shirt} />;
					})}
				</motion.div>
				<motion.div
					initial={{ x: "0%" }}
					animate={{ x: "-100%" }}
					transition={{
						duration: 30,
						repeat: Infinity,
						repeatType: "loop",
						repeatDelay: 0,
						ease: "linear",
					}}
					className="flex flex-shrink-0 justify-between"
				>
					{shirts.map((shirt) => {
						return <HeroCard key={shirt.id} shirt={shirt} />;
					})}
				</motion.div>
			</div>
		</section>
	);
}