import CustomerServiceLinks from "./customer-service-links";
import ProductsLinks from "./product-links";
import ContactSection from "./contact-section";

const FooterLinks = () => {
	return (
		<div className="flex flex-col md:flex-row gap-5 text-center md:text-left justify-between text-grey-primary">
			<CustomerServiceLinks />
			<ProductsLinks />
			<ContactSection />
		</div>
	);
};

export default FooterLinks;
