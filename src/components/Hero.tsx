"use client";
import React from "react";
import { motion } from "framer-motion";
import { shirts } from "@/mockData/shirts";
import HeroCard from "./ui/HeroCard";


export default function Hero() {
	return (
		<section className={`w-screen bg-[#ea2127]`}>
			<div className="max-w-7xl mx-auto p-10">
				<h1 className="uppercase text-8xl text-[#f27a7d] font-actOfRejection">
					future looks brights!
				</h1>
				<div className="flex overflow-hidden -mt-8 mask-gradient">
					<motion.div
						initial={{ x: "0%" }}
						animate={{ x: "-100%" }}
						transition={{
							duration: 10,
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
							duration: 10,
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
			</div>
		</section>
	);
}
