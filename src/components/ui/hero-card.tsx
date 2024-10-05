import { CardTypes } from "@/types/shirts";
import Image from "next/image";
import Link from "next/link";

const HeroCard = ({ shirt }: { shirt: CardTypes }) => {
	return (
		<div className="space-y-2 mx-0 md:mx-[6px] lg:mx-2">
			<Link href="#">
				<Image
					src={shirt.img}
					alt={shirt.title}
					className="w-40 md:w-52 lg:w-64 aspect-[9/10] object-cover object-center rounded-lg"
				/>
				<div className="p-1 md:p-2">
					<h1 className="text-xs md:text-sm text-white w-40 md:w-52 lg:w-64 ">
						{shirt.title}
					</h1>
					<div className="flex gap-4 text-sm md:text-base text-[#fbd3d4]">
						<p>${shirt.recentPrice}</p>
						<p>
							<del>${shirt.previousPrice}</del>
						</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default HeroCard;
