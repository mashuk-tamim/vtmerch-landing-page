import Image from "next/image";
import logo from "@/assets/Logo/white-logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
	return (
		<nav className="bg-red-primary w-screen">
			<div className="flex justify-between items-center max-w-7xl mx-auto lg:px-10 lg:py-5">
				<div className="flex items-center gap-4">
					<Image className="size-20 text-white" src={logo} alt="logo" />
					<h1 className="text-[80px] text-white font-extrabold font-montserrat tracking-widest">
						VTMERCH
					</h1>
				</div>
				<div>
					<GiHamburgerMenu className="text-4xl text-white"/>
				</div>
			</div>
		</nav>
	);
}
