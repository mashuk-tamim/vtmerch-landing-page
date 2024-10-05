"use client";
import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { subscribeFormSchema } from "@/types/subscribe-form-schema";

import { Button } from "@/components/ui/button";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "./input";

export default function SubscribeForm() {
	const form = useForm<z.infer<typeof subscribeFormSchema>>({
		resolver: zodResolver(subscribeFormSchema),
	});

	function onSubmit(values: z.infer<typeof subscribeFormSchema>) {
		// Do something with the form values.
		console.log(values);
	}
	return (
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
									className="text-black text-center placeholder-black"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button variant="subscribe" type="submit">
					Subscribe
				</Button>
			</form>
		</Form>
	);
}
