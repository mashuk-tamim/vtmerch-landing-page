import Image from "next/image";
import React from "react";
import logo from "@/assets/Logo/red-logo.svg";
import Subscribe from "./ui/subscribe";
import FooterLinks from "./ui/footer-links";
import FooterPayments from "./ui/footer-payments";

import FooterPayments from "./ui/footer-payments";


export default function Footer() {
	return (
		<footer className="bg-black w-screen max-w-8xl mx-auto px-2 md:px-5 lg:px-10 py-5">
			<div className="">
				{/* logo section */}
				<div className="border-b border-[#535351] pb-5">
					<div className="flex items-center gap-2">
						<Image
							className="size-6 md:size-8 lg:size-16"
							src={logo}
							alt="logo"
						/>
						<h1 className="text-[20px] md:text-[30px] lg:text-[60px] text-white font-extrabold tracking-widest">
						<Image
							className="size-6 md:size-8 lg:size-16"
							src={logo}
							alt="logo"
						/>
						<h1 className="text-[20px] md:text-[30px] lg:text-[60px] text-white font-extrabold tracking-widest">
							VTMERCH
						</h1>
					</div>
				</div>
				{/* links section */}
				<div className="flex flex-col lg:flex-row gap-10 lg:gap-20 pt-10">
					<div className="lg:w-[35%]">
				<div className="flex flex-col lg:flex-row gap-10 lg:gap-20 pt-10">
					<div className="lg:w-[35%]">
						<Subscribe />
					</div>
					<div className="lg:lg:w-[65%]">
						<FooterLinks />
					</div>
				</div>
				{/* footer section */}
				<FooterPayments />
				<FooterPayments />
			</div>
		</footer>
	);
}

/**
 * import Link from 'next/link'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Subscribe and be the first to receive notifications about our upcoming releases and the latest news.</h2>
          <form className="space-y-2">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-transparent border-white text-white placeholder-gray-400"
            />
            <Button className="w-full bg-white text-black hover:bg-gray-200">
              Subscribe
            </Button>
          </form>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Services</h3>
          <ul className="space-y-2">
            {['About Us', 'Search', 'Privacy Policy', 'Contact Us', 'Terms of Service', 'Refund policy', 'Track Order'].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:underline">{item}</Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Products</h3>
          <ul className="space-y-2">
            {['Featured products', 'Bestseller', 'Latest product', 'All collections', 'All products'].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:underline">{item}</Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="mb-2">Available between 8AM to 8PM. Ready to answer your questions.</p>
          <p className="mb-2">013456789</p>
          <p className="mb-4">store@valuetainment.com</p>
          <div className="flex space-x-4">
            <Link href="#" aria-label="Facebook"><Facebook className="w-6 h-6" /></Link>
            <Link href="#" aria-label="Twitter"><Twitter className="w-6 h-6" /></Link>
            <Link href="#" aria-label="LinkedIn"><Linkedin className="w-6 h-6" /></Link>
            <Link href="#" aria-label="Instagram"><Instagram className="w-6 h-6" /></Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
 * 
 * 
 */
