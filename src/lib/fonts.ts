import localFont from "next/font/local";
import { Inter, Montserrat } from "next/font/google";

export const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

export const montserrat = Montserrat({
	subsets: ["latin"],
	variable: "--font-montserrat",
});

export const actOfRejection = localFont({
	src: "../assets/font/Act_Of_Rejection.ttf",
	variable: "--font-act-of-rejection",
	weight: "100 900",
});
