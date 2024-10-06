"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import signature from "@/assets/img/pat-signature White 1.png";
import book1 from "@/assets/img/choose_your_enemies_wisely.png";
import book2 from "@/assets/img/your_next_five_moves.png";
import { Button } from "./ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Book() {
	const [isButtonHovered, setIsButtonHovered] = useState<boolean>(false);
	const imageRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: imageRef,
		offset: ["1 1", "1 0"],
	});

	const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
	const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
	const rotate1 = useTransform(scrollYProgress, [0, 1], [0, -5]);
	const rotate2 = useTransform(scrollYProgress, [0, 1], [0, 5]);

	return (
		<section className="w-screen bg-[#111111] max-w-8xl mx-auto px-5 md:px-10 lg:px-20 py-10 lg:py-20 font-montserrat">
			<div className="flex flex-col md:flex-row justify-between items-center">
				<div className="uppercase w-full md:w-1/2">
					<h1 className="text-xl lg:text-4xl font-bold text-white">
						Patrick Bet-David&apos;s
					</h1>
					<h1 className="text-3xl lg:text-6xl font-bold text-red-primary lg:mt-2">
						Signed <br /> Collection
					</h1>
					<motion.button
						className="relative flex justify-center items-center py-[6px] lg:py-2 bg-white text-black rounded-lg mt-2 lg:mt-4 w-36 md:w-40 lg:w-48"
						whileHover="hover"
						initial="initial"
					>
						<motion.span
							variants={{
								initial: { x: 0 },
								hover: { x: -10 },
							}}
							transition={{
								duration: 0.3,
								ease: "easeInOut",
							}}
							className="text-xs md:text-sm lg:text-base"
						>
							SHOP NOW
						</motion.span>

						<motion.span
							className="absolute right-4 md:right-4 lg:right-6"
							variants={{
								initial: { opacity: 0, x: -10 },
								hover: { opacity: 1, x: 0 },
							}}
							transition={{
								duration: 0.3,
								ease: "easeInOut",
							}}
						>
							<MoveRight />
						</motion.span>
					</motion.button>

					<Image
						src={signature}
						alt="Patrick Bet-David's signature"
						className="w-2/3 md:w-[80%]"
					/>
				</div>
				<div
					ref={imageRef}
					className="flex justify-center items-center gap-2 md:gap-4 w-full md:w-1/2 py-10"
				>
					<motion.div
						style={{
							y: y1,
							rotate: rotate1,
						}}
						className="w-1/2"
					>
						<Image
							src={book1}
							alt="choose_your_enemies_wisely"
							className="w-11/12 md:w-full h-auto object-contain"
						/>
					</motion.div>
					<motion.div
						style={{
							y: y2,
							rotate: rotate2,
						}}
						className="w-1/2"
					>
						<Image
							src={book2}
							alt="your_next_five_moves"
							className="w-11/12 md:w-full h-auto object-contain"
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

// <Button
//   size="lg"
//   variant="secondary"
//   className="flex gap-2 mt-2 lg:mt-4"
//   whileHover="hover"
//   initial="initial"
//   variants={{
//     initial: { justifyContent: "center" }, // Centered initially
//     hover: { justifyContent: "start" }, // Moves left on hover
//   }}
// >
//   SHOW NOW{" "}
//   <motion.span
//     onHoverStart={{ scale: 0 }}
//     onHoverEnd={{ scale: 1 }}
//     transition={{
//       duration: 0.3,
//       ease: "easeInOut",
//     }}
//   >
//     <MoveRight />
//   </motion.span>
// </Button>
