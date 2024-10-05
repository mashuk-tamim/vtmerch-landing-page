import { StaticImageData } from "next/image";

export type CardTypes = {
	id: number;
	title: string;
	recentPrice: string;
	previousPrice: string;
  img: StaticImageData;
  href: string;
};
