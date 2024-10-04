import React from "react";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import signature from "@/assets/img/pat-signature White 1.png";
import book1 from "@/assets/img/choose_your_enemies_wisely.png";
import book2 from "@/assets/img/your_next_five_moves.png";

export default function Book() {
	return (
		<section className="w-screen bg-[#111111]">
			<div className="max-w-7xl mx-auto px-10 font-montserrat">
				<div className="flex justify-between py-20">
					<div className="uppercase space-y-5">
						<h1 className="text-4xl font-bold text-white">
							Patrick Bet-David&apos;s
						</h1>
						<h1 className="text-6xl font-bold text-red-primary">Signed</h1>
						<h1 className="text-6xl font-bold text-red-primary">Collection</h1>
						<button className="uppercase border px-8 py-2 rounded-lg bg-white font-semibold text-black flex gap-2 items-center">
							Shop Now <FaArrowRightLong />
						</button>
						<Image
							src={signature}
							alt="Patrick Bet-David's signature"
							className="w-"
						/>
					</div>
					<div className="flex items-center">
						<Image
							src={book1}
							alt="choose_your_enemies_wisely"
							className="w-[380px] h-[400px]"
						/>
						<Image
							src={book2}
							alt="your_next_five_moves"
							className="w-[380px] h-[400px]"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
