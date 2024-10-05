import { z } from "zod";

export const subscribeFormSchema = z.object({
	email: z.string().email({
		message: "Invalid email",
	}),
});
