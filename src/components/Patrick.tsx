import Image from "next/image";
import React from "react";
import patrick from "@/assets/img/patrick.png";
import quote from "@/assets/svg/quote.svg";

export default function Patrick() {
	return (
		<section className="w-screen bg-red-primary">
			<div className="max-w-7xl mx-auto px-10 font-montserrat">
				<div className="bg-red-primary flex items-center">
					<div className="relative pt-10">
						<div className="flex gap-4 absolute bottom-[90px] -left-[60px] z-0">
							<Image src={quote} alt="quote" className="w-[80px]" />
							<Image src={quote} alt="quote" className="w-[80px]" />
						</div>
						<h1 className="uppercase text-4xl font-bold text-white relative z-50">
							Our mission is to enlighten, entertain and empower current and
							future leaders around the world.
						</h1>
					</div>
					<Image
						src={patrick}
						alt="patrick"
						className="w-[1000px] -mt-20"
					/>
				</div>
			</div>
		</section>
	);
}
