import { Variants } from "framer-motion";

export interface AnimatedLetterProps {
	character: string;
	animation: Variants;
}
export interface AnimatedWordProps {
	text: string;
	animation: Variants;
  isHovered: boolean;
}