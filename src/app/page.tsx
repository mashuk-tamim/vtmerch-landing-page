import BestSellingProducts from "@/components/BestSellingProducts";
import Book from "@/components/Book";
import Hero from "@/components/Hero";
import Patrick from "@/components/Patrick";

export default function Home() {
	return (
		<main>
      {/* <h1 className="font-actOfRejection">Welcome to the VTMERCH</h1> */}
      <Hero />
      <BestSellingProducts />
      <Book/>
      <Patrick/>
		</main>
	);
}
