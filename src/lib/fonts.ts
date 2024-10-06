import localFont from "next/font/local";
import { Inter, Montserrat } from "next/font/google";

export const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	weight: ["400", "500", "600", "700", "800", "900"],
});

export const montserrat = Montserrat({
	subsets: ["latin"],
	variable: "--font-montserrat",
	weight: ["400", "500", "600", "700", "800", "900"],
});

export const actOfRejection = localFont({
	src: "../assets/font/Act_Of_Rejection.ttf",
	variable: "--font-act-of-rejection",
	weight: "400 500 600 700 800 900",
});
