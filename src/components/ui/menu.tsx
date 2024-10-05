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
						{/* Container to hold the lines */}
						<div className="relative size-[20px] md:size-[30px] lg:size-[50px] flex items-center justify-center gap-2">
							{/* Line 1 */}
							<Image
								src={line}
								alt="menu-line"
								className={`absolute w-full lg:w-4/5 transition-transform duration-300 ease-in-out ${
									isActive ? "rotate-45" : ""
								}`}
								style={{ top: isActive ? "50%" : "35%" }}
							/>
							{/* Line 2 */}
							<Image
								src={line}
								alt="menu-line"
								className={`absolute w-full lg:w-4/5 transition-transform duration-300 ease-in-out ${
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

// "use client";

// import { useEffect, useState } from "react";
// import { AnimatePresence } from "framer-motion";
// import { usePathname } from "next/navigation";
// import NavigationMenu from "./navigation-menu";
// import Image from "next/image";
// import line from "@/assets/Icon/line.svg"

// export default function Menu(): JSX.Element {
// 	const [isActive, setIsActive] = useState<boolean>(false);
// 	const pathname = usePathname();

// useEffect(() => {
// 	setIsActive(false);
// }, [pathname]);

// 	return (
// 		<>
// 			<div className="w-full">
// 				<div className="fixed right-2 top-2 md:right-5 md:top-5 lg:right-10 lg:top-10 z-[100]">
// 					<button
// 						onClick={() => setIsActive(!isActive)}
// 						className="flex size-8 md:size-10 lg:size-16  cursor-pointer items-center justify-center rounded-full bg-white shadow-lg"
// 					>
// 						<div className="relative w-full p-2 flex flex-col gap-1">
// 							<Image
// 								src={line}
// 								alt="menu-line"
// 								className={`w-[20px] md:w-[30px] lg:w-[40px] absolute transition-transform duration-300 ease-in-out ${
// 									isActive ? "rotate-45 " : "rotate-0"
// 								}`}
// 							/>
// 							<Image
// 								src={line}
// 								alt="menu-line"
// 								className={`w-[20px] md:w-[30px] lg:w-[40px] absolute transition-transform duration-300 ease-in-out ${
//                   isActive ? "-rotate-45 " : "rotate-0"
// 								}`}
//                 />
// 						</div>
// 					</button>
// 				</div>
// 			</div>
// 			<AnimatePresence mode="wait">
// 				{isActive && <NavigationMenu />}
// 			</AnimatePresence>
// 		</>
// 	);
// }

{
	/* <span
                  className={`relative block w-full before:absolute before:left-1/2 before:top-[3px] md:before:top-[4px] before:block before:h-[2px] before:w-2/5 before:-translate-x-1/2 before:bg-red-primary before:transition-transform after:absolute after:left-1/2 after:top-[-3px] md:after:top-[-4px] after:block after:h-[2px] after:w-2/5 after:-translate-x-1/2 after:bg-red-primary after:transition-transform ${
                    isActive
                      ? "before:top-[0px] md:before:top-[0px] lg:before:-top-[0px] before:rotate-45 after:top-[0px] md:after:-top-[0px] lg:after:-top-[0px] after:-rotate-45"
                      : ""
                  }`}
                /> */
}
