import { z } from "zod";

const NIGERIAN_STATES = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa",
  "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti",
  "Enugu", "FCT (Abuja)", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano",
  "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger",
  "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto",
  "Taraba", "Yobe", "Zamfara",
];

/**
 * Zod schema for validating the order form on the server side.
 * Client-side validation uses the same rules for fast feedback.
 */
export const orderSchema = z.object({
  fullName: z
    .string()
    .min(2, "Please enter your full name (at least 2 characters).")
    .max(100, "Name is too long.")
    .trim(),

  phone: z
    .string()
    .min(7, "Please enter a valid Nigerian phone number.")
    .max(15, "Phone number is too long.")
    .regex(
      /^(\+?234|0)[789]\d{9}$/,
      "Please enter a valid Nigerian phone number (e.g. 08012345678 or +2348012345678)."
    )
    .trim(),

  whatsappPhone: z
    .string()
    .max(15)
    .regex(
      /^(\+?234|0)[789]\d{9}$/,
      "Please enter a valid Nigerian WhatsApp number."
    )
    .trim()
    .optional()
    .or(z.literal("")),

  email: z
    .string()
    .email("Please enter a valid email address.")
    .max(254)
    .trim()
    .optional()
    .or(z.literal("")),

  state: z
    .string()
    .refine((val) => NIGERIAN_STATES.includes(val), {
      message: "Please select a valid Nigerian state.",
    }),

  city: z
    .string()
    .min(2, "Please enter your city or town.")
    .max(100)
    .trim(),

  address: z
    .string()
    .min(5, "Please enter your full delivery address.")
    .max(500, "Address is too long. Please be concise.")
    .trim(),

  variantId: z
    .string()
    .min(1, "Please select a product variant.")
    .max(50),

  quantity: z
    .number()
    .int("Quantity must be a whole number.")
    .min(1, "Quantity must be at least 1.")
    .max(10, "Maximum 10 units per order. Contact us for bulk orders."),

  notes: z
    .string()
    .max(500, "Notes must be 500 characters or fewer.")
    .trim()
    .optional()
    .or(z.literal("")),

  consentGiven: z
    .literal(true, {
      errorMap: () => ({
        message: "You must agree to the privacy notice to place an order.",
      }),
    }),

  // Attribution fields — stored but never used for pricing
  utmSource: z.string().max(100).optional(),
  utmMedium: z.string().max(100).optional(),
  utmCampaign: z.string().max(200).optional(),
  utmContent: z.string().max(200).optional(),
  utmTerm: z.string().max(200).optional(),
  fbclid: z.string().max(200).optional(),
  ttclid: z.string().max(200).optional(),
  
  // Honeypot — must be empty
  _hp: z.string().max(0, "Spam detected.").optional(),
});

export type OrderSchemaInput = z.input<typeof orderSchema>;
export type OrderSchemaOutput = z.output<typeof orderSchema>;
export const NIGERIAN_STATES_LIST = NIGERIAN_STATES;
