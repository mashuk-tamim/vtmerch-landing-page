import React from "react";

export default function Section({
	children,
	bgColor,
}: Readonly<{
	children: React.ReactNode;
	bgColor: string;
}>) {
  console.log(bgColor);
	return (
		<section className={`w-screen bg-[${bgColor}]`}>
			<div className="max-w-7xl mx-auto">{children}</div>
		</section>
	);
}
