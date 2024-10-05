"use client";
import React from "react";
import { motion, useAnimationControls } from "framer-motion";
import { shirts } from "@/mockData/shirts";
import HeroCard from "./ui/hero-card";

export default function Hero() {
  const controls = useAnimationControls();
	return (
		<section className="w-screen bg-black max-w-8xl mx-auto px-1 md:px-2 py-10 lg:py-20 font-montserrat">
			<h1 className="uppercase text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-red-primary font-actOfRejection px-2 md:px-5 lg:px-10 relative z-0">
				future looks brights!
			</h1>
			<div className="flex overflow-hidden -mt-3 lg:-mt-5 xl:-mt-8 mask-gradient relative z-10">
				{[...Array(2)].map((_, idx) => (
					<motion.div
						key={idx}
						animate={controls}
						initial={{ x: "0%" }}
						onMouseEnter={() => {
							controls.stop();
						}}
						onMouseLeave={() => {
							controls.start({
								x: "-100%",
								transition: {
									duration: 30,
									ease: "linear",
									repeat: Infinity,
									repeatType: "loop",
								},
							});
						}}
						className="flex flex-shrink-0 justify-between"
					>
						{shirts.map((shirt) => (
							<HeroCard key={shirt.id} shirt={shirt} />
						))}
					</motion.div>
				))}
			</div>
		</section>
	);
}
