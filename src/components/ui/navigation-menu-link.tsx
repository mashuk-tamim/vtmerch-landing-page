"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { slide, scale } from "@/lib/anim";
import { LinkProps } from "@/types/menu";

export default function NavigationMenuLink({
	data,
	isActive,
	setSelectedIndicator,
}: LinkProps): JSX.Element {
	const { title, href, index } = data;

	return (
		<motion.div
			className="relative flex items-center"
			onMouseEnter={() => setSelectedIndicator(href)}
			custom={index}
			variants={slide}
			initial="initial"
			animate="enter"
			exit="exit"
		>
			<motion.div
				variants={scale}
				animate={isActive ? "open" : "closed"}
				className="absolute -left-[30px] h-2.5 w-2.5 rounded-full bg-white font-montserrat"
			/>
			<Link href={href} >{title}</Link>
		</motion.div>
	);
}
