"use client";
import React from "react";
import { CardHoverEffect } from "./ui/card-hover-effect";
import { caps } from "../mockData/caps";

export default function BestSellingProducts() {
	return (
		<section className="w-screen bg-[#f6f5f5] max-w-7xl mx-auto px-10 py-20">
			<div className="">
				<div className="">
					<h1 className="uppercase text-6xl text-[#060606] font-semibold font-montserrat">
						Buy 1 Get 1 Free
					</h1>
					<h1 className="uppercase text-6xl text-[#060606] font-semibold font-montserrat">
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
