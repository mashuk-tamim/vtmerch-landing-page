"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import NavigationMenu from "./navigation-menu";

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
						className="flex size-8 md:size-10 lg:size-16  cursor-pointer items-center justify-center rounded-full bg-white shadow-lg"
					>
						<div className="relative w-full">
							<span
								className={`relative block w-full before:absolute before:left-1/2 before:top-[3px] md:before:top-[4px] before:block before:h-[2px] before:w-2/5 before:-translate-x-1/2 before:bg-red-primary before:transition-transform after:absolute after:left-1/2 after:top-[-3px] md:after:top-[-4px] after:block after:h-[2px] after:w-2/5 after:-translate-x-1/2 after:bg-red-primary after:transition-transform ${
									isActive
										? "before:top-[0px] md:before:top-[0px] lg:before:-top-[0px] before:rotate-45 after:top-[0px] md:after:-top-[0px] lg:after:-top-[0px] after:-rotate-45"
										: ""
								}`}
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
