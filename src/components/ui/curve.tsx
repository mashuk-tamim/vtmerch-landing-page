"use client";
import React from "react";
import { motion } from "framer-motion";
import { curve } from "@/animations/menu-anim";

export default function Curve() {
	return (
		<svg className="absolute -left-[99px] top-0 h-full w-[100px] fill-black-primary">
			<motion.path
				variants={curve}
				initial="initial"
				animate="enter"
				exit="exit"
			/>
		</svg>
	);
}
