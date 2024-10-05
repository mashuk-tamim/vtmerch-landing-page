import React from "react";

type SectionProps = {
	children: React.ReactNode;
	bgColor?: string;
};

export default function Section({ children, bgColor }: SectionProps) {
	return (
		<section
			className={`w-screen ${bgColor} max-w-8xl mx-auto px-5 lg:px-10 py-10 lg:py-20 font-montserrat`}
		>
			{children}
		</section>
	);
}
