import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { useState } from "react";

const AnimatedButton = ({ text }: { text: string }) => {
	const [isHovered, setIsHovered] = useState(false);
	return (
		<div>
			<button
				className={`relative inline-flex justify-center items-center w-full bg-white  ${
					isHovered ? "text-white" : "text-black"
				} h-8 lg:h-10 rounded-md font-semibold text-xl overflow-hidden transition-colors duration-300`}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<div className="w-full absolute z-10">{text}</div>
				<motion.div
					className="absolute top-10 z-0"
					animate={{
						scale: isHovered ? 6 : 0,
						transition: {
							duration: 0.3,
						},
					}}
					initial={{
						scale: 0,
					}}
				>
					<svg
						width="100"
						height="100"
						viewBox="0 0 100 100"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle cx="50" cy="50" r="50" fill="#ea2127" />
					</svg>
				</motion.div>
			</button>
		</div>
	);
};

export default AnimatedButton;
