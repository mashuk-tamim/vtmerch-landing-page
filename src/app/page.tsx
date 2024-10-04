import BestSellingProducts from "@/components/BestSellingProducts";
import Hero from "@/components/Hero";

export default function Home() {
	return (
		<main>
      {/* <h1 className="font-actOfRejection">Welcome to the VTMERCH</h1> */}
      <Hero />
      <BestSellingProducts/>
		</main>
	);
}
