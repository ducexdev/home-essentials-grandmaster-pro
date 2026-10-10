/**
 * Grandmaster Pro — Product Configuration
 *
 * ⚠️  CONTENT APPROVAL REQUIRED
 * All prices, variants, and claims marked with [PLACEHOLDER] must be
 * verified and approved by Home Essentials before publication.
 * Do NOT publish unverified prices, wattage, or warranty terms.
 */

export interface ProductVariant {
  id: string;
  name: string;
  /** Price in Naira minor units (kobo). Must be verified before publishing. */
  priceKobo: number;
  /** Display string e.g. "₦45,000" */
  priceDisplay: string;
  /** Whether this variant is currently available */
  available: boolean;
  /** Short descriptor shown in the variant selector */
  description?: string;
}

export interface ProductConfig {
  slug: string;
  name: string;
  tagline: string;
  brand: string;
  /** [PLACEHOLDER] Verify actual wattage before publishing */
  wattage: string | null;
  /** [PLACEHOLDER] Verify actual material before publishing */
  material: string | null;
  variants: ProductVariant[];
  /** Delivery policy — verify with business before publishing */
  deliveryPolicy: {
    nationwide: boolean;
    /** [PLACEHOLDER] Verify actual delivery timeline */
    estimatedDays: string;
    /** [PLACEHOLDER] Confirm free delivery policy with business */
    freeDelivery: boolean;
    /** [PLACEHOLDER] Confirm payment on delivery with business */
    paymentOnDelivery: boolean;
    deliveryNote: string;
  };
  /** Warranty/return policy — verify with business before publishing */
  warrantyPolicy: {
    /** [PLACEHOLDER] Confirm warranty duration */
    warrantyYears: number | null;
    /** [PLACEHOLDER] Confirm replacement window */
    replacementDays: number | null;
    /** [PLACEHOLDER] Confirm refund policy */
    moneyBackGuarantee: boolean;
    policyNote: string;
  };
  contact: {
    email: string;
    whatsapp: string;
    whatsappDisplay: string;
    phone?: string;
  };
}

/**
 * ⚠️  ALL PRICES, WATTAGE, VARIANTS AND POLICY DETAILS BELOW ARE PLACEHOLDERS.
 * The business owner must review and approve each field before the page goes live.
 * Replace [PLACEHOLDER] values with verified information from Home Essentials.
 */
export const PRODUCT_CONFIG: ProductConfig = {
  slug: "grandmaster-pro",
  name: "Grandmaster Pro",
  tagline: "Built to Last.",
  brand: "Home Essentials",

  // [PLACEHOLDER] — replace with verified wattage from product documentation
  wattage: null,

  // [PLACEHOLDER] — replace with verified material from product documentation
  material: null,

  variants: [
    // [PLACEHOLDER] — All prices and sizes below are EXAMPLES only.
    // Replace with actual Grandmaster Pro variant names and verified prices.
    {
      id: "standard",
      name: "Standard",
      priceKobo: 0, // [PLACEHOLDER] — set actual price in kobo (₦1 = 100 kobo)
      priceDisplay: "[PRICE — AWAITING APPROVAL]",
      available: false,
      description: "[Description — awaiting product details]",
    },
  ],

  deliveryPolicy: {
    nationwide: true, // [PLACEHOLDER] — confirm delivery coverage with business
    estimatedDays: "[AWAITING CONFIRMATION]", // e.g. "3-7 working days"
    freeDelivery: false, // [PLACEHOLDER] — confirm free delivery policy
    paymentOnDelivery: false, // [PLACEHOLDER] — confirm payment on delivery
    deliveryNote:
      "Delivery terms to be confirmed. Contact us for current delivery options.",
  },

  warrantyPolicy: {
    warrantyYears: null, // [PLACEHOLDER] — e.g. 1 or 2
    replacementDays: null, // [PLACEHOLDER] — e.g. 7 or 14
    moneyBackGuarantee: false, // [PLACEHOLDER] — confirm with business
    policyNote:
      "Warranty and return terms to be confirmed. Contact us for current policy details.",
  },

  contact: {
    email: "order@homeessentials.com.ng",
    whatsapp: "2347045787045",
    whatsappDisplay: "+234 704 578 7045",
    phone: "+234 704 578 7045",
  },
};

/**
 * Safely look up a variant by ID.
 * Returns null if the variant is not found or not available.
 */
export function getVariant(variantId: string): ProductVariant | null {
  return (
    PRODUCT_CONFIG.variants.find(
      (v) => v.id === variantId && v.available
    ) ?? null
  );
}

/**
 * Validate that a submitted variant ID and quantity are legitimate.
 * All price calculations must happen server-side using this function.
 */
export function validateVariantAndQuantity(
  variantId: string,
  quantity: number
): { valid: false; error: string } | { valid: true; variant: ProductVariant; totalKobo: number } {
  const variant = getVariant(variantId);
  if (!variant) {
    return { valid: false, error: "Selected variant is not available." };
  }
  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 10) {
    return { valid: false, error: "Quantity must be between 1 and 10." };
  }
  if (variant.priceKobo <= 0) {
    return { valid: false, error: "Pricing for this variant is not yet configured. Please contact us to place an order." };
  }
  return {
    valid: true,
    variant,
    totalKobo: variant.priceKobo * quantity,
  };
}
