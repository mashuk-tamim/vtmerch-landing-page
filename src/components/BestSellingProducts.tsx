"use client";
import React from "react";
import { CardHoverEffect } from "./ui/card-hover-effect";
import { caps } from "../mockData/caps";

export default function BestSellingProducts() {
	return (
		<section className="w-screen bg-[#f6f5f5] max-w-8xl mx-auto px-5 md:px-10 lg:px-20 py-10 lg:py-20 font-montserrat">
			<div className="">
				<div className="">
					<h1 className="uppercase text-2xl md:text-4xl lg:text-6xl text-[#060606] font-semibold font-montserrat">
						Buy 1 Get 1 Free
					</h1>
					<h1 className="uppercase text-2xl md:text-4xl lg:text-6xl text-[#060606] font-semibold font-montserrat">
						on{" "}
						<span className="font-outline-shadow text-[#f6f5f5]">
							Best Selling Products
						</span>
					</h1>
				</div>
				<div className="pt-10">
					<CardHoverEffect items={caps} />
				</div>
			</div>
		</section>
	);
}
