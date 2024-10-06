"use client";
import Link from "next/link";
import Image from "next/image";
import telephone from "@/assets/Icon/telephone (2) 1.svg";
import email from "@/assets/Icon/email 1.svg";
import LinkHoverAnimation from "./link-hover-animation";
import MagneticButton from "./magnetic-button";

const CUSTOMER_SERVICES = [
	"About Us",
	"Search",
	"Privacy Policy",
	"Contact Us",
	"Terms of Service",
	"Refund policy",
	"Track Order",
];

const PRODUCTS = [
	"Featured products",
	"Bestseller",
	"Latest product",
	"All collections",
	"All products",
];

interface SocialIconProps {
	href: string;
	ariaLabel: string;
	children: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({
	href,
	ariaLabel,
	children,
}) => (
	<Link href={href} aria-label={ariaLabel}>
		<MagneticButton>
			<div className="text-white hover:text-red-primary">{children}</div>
		</MagneticButton>
	</Link>
);

const CustomerServiceSection = () => (
	<div className="flex-1">
		<h3 className="text-base lg:text-lg font-semibold mb-2 md:mb-4 text-white">
			Customer Services
		</h3>
		<ul className="space-y-2">
			{CUSTOMER_SERVICES.map((item, idx) => (
				<li key={idx}>
					<Link href="#" className="text-sm lg:text-base inline-block">
						<LinkHoverAnimation text={item} />
					</Link>
				</li>
			))}
		</ul>
	</div>
);

const ProductsSection = () => (
	<div className="flex-1">
		<h3 className="text-base lg:text-lg font-semibold mb-2 md:mb-4 text-white">
			Products
		</h3>
		<ul className="space-y-2">
			{PRODUCTS.map((item) => (
				<li key={item}>
					<Link href="#" className="text-sm lg:text-base inline-block">
						<LinkHoverAnimation text={item} />
					</Link>
				</li>
			))}
		</ul>
	</div>
);

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

const SocialLinks = () => (
	<>
		<SocialIcon
			href="#"
			ariaLabel="Facebook"
		>
			<svg
				width="21"
				height="20"
				viewBox="0 0 21 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M8.57999 11.04C8.51999 11.04 7.19999 11.04 6.59999 11.04C6.27999 11.04 6.17999 10.92 6.17999 10.62C6.17999 9.82002 6.17999 9.00002 6.17999 8.20002C6.17999 7.88002 6.29999 7.78002 6.59999 7.78002H8.57999C8.57999 7.72002 8.57999 6.56002 8.57999 6.02002C8.57999 5.22002 8.71999 4.46002 9.11999 3.76002C9.53999 3.04002 10.14 2.56002 10.9 2.28002C11.4 2.10002 11.9 2.02002 12.44 2.02002H14.4C14.68 2.02002 14.8 2.14002 14.8 2.42002V4.70002C14.8 4.98002 14.68 5.10002 14.4 5.10002C13.86 5.10002 13.32 5.10002 12.78 5.12002C12.24 5.12002 11.96 5.38002 11.96 5.94002C11.94 6.54002 11.96 7.12002 11.96 7.74002H14.28C14.6 7.74002 14.72 7.86002 14.72 8.18002V10.6C14.72 10.92 14.62 11.02 14.28 11.02C13.56 11.02 12.02 11.02 11.96 11.02V17.54C11.96 17.88 11.86 18 11.5 18C10.66 18 9.83999 18 8.99999 18C8.69999 18 8.57999 17.88 8.57999 17.58C8.57999 15.48 8.57999 11.1 8.57999 11.04Z"
					fill="currentColor"
				/>
			</svg>
		</SocialIcon>
		<SocialIcon href="#" ariaLabel="Twitter">
			<svg
				width="21"
				height="20"
				viewBox="0 0 21 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M18.48 5.04C17.88 5.3 17.26 5.48 16.6 5.56C17.28 5.16 17.8 4.52 18.04 3.74C17.4 4.12 16.7 4.38 15.96 4.54C15.36 3.9 14.5 3.5 13.56 3.5C11.74 3.5 10.28 4.98 10.28 6.78C10.28 7.04 10.3 7.28 10.36 7.52C7.63998 7.4 5.23998 6.08 3.61998 4.1C2.45998 6.18 3.75998 7.9 4.61998 8.48C4.09998 8.48 3.57998 8.32 3.13998 8.08C3.13998 9.7 4.27998 11.04 5.75998 11.34C5.43998 11.44 4.71998 11.5 4.27998 11.4C4.69998 12.7 5.91998 13.66 7.33998 13.68C6.21998 14.56 4.57998 15.26 2.47998 15.04C3.93998 15.98 5.65998 16.52 7.51998 16.52C13.56 16.52 16.84 11.52 16.84 7.2C16.84 7.06 16.84 6.92 16.82 6.78C17.5 6.28 18.06 5.7 18.48 5.04Z"
					fill="currentColor"
				/>
			</svg>
		</SocialIcon>
		<SocialIcon
			href="#"
			ariaLabel="LinkedIn"
		>
			<svg
				width="21"
				height="20"
				viewBox="0 0 21 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M18.5 18.0001V12.1401C18.5 9.26006 17.88 7.06006 14.52 7.06006C12.9 7.06006 11.82 7.94006 11.38 8.78006H11.34V7.32006H8.15997V18.0001H11.48V12.7001C11.48 11.3001 11.74 9.96006 13.46 9.96006C15.16 9.96006 15.18 11.5401 15.18 12.7801V17.9801H18.5V18.0001Z"
					fill="currentColor"
				/>
				<path
					d="M2.76001 7.31982H6.08001V17.9998H2.76001V7.31982Z"
					fill="currentColor"
				/>
				<path
					d="M4.42 2C3.36 2 2.5 2.86 2.5 3.92C2.5 4.98 3.36 5.86 4.42 5.86C5.48 5.86 6.34 4.98 6.34 3.92C6.34 2.86 5.48 2 4.42 2Z"
					fill="currentColor"
				/>
			</svg>
		</SocialIcon>
		<SocialIcon href="#" ariaLabel="Instagram">
			<svg
				width="19"
				height="18"
				viewBox="0 0 19 18"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g clipPath="url(#clip0_0_755)">
					<path
						d="M13.5325 0H5.46721C2.72829 0 0.5 2.2284 0.5 4.96732V13.0326C0.5 15.7716 2.72829 17.9999 5.46721 17.9999H13.5325C16.2716 17.9999 18.4999 15.7715 18.4999 13.0326V4.96732C18.5 2.2284 16.2716 0 13.5325 0ZM16.903 13.0326C16.903 14.891 15.391 16.4029 13.5326 16.4029H5.46721C3.6089 16.403 2.09704 14.891 2.09704 13.0326V4.96732C2.09704 3.10901 3.6089 1.59704 5.46721 1.59704H13.5325C15.3909 1.59704 16.9029 3.10901 16.9029 4.96732V13.0326H16.903Z"
						fill="currentColor"
					/>
					<path
						d="M9.49993 4.36182C6.94244 4.36182 4.86182 6.44244 4.86182 8.99993C4.86182 11.5573 6.94244 13.6378 9.49993 13.6378C12.0574 13.6378 14.1381 11.5573 14.1381 8.99993C14.1381 6.44244 12.0574 4.36182 9.49993 4.36182ZM9.49993 12.0407C7.82315 12.0407 6.45885 10.6766 6.45885 8.99983C6.45885 7.32294 7.82304 5.95875 9.49993 5.95875C11.1768 5.95875 12.541 7.32294 12.541 8.99983C12.541 10.6766 11.1767 12.0407 9.49993 12.0407Z"
						fill="currentColor"
					/>
					<path
						d="M14.3325 3.00781C14.0248 3.00781 13.7226 3.13238 13.5053 3.35064C13.2869 3.56784 13.1614 3.87021 13.1614 4.17897C13.1614 4.48678 13.287 4.78904 13.5053 5.0073C13.7225 5.2245 14.0248 5.35013 14.3325 5.35013C14.6413 5.35013 14.9426 5.2245 15.1609 5.0073C15.3791 4.78904 15.5037 4.48667 15.5037 4.17897C15.5037 3.87021 15.3791 3.56784 15.1609 3.35064C14.9437 3.13238 14.6413 3.00781 14.3325 3.00781Z"
						fill="currentColor"
					/>
				</g>
				<defs>
					<clipPath id="clip0_0_755">
						<rect
							width="18"
							height="18"
							fill="white"
							transform="translate(0.5)"
						/>
					</clipPath>
				</defs>
			</svg>
		</SocialIcon>
	</>
);

// Main Component
const FooterLinks = () => {
	return (
		<div className="flex flex-col md:flex-row gap-5 text-center md:text-left justify-between text-[#cccccc]">
			<CustomerServiceSection />
			<ProductsSection />
			<ContactSection />
		</div>
	);
};

export default FooterLinks;
