import BestSellingProducts from "@/components/BestSellingProducts";
import Book from "@/components/Book";
import Hero from "@/components/Hero";
import Patrick from "@/components/Patrick";
// import WindowSize from "@/components/WindowSize";

export default function Home() {
	return (
		<main className="w-screen max-w-8xl mx-auto">
      {/* <h1 className="font-actOfRejection">Welcome to the VTMERCH</h1> */}
      <Hero />
      {/* <WindowSize/> */}
      <BestSellingProducts />
      <Book/>
      <Patrick/>
		</main>
	);
}
