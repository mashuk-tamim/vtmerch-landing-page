"use client"
import Image from "next/image";
import React from "react";
import patrick from "@/assets/img/patrick.png";
import quote from "@/assets/Icon/quotes.svg";
import { motion } from "framer-motion";

export default function Patrick() {
	return (
		<section className="w-screen bg-red-primary max-w-8xl mx-auto px-5 md:px-10 lg:px-20 font-montserrat h-[25vh] md:h-[40vh] lg:h-[40vh] xl:h-[40vh]">
			<div className="flex items-center relative h-full">
				<div className="relative py-10 lg:py-20">
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						className="flex gap-4 absolute top-[10px] md:-top-[20px] -left-[10px] md:-left-[20px] lg:-top-[0px] lg:-left-[30px] z-0"
					>
						<Image
							src={quote}
							alt="quote"
							className="w-[50px] md:w-[100px] lg:w-[120px]"
						/>
					</motion.div>
					<h1 className="uppercase text-sm md:text-2xl lg:text-4xl font-bold text-white w-[60%] md:w-[70%]">
						Our mission is to enlighten, entertain and empower current and
						future leaders around the world.
					</h1>
				</div>
				<Image
					src={patrick}
					alt="patrick"
					className="w-[180px] md:w-[270px] lg:w-[350px] absolute bottom-0 right-0"
				/>
			</div>
		</section>
	);
}
