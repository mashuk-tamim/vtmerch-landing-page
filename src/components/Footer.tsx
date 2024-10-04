import Image from "next/image";
import React from "react";
import logo from "@/assets/Logo/red-logo.svg";
import Subscribe from "./ui/subscribe";
import FooterLinks from "./ui/footer-links";
import visa1 from "@/assets/Icon/visa 1.svg";
import applyPay from "@/assets/Icon/apple-pay 1.svg";
import dinerClub from "@/assets/Icon/diners-club 1.svg";
import amex from "@/assets/Icon/amex 1.svg";
import paypal from "@/assets/Icon/paypal 1.svg";
import americanExpress from "@/assets/Icon/american-express (1) 1.svg";

export default function Footer() {
	return (
		<footer className="bg-black w-screen">
			<div className="max-w-7xl mx-auto lg:px-10 lg:py-5">
				{/* logo section */}
				<div className="border-b border-[#535351] pb-5">
					<div className="flex items-center gap-2">
						<Image className="size-[60px] text-white" src={logo} alt="logo" />
						<h1 className="text-[60px] text-white font-extrabold font-montserrat tracking-wide">
							VTMERCH
						</h1>
					</div>
				</div>
				{/* links section */}
				<div className="flex gap-20 pt-10">
					<div className="w-[35%]">
						<Subscribe />
					</div>
					<div className="w-[65%]">
						<FooterLinks />
					</div>
				</div>
				{/* footer section */}
				<div className="flex justify-between pt-10">
					<div>
						<p className="text-[#cccccc] text-xs">
							&copy; 2024 Valuetainment Store. All rights reserved.
						</p>
					</div>
					<div className="flex gap-2">
						<Image src={visa1} alt="visa" />
						<Image src={applyPay} alt="applyPay" />
						<Image src={dinerClub} alt="dinerClub" />
						<Image src={visa1} alt="visa" />
						<Image src={amex} alt="amex" />
						<Image src={paypal} alt="paypal" />
						<Image src={americanExpress} alt="americanExpress" />
					</div>
				</div>
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
