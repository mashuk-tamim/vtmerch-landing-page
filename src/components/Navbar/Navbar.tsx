import Image from "next/image";
import logo from "@/assets/Logo/red-logo.svg";
import Menu from "./menu";
import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="w-screen max-w-8xl mx-auto font-montserrat bg-black px-2 md:px-5 lg:px-10 py-2 md:py-5">
			<div className="relative flex justify-between items-center">
				<Link href="/">
					<div className="flex items-center gap-1 lg:gap-4">
						<Image
							className="size-7 md:size-10 lg:size-20"
							src={logo}
							alt="logo"
						/>
						<h1 className="text-[20px] md:text-[30px] lg:text-[80px] text-white font-extrabold tracking-widest">
							VTMERCH
						</h1>
					</div>
				</Link>
				<div className="">
					<Menu />
				</div>
			</div>
		</nav>
	);
}
