import React, { useState } from "react";
import { motion } from "framer-motion";
import {
	wordLetterAnimation,
	wordLetterAnimationTwo,
} from "@/lib/word-hover-anim";
import { AnimatedWord } from "../Buttons/animated-word";

export default function WordHoverAnimation({
	text,
}: {
	text: string;
}) {
	const [isHovered, setHovered] = useState<boolean>(false);

	return (
		<motion.div
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			className={`relative overflow-hidden ${
				isHovered
					? "text-red-primary font-outline-shadow"
					: "font-outline-shadow text-[#f6f5f5]"
			}`}
		>
			<AnimatedWord
				text={text}
				animation={wordLetterAnimation}
        isHovered={isHovered}
        />
			<div className="absolute top-0">
				<AnimatedWord
					text={text}
					animation={wordLetterAnimationTwo}
					isHovered={isHovered}
				/>
			</div>
		</motion.div>
	);
}
