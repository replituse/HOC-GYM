import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name should only contain letters and spaces"),
  email: z.string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(100, "Email must be less than 100 characters"),
  contactNumber: z.string()
    .min(10, "Contact number must be at least 10 digits")
    .max(15, "Contact number must be less than 15 digits")
    .regex(/^[0-9+\-\s()]+$/, "Please enter a valid phone number"),
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
