import localFont from "next/font/local";
import { Inter, Montserrat } from "next/font/google";

export const inter = Inter({
	subsets: ["latin"],
  variable: "--font-inter",
  weight: "700"
});

export const montserrat = Montserrat({
	subsets: ["latin"],
  variable: "--font-montserrat",
  weight: "700"
});

export const actOfRejection = localFont({
	src: "../assets/font/Act_Of_Rejection.ttf",
	variable: "--font-act-of-rejection",
	weight: "700 900",
});
