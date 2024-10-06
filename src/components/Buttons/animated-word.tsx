import { AnimatedLetterProps, AnimatedWordProps } from "@/types/word-hover-types";
import { motion } from "framer-motion";
import { letterStaggerAnimation } from "@/animations/letter-stagger-anim";


export const AnimatedLetter = ({
	character,
	animation,
}: AnimatedLetterProps) => {
	return (
		<motion.span
			variants={animation}
			className="relative inline-block whitespace-nowrap"
		>
			{character}
		</motion.span>
	);
};

export const AnimatedWord = ({
	text,
	animation,
  isHovered,
}: AnimatedWordProps) => {
	return (
		<motion.span
			variants={letterStaggerAnimation}
			initial="rest"
			animate={isHovered ? "hover" : "rest"}
			className="whitespace-nowrap relative"
		>
			{text
				.split("")
				.map((character, index) =>
					character === " " ? (
						<span key={index}>&nbsp;</span>
					) : (
						<AnimatedLetter
							character={character}
							animation={animation}
							key={index}
						/>
					)
				)}
		</motion.span>
	);
};
