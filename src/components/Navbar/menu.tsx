"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import NavigationMenu from "./navigation-menu";
import Image from "next/image";
import line from "@/assets/Icon/line.svg";

export default function Menu(): JSX.Element {
	const [isActive, setIsActive] = useState<boolean>(false);
	const pathname = usePathname();

	useEffect(() => {
		setIsActive(false);
	}, [pathname]);

	return (
		<>
			<div className="w-full">
				<div className="fixed right-2 top-2 md:right-5 md:top-5 lg:right-10 lg:top-10 z-[100]">
					<button
						onClick={() => setIsActive(!isActive)}
						className="flex items-center justify-center cursor-pointer rounded-full bg-white shadow-lg size-8 md:size-10 lg:size-16"
					>
						<div className="relative size-[20px] md:size-[30px] lg:size-[50px] flex items-center justify-center gap-2">
							<Image
								src={line}
								alt="menu-line"
								className={`absolute w-full md:w-4/5 transition-transform duration-300 ease-in-out ${
									isActive ? "rotate-45" : ""
								}`}
								style={{ top: isActive ? "50%" : "35%" }}
							/>
							<Image
								src={line}
								alt="menu-line"
								className={`absolute w-full md:w-4/5 transition-transform duration-300 ease-in-out ${
									isActive ? "-rotate-45" : ""
								}`}
								style={{ top: isActive ? "50%" : "55%" }}
							/>
						</div>
					</button>
				</div>
			</div>
			<AnimatePresence mode="wait">
				{isActive && <NavigationMenu />}
			</AnimatePresence>
		</>
	);
}
