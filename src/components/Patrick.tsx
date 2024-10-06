"use client";
import Image from "next/image";
import React from "react";
import patrick from "@/assets/img/patrick.png";
import doubleQuote from "@/assets/Icon/quotes.svg";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import PatrickQuote from "./ui/patrick-quote";

const QUOTE =
	"Our mission is to enlighten, entertain and empower current and future leaders around the world.";

export default function Patrick() {
	const containerRef = useRef(null);
	const quoteRef = useRef(null);
	const isInView = useInView(quoteRef, { once: true });
	useEffect(() => {
		console.log("Element is in view: ", isInView);
	}, [isInView]);

	return (
		<section
			ref={containerRef}
			className="w-screen bg-gradient-to-r from-[#ec3339] to-[#bb1217] max-w-8xl mx-auto px-5 md:px-10 lg:px-20 font-montserrat h-[30vh] md:h-[40vh]"
		>
			<div className="flex items-center relative h-full">
				<div className="relative py-10 lg:py-20 z-100">
					<motion.div
						ref={quoteRef}
						initial={{ scale: 0 }}
						animate={{ scale: isInView ? 1 : 0 }}
						transition={{
							duration: 1,
							delay: 0.3,
							ease: "easeInOut",
						}}
						className="flex gap-4 absolute top-[10px] -left-[10px] md:top-[10px] md:-left-[20px] lg:top-[30px] lg:-left-[30px] z-0"
					>
						<Image
							src={doubleQuote}
							alt="quote"
							className="w-[50px] md:w-[80px] lg:w-[100px]"
						/>
					</motion.div>
					<h1 className="uppercase text-sm md:text-2xl lg:text-4xl font-bold text-white w-[60%]">
						<PatrickQuote quote={QUOTE} />
					</h1>
				</div>
				<Image
					src={patrick}
					alt="patrick"
					className="w-[200px] md:w-[270px] lg:w-[350px] absolute bottom-0 right-0"
				/>
			</div>
		</section>
	);
}
