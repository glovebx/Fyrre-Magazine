import { z } from "zod";

export const subscribeNewsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  source: z.string().min(1, { message: 'Please add source string.' }).max(1000),
});

export type TSubscribeNewsletterSchema = z.infer<
  typeof subscribeNewsletterSchema
>;
