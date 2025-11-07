import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  contactNumber: z.string().min(10, "Please enter a valid contact number"),
  purpose: z.enum([
    "weight-loss",
    "body-toning", 
    "postpartum",
    "strength-building",
    "general-fitness"
  ], {
    required_error: "Please select a purpose"
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
