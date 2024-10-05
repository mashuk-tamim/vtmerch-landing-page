import React from "react";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import signature from "@/assets/img/pat-signature White 1.png";
import book1 from "@/assets/img/choose_your_enemies_wisely.png";
import book2 from "@/assets/img/your_next_five_moves.png";
import { Button } from "./ui/button";

export default function Book() {
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
					<Button size="lg" variant="secondary" className="flex gap-2 mt-2 lg:mt-4">
						SHOW NOW <FaArrowRightLong />
					</Button>
					<Image
						src={signature}
						alt="Patrick Bet-David's signature"
						className="w-2/3 md:w-[80%]"
					/>
				</div>
				<div className="flex justify-center items-center gap-2 md:gap-4 w-full md:w-1/2 py-10">
					<div className="w-1/2">
						<Image
							src={book1}
							alt="choose_your_enemies_wisely"
							className="w-11/12 md:w-full h-auto object-contain"
						/>
					</div>
					<div className="w-1/2">
						<Image
							src={book2}
							alt="your_next_five_moves"
							className="w-11/12 md:w-full h-auto object-contain"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
