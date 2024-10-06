"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import { menuSlide } from "@/animations/menu-anim";
import NavigationMenuLink from "./navigation-menu-link";
import Curve from "../ui/curve";
import { NavItem } from "@/types/menu-types";

export default function NavigationMenu(): JSX.Element {
  const pathname = usePathname();
	const [selectedIndicator, setSelectedIndicator] = useState<string>(pathname);
  
	return (
		<motion.div
			variants={menuSlide}
			initial="initial"
			animate="enter"
			exit="exit"
			className="fixed right-0 top-0 z-50 h-screen bg-black-primary text-white border-l-2 border-red-secondary"
		>
			<div className="flex h-full flex-col justify-between box-border p-24">
				<nav
					onMouseLeave={() => setSelectedIndicator(pathname)}
					className="mt-20 flex flex-col gap-3"
				>
					<div className="mb-10 border-b border-grey-primary text-xs uppercase text-grey-primary">
						<p>Navigation</p>
					</div>
					{navItems.map((data, index) => (
						<NavigationMenuLink
							key={index}
							data={{ ...data, index }}
							isActive={selectedIndicator === data.href}
							setSelectedIndicator={setSelectedIndicator}
						/>
					))}
				</nav>
			</div>
			<Curve />
		</motion.div>
	);
}

const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "All Products",
    href: "/all-products",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];