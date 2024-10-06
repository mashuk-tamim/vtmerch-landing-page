import React, { useState } from "react";
import { motion } from "framer-motion";

import { AnimatedWord } from "./animated-word";
import { linkLetterAnimation, linkLetterAnimationTwo } from "@/lib/link-hover.anim";

export default function LinkHoverAnimation({
	text,
}: {
	text: string;
  }) {
  const [isHovered, setHovered] = useState<boolean>(false);
	return (
		<motion.div
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			className={`relative overflow-hidden py-0 ${
				isHovered ? "text-red-primary" : ""
			}`}
		>
			<AnimatedWord
				text={text}
				animation={linkLetterAnimation}
				isHovered={isHovered}
			/>
			<div className="absolute top-0">
				<AnimatedWord
					text={text}
					animation={linkLetterAnimationTwo}
					isHovered={isHovered}
				/>
			</div>
		</motion.div>
	);
}