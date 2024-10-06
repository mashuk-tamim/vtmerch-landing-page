"use client"
import { CardTypes } from "@/types/shirts-types";
import Image from "next/image";
import Link from "next/link";
import { Lens } from "../ui/lens";
import { useState } from "react";

const HeroCard = ({ shirt }: { shirt: CardTypes }) => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
	return (
		<div className="space-y-2 mx-0 md:mx-[6px] lg:mx-2">
			<Link href={shirt.href}>
				<Lens
					id={shirt.id}
					hovering={hoveredImage === shirt.id}
					setHovering={(isHovering) =>
						setHoveredImage(isHovering ? shirt.id : null)
					}
				>
					<Image
						src={shirt.img}
						alt={shirt.title}
						onMouseEnter={() => setHoveredImage(shirt.id)}
						onMouseLeave={() => setHoveredImage(null)}
						className="w-40 md:w-52 lg:w-64 aspect-[9/10] object-cover object-center rounded-lg"
					/>
				</Lens>
				<div className="p-1 md:p-2">
					<h1 className="text-xs md:text-sm text-white w-40 md:w-52 lg:w-64 ">
						{shirt.title}
					</h1>
					<div className="flex gap-4 text-sm md:text-base text-white font-medium">
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
