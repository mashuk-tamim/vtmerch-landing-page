import React from 'react'
import Image from 'next/image';

import visa1 from "@/assets/Icon/visa 1.svg";
import applyPay from "@/assets/Icon/apple-pay 1.svg";
import dinerClub from "@/assets/Icon/diners-club 1.svg";
import amex from "@/assets/Icon/amex 1.svg";
import paypal from "@/assets/Icon/paypal 1.svg";
import americanExpress from "@/assets/Icon/american-express (1) 1.svg";

export default function FooterPayments() {
  return (
		<div className="flex flex-col-reverse md:flex-row gap-2 items-center justify-between pt-10">
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
	);
}
