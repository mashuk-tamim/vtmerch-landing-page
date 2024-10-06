import Link from "next/link";
import LinkHoverAnimation from "../ui/link-hover-animation";

const CustomerServiceLinks = () => (
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

export default CustomerServiceLinks

const CUSTOMER_SERVICES = [
	"About Us",
	"Search",
	"Privacy Policy",
	"Contact Us",
	"Terms of Service",
	"Refund policy",
	"Track Order",
];