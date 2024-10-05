import { CardTypes } from "@/types/shirts";
import Image from "next/image";
import Link from "next/link";

const HeroCard = ({ shirt }: { shirt: CardTypes }) => {
	return (
		<div className="space-y-2 mx-2">
			<Link href="#">
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
			</Link>
		</div>
	);
};

export default HeroCard;
