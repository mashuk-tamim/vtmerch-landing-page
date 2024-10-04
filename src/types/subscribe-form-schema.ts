import { z } from "zod";

export const subscribeFormSchema = z.object({
	email: z.string().email({
		message: "Username must be at least 2 characters.",
	}),
});
