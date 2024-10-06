import React, { useState } from "react";
import { motion } from "framer-motion";
import {
	letterAnimation,
	letterAnimationTwo,
} from "@/lib/word-hover-anim";
import { AnimatedWord } from "./animated-word";

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
			className={`relative overflow-hidden py-0 ${isHovered? "text-red-primary" : ""}`}
		>
			<AnimatedWord
        text={text}
        animation={letterAnimation}
        isHovered={isHovered}
        />
			<div className="absolute top-0">
				<AnimatedWord
					text={text}
					animation={letterAnimationTwo}
					isHovered={isHovered}
				/>
			</div>
		</motion.div>
	);
}