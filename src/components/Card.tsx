import { ShirtProps } from "@/types/hero.shirts";
import Image from "next/image";

const Card = ({ shirt }: { shirt: ShirtProps }) => {
	return (
		<div className="space-y-2 mx-2">
			<Image
				src={shirt.img}
				alt={shirt.title}
				className="w-64 h-72 object-cover object-center rounded-lg"
			/>
			<h1 className="text-sm text-white">{shirt.title}</h1>
			<div className="flex gap-4">
				<p>${shirt.recentPrice}</p>
				<p>
					<del>${shirt.previousPrice}</del>
				</p>
			</div>
		</div>
	);
};

export default Card;
