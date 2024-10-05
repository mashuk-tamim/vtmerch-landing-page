import BestSellingProducts from "@/components/BestSellingProducts";
import Book from "@/components/Book";
import Hero from "@/components/Hero";
import Patrick from "@/components/Patrick";

export default function Home() {
	return (
		<main className="w-screen max-w-8xl mx-auto">
      <Hero />
      <BestSellingProducts />
      <Book/>
      <Patrick/>
		</main>
	);
}
