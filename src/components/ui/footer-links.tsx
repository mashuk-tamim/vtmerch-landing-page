import Link from "next/link";


import facebook from "@/assets/Icon/facebook (4).svg";
import twitter from "@/assets/Icon/twitter (4).svg";
import linkedIn from "@/assets/Icon/linkedin (3).svg";
import instagram from "@/assets/Icon/instagram-logo (1).svg";
import telephone from "@/assets/Icon/telephone (2) 1.svg";
import email from "@/assets/Icon/email 1.svg";
import Image from "next/image";

const FooterLinks = () => {
	return (
		<div className="flex flex-col md:flex-row gap-5 text-center md:text-left justify-between text-[#cccccc]">
			<div className="flex-1">
				<h3 className="text-base lg:text-lg font-semibold mb-2 md:mb-4 text-white">
					Customer Services
				</h3>
				<ul className="space-y-2">
					{customerServices.map((item) => (
						<li key={item}>
							<Link href="#" className="hover:underline text-sm lg:text-base">
								{item}
							</Link>
						</li>
					))}
				</ul>
			</div>
			<div className="flex-1">
				<h3 className="text-base lg:text-lg font-semibold mb-2 md:mb-4 text-white">
					Products
				</h3>
				<ul className="space-y-2">
					{products.map((item) => (
						<li key={item}>
							<Link href="#" className="hover:underline">
								{item}
							</Link>
						</li>
					))}
				</ul>
			</div>
			<div className="flex-1">
				<h3 className="text-base lg:text-lg font-semibold mb-2 md:mb-4 text-white">
					Contact Us
				</h3>
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
};

export default FooterLinks;

const customerServices = [
	"About Us",
	"Search",
	"Privacy Policy",
	"Contact Us",
	"Terms of Service",
	"Refund policy",
	"Track Order",
];

const products = [
	"Featured products",
	"Bestseller",
	"Latest product",
	"All collections",
	"All products",
];

const SocialLinks = () => {
	return (
		<>
			<Link href="#" aria-label="Facebook">
				<Image src={facebook} alt="facebook" />
			</Link>
			<Link href="#" aria-label="Twitter">
				<Image src={twitter} alt="twitter" />
			</Link>
			<Link href="#" aria-label="LinkedIn">
				<Image src={linkedIn} alt="linkedIn" />
			</Link>
			<Link href="#" aria-label="Instagram">
				<Image src={instagram} alt="instagram" />
			</Link>
		</>
	);
};
