"use client";
import React from "react";
import { motion } from "framer-motion";
import { curve } from "@/lib/anim";

export default function Curve() {
	return (
		<svg className="absolute -left-[99px] top-0 h-full w-[100px] fill-[#111110]">
			<motion.path
				variants={curve}
				initial="initial"
				animate="enter"
				exit="exit"
			/>
		</svg>
	);
}
