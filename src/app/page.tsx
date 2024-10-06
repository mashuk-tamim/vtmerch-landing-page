"use client"
import BestSellingProducts from "@/components/BestSellingProducts/BestSellingProducts";
import Book from "@/components/Book";
import Hero from "@/components/Hero/Hero";
import Patrick from "@/components/Patrick";
import Lenis from 'lenis'
import { useEffect } from "react";

export default function Home() {
  // smooth scroll
	useEffect(() => {
		const lenis = new Lenis();
		function raf(time: any) {
			lenis.raf(time * 1.20);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
  }, []);
  
	return (
		<main className="w-screen max-w-8xl mx-auto">
			<Hero />
			<BestSellingProducts />
			<Book />
			<Patrick />
		</main>
	);
}
