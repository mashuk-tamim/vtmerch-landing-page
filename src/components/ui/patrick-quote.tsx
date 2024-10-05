import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function PatrickQuote({ quote }: { quote: string }) {
	const wordRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: wordRef,
		offset: ["0.5 1", "0 0.25"],
	});
  const words = quote.split(" ");

	return (
		<p ref={wordRef} style={{}} className="flex flex-wrap">
			{words.map((word, index) => {
				const start = index / words.length;
				const end = start + 1 / words.length;
				const range = [start, end];
				return (
					<Word range={range} scrollYProgress={scrollYProgress} key={index}>
						{word}
					</Word>
				);
			})}
		</p>
	);
}

type WordProps = {
	children: string;
	range: number[];
	scrollYProgress: import("framer-motion").MotionValue<number>;
};
const Word = ({ children, range, scrollYProgress }: WordProps) => {
	const opacity = useTransform(scrollYProgress, range, [0, 1]);
	return (
		<span className="relative mr-3 mt-3">
			<span className="absolute opacity-20">{children}</span>
			<motion.span
				style={{
					opacity,
					transitionDuration: "0.2s",
				}}
				className="relative"
			>
				{children}
			</motion.span>
		</span>
	);
};

/**
<h1 className="uppercase text-sm md:text-2xl lg:text-4xl font-bold text-white w-[60%]">
			{quote}
		</h1>
 */
