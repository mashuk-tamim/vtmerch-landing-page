import Image from "next/image";
import { SocialLinks } from "./social-icons";
import telephone from "@/assets/Icon/telephone (2) 1.svg";
import email from "@/assets/Icon/email 1.svg";

const ContactSection = () => (
	<div className="flex-1">
		<h3 className="text-base lg:text-lg font-semibold mb-2 md:mb-4 text-white">
			Contact Us
		</h3>
		<div className="text-sm lg:text-base inline-block">
			<p className="mb-2">
				Available between 8AM to 8PM. Ready to answer your questions.
			</p>
			<div className="flex flex-col items-center md:items-start">
				<div className="flex items-center gap-2 mb-2">
					<Image src={telephone} alt="telephone" />
					<p>013456789</p>
				</div>
				<div className="flex items-center gap-2 mb-2">
					<Image src={email} alt="email" />
					<p>store@valuetainment.com</p>
				</div>
				<div className="flex gap-4">
					<SocialLinks />
				</div>
			</div>
		</div>
	</div>
);

export default ContactSection;
