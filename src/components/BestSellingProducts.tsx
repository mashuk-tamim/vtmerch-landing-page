import React from "react";
import { BestSellingCard } from "./ui/best-selling-card";
import { caps } from "../mockData/caps";
import WordHoverAnimation from "./ui/word-hover-animation";

export default function BestSellingProducts() {
	return (
		<section className="w-screen bg-[#f6f5f5] max-w-8xl mx-auto px-5 md:px-10 lg:px-20 py-10 lg:py-20 font-montserrat">
			<div className="">
				<div className="">
					<h1 className="uppercase text-2xl md:text-4xl lg:text-6xl text-[#060606] font-semibold font-montserrat">
						Buy 1 Get 1 Free
					</h1>
					<h1 className="uppercase text-2xl md:text-4xl lg:text-6xl text-[#060606] font-semibold font-montserrat flex gap-4">
						on
						<WordHoverAnimation text={"BEST SELLING PRODUCTS"} />
					</h1>
				</div>
				<div className="pt-10">
					<BestSellingCard items={caps} />
				</div>
			</div>
		</section>
	);
}
