import Link from "next/link";
import LinkHoverAnimation from "../ui/link-hover-animation";

const ProductsLinks = () => (
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

export default ProductsLinks

const PRODUCTS = [
	"Featured products",
	"Bestseller",
	"Latest product",
	"All collections",
	"All products",
];
