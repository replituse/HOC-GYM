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
    .length(10, "Phone number must be exactly 10 digits")
    .regex(/^[0-9]+$/, "Phone number must contain only numbers"),
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
