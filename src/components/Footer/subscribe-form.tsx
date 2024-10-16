"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { subscribeFormSchema } from "@/types/subscribe-form-schema";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import AnimatedButton from "../Buttons/animated-button";

export default function SubscribeForm() {
	const form = useForm<z.infer<typeof subscribeFormSchema>>({
		resolver: zodResolver(subscribeFormSchema),
	});

	function onSubmit(values: z.infer<typeof subscribeFormSchema>) {
    // things will be done later
    // to avoid eslint error console.log() is kept deliberately
		console.log(values);
	}
	return (
		<div className="w-3/4 md:w-full">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										placeholder="Enter your email"
										className="text-black text-center placeholder-black font-semibold h-9 lg:h-10"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
          <AnimatedButton text="Subscribe"/>
				</form>
			</Form>
		</div>
	);
}
