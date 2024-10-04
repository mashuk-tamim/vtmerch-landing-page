import { StaticImageData } from "next/image";

export type ShirtProps = {
	id: number;
	title: string;
	recentPrice: string;
	previousPrice: string;
	img: StaticImageData;
};
